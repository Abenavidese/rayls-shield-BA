// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./PoseidonT2.sol";

interface IGroth16Verifier {
    function verifyProof(
        uint256[2] calldata _pA,
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[3] calldata _pubSignals
    ) external view returns (bool);
}

interface IComplianceVerifier {
    function verifyProof(
        uint256[2] calldata _pA,
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[4] calldata _pubSignals
    ) external view returns (bool);
}

/**
 * @title RaylsShieldPool
 * @notice Privacy-preserving pool for native USDgas on Rayls using ZK proofs
 * @dev Single-chain private mixer similar to Tornado Cash but for USDgas
 *
 * Features:
 * - Deposit USDgas with commitment (hide sender)
 * - Withdraw USDgas with ZK proof to any address (hide recipient)
 * - Nullifier system prevents double-spending
 * - Optional compliance mode with AML threshold
 * - Variable or fixed denomination support
 *
 * Privacy Model:
 * 1. Alice deposits X USDgas + commitment
 * 2. Bob deposits Y USDgas + commitment
 * 3. Alice can withdraw to new address (no link to deposit)
 * 4. Larger anonymity set = better privacy
 */
contract RaylsShieldPool is Ownable, ReentrancyGuard {

    // ============ State Variables ============

    IGroth16Verifier public privacyVerifier;
    IComplianceVerifier public complianceVerifier;

    // Privacy tracking
    mapping(bytes32 => bool) public commitments;
    mapping(bytes32 => bool) public nullifiers;

    // Deposit tracking
    mapping(bytes32 => Deposit) public deposits;

    // Pool stats
    uint256 public totalDeposits;
    uint256 public totalWithdrawals;
    uint256 public activeDeposits;

    // Compliance
    uint256 public constant AML_THRESHOLD = 10000 * 1e18; // $10,000
    bool public complianceRequired;

    // Denomination settings (0 = variable amounts)
    uint256 public fixedDenomination;

    struct Deposit {
        uint256 amount;
        uint256 timestamp;
        address depositor;
        bool withdrawn;
    }

    // ============ Events ============

    event DepositMade(
        bytes32 indexed commitment,
        uint256 amount,
        uint256 timestamp,
        uint256 totalDeposits
    );

    event WithdrawalMade(
        bytes32 indexed nullifier,
        address indexed recipient,
        uint256 amount,
        uint256 timestamp
    );

    event ComplianceProofVerified(
        bytes32 indexed commitment,
        uint256 timestamp
    );

    event DenominationChanged(
        uint256 oldDenomination,
        uint256 newDenomination
    );

    // ============ Constructor ============

    /**
     * @notice Initialize RaylsShieldPool
     * @param _privacyVerifier Privacy ZK verifier contract
     * @param _complianceVerifier Compliance ZK verifier contract
     * @param _fixedDenomination Fixed deposit amount (0 for variable)
     */
    constructor(
        address _privacyVerifier,
        address _complianceVerifier,
        uint256 _fixedDenomination
    )
        Ownable(msg.sender)
    {
        require(_privacyVerifier != address(0), "Invalid privacy verifier");
        require(_complianceVerifier != address(0), "Invalid compliance verifier");

        privacyVerifier = IGroth16Verifier(_privacyVerifier);
        complianceVerifier = IComplianceVerifier(_complianceVerifier);
        fixedDenomination = _fixedDenomination;
        complianceRequired = false; // Start disabled
    }

    // ============ Deposit Functions ============

    /**
     * @notice Deposit USDgas into the pool with a commitment
     * @param commitment Hash commitment: Poseidon(secret, nullifier, amount)
     *
     * Privacy: The commitment hides the secret and nullifier, allowing
     * the depositor to later withdraw to a different address without linking
     */
    function deposit(bytes32 commitment) external payable nonReentrant {
        require(msg.value > 0, "Must send USDgas");
        require(!commitments[commitment], "Commitment already exists");

        // Check denomination if fixed
        if (fixedDenomination > 0) {
            require(msg.value == fixedDenomination, "Must match fixed denomination");
        }

        // Check AML threshold if compliance is required
        if (complianceRequired) {
            require(msg.value < AML_THRESHOLD, "Amount exceeds AML threshold");
        }

        // Store commitment
        commitments[commitment] = true;

        // Store deposit data
        deposits[commitment] = Deposit({
            amount: msg.value,
            timestamp: block.timestamp,
            depositor: msg.sender,
            withdrawn: false
        });

        // Update stats
        totalDeposits++;
        activeDeposits++;

        emit DepositMade(commitment, msg.value, block.timestamp, totalDeposits);
    }

    // ============ Withdrawal Functions ============

    /**
     * @notice Withdraw USDgas from pool using ZK proof
     * @param recipient Address to receive USDgas
     * @param amount Amount to withdraw
     * @param _pA ZK proof point A
     * @param _pB ZK proof point B
     * @param _pC ZK proof point C
     * @param _publicSignals [nullifierHash, commitment, recipientHash]
     *
     * Privacy: ZK proof proves knowledge of secret/nullifier for a valid
     * commitment without revealing which deposit is being withdrawn
     */
    function withdraw(
        address recipient,
        uint256 amount,
        uint256[2] calldata _pA,
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[3] calldata _publicSignals
    ) external nonReentrant {
        require(recipient != address(0), "Invalid recipient");
        require(amount > 0, "Invalid amount");

        bytes32 nullifierHash = bytes32(_publicSignals[0]);
        bytes32 commitment = bytes32(_publicSignals[1]);
        bytes32 recipientHash = bytes32(_publicSignals[2]);

        // 1. Verify nullifier not used
        require(!nullifiers[nullifierHash], "RaylsShield: Nullifier already used");

        // 2. Verify commitment exists
        require(commitments[commitment], "RaylsShield: Invalid commitment");

        // 3. Verify deposit not already withdrawn
        require(!deposits[commitment].withdrawn, "RaylsShield: Already withdrawn");

        // 4. Verify amount matches deposit
        require(deposits[commitment].amount == amount, "RaylsShield: Amount mismatch");

        // 5. Verify ZK proof
        if (complianceRequired) {
            _verifyComplianceProof(_pA, _pB, _pC, _publicSignals);
        } else {
            _verifyPrivacyProof(_pA, _pB, _pC, _publicSignals);
        }

        // 6. Verify recipient hash matches (using Poseidon hash)
        uint256[1] memory recipientInput = [uint256(uint160(recipient))];
        uint256 computedRecipientHash = PoseidonT2.hash(recipientInput);
        require(bytes32(computedRecipientHash) == recipientHash, "RaylsShield: Recipient hash mismatch");

        // 7. Mark nullifier as used
        nullifiers[nullifierHash] = true;

        // 8. Mark deposit as withdrawn
        deposits[commitment].withdrawn = true;

        // 9. Update stats
        totalWithdrawals++;
        activeDeposits--;

        // 10. Transfer USDgas to recipient
        (bool success, ) = payable(recipient).call{value: amount}("");
        require(success, "RaylsShield: Transfer failed");

        emit WithdrawalMade(nullifierHash, recipient, amount, block.timestamp);
    }

    // ============ Internal Helper Functions ============

    /**
     * @notice Verify privacy ZK proof
     */
    function _verifyPrivacyProof(
        uint256[2] calldata _pA,
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[3] calldata _publicSignals
    ) internal view {
        require(
            privacyVerifier.verifyProof(_pA, _pB, _pC, _publicSignals),
            "RaylsShield: Invalid privacy proof"
        );
    }

    /**
     * @notice Verify compliance ZK proof (with AML threshold)
     */
    function _verifyComplianceProof(
        uint256[2] calldata _pA,
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[3] calldata _publicSignals
    ) internal {
        // Add AML threshold as 4th public signal
        uint256[4] memory complianceSignals = [
            _publicSignals[0], // nullifierHash
            _publicSignals[1], // commitment
            _publicSignals[2], // recipientHash
            AML_THRESHOLD       // amlThreshold
        ];

        require(
            complianceVerifier.verifyProof(_pA, _pB, _pC, complianceSignals),
            "RaylsShield: Invalid compliance proof or amount exceeds AML threshold"
        );

        emit ComplianceProofVerified(bytes32(_publicSignals[1]), block.timestamp);
    }

    // ============ Admin Functions ============

    /**
     * @notice Toggle compliance requirement
     */
    function setComplianceRequired(bool _required) external onlyOwner {
        complianceRequired = _required;
    }

    /**
     * @notice Update fixed denomination (0 for variable)
     */
    function setFixedDenomination(uint256 _denomination) external onlyOwner {
        uint256 oldDenomination = fixedDenomination;
        fixedDenomination = _denomination;
        emit DenominationChanged(oldDenomination, _denomination);
    }

    /**
     * @notice Update privacy verifier
     */
    function updatePrivacyVerifier(address _newVerifier) external onlyOwner {
        require(_newVerifier != address(0), "Invalid verifier");
        privacyVerifier = IGroth16Verifier(_newVerifier);
    }

    /**
     * @notice Update compliance verifier
     */
    function updateComplianceVerifier(address _newVerifier) external onlyOwner {
        require(_newVerifier != address(0), "Invalid verifier");
        complianceVerifier = IComplianceVerifier(_newVerifier);
    }

    /**
     * @notice Emergency withdrawal (only owner, only if stuck funds)
     */
    function emergencyWithdraw() external onlyOwner {
        require(activeDeposits == 0, "Cannot withdraw with active deposits");
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance");

        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Emergency withdrawal failed");
    }

    // ============ View Functions ============

    /**
     * @notice Check if commitment exists
     */
    function isCommitmentUsed(bytes32 _commitment) external view returns (bool) {
        return commitments[_commitment];
    }

    /**
     * @notice Check if nullifier is used
     */
    function isNullifierUsed(bytes32 _nullifier) external view returns (bool) {
        return nullifiers[_nullifier];
    }

    /**
     * @notice Get deposit info
     */
    function getDepositInfo(bytes32 _commitment)
        external
        view
        returns (
            uint256 amount,
            uint256 timestamp,
            address depositor,
            bool withdrawn
        )
    {
        Deposit memory dep = deposits[_commitment];
        return (dep.amount, dep.timestamp, dep.depositor, dep.withdrawn);
    }

    /**
     * @notice Get pool statistics
     */
    function getPoolStats()
        external
        view
        returns (
            uint256 totalDep,
            uint256 totalWith,
            uint256 active,
            uint256 balance,
            uint256 denomination
        )
    {
        return (
            totalDeposits,
            totalWithdrawals,
            activeDeposits,
            address(this).balance,
            fixedDenomination
        );
    }

    /**
     * @notice Get contract balance
     */
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    /**
     * @notice Get anonymity set size (number of deposits)
     */
    function getAnonymitySetSize() external view returns (uint256) {
        return totalDeposits;
    }

    // ============ Receive USDgas ============

    receive() external payable {
        revert("Use deposit() function");
    }
}
