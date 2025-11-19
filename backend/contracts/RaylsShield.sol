// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@rayls/contracts/RaylsApp.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

interface IGroth16Verifier {
    function verifyProof(
        uint256[2] calldata _pA,
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[3] calldata _pubSignals
    ) external view returns (bool);
}

/**
 * @title RaylsShield
 * @notice Privacy-preserving cross-chain messaging using Zero-Knowledge proofs on Rayls Protocol
 * @dev Extends RaylsApp to leverage Rayls cross-chain messaging with ZK proof verification
 */
contract RaylsShield is RaylsApp, Ownable, ReentrancyGuard {
    // ZK Verifier contract
    IGroth16Verifier public verifier;

    // Mapping of message hash to verification status
    mapping(bytes32 => bool) public verifiedMessages;

    // Mapping of nullifiers to prevent double-spending
    mapping(bytes32 => bool) public nullifiers;

    // Events
    event PrivateMessageSent(
        bytes32 indexed messageHash,
        uint256 dstChainId,
        address indexed sender,
        bytes32 nullifierHash
    );

    event PrivateMessageReceived(
        bytes32 indexed messageHash,
        uint256 srcChainId,
        bytes32 nullifier
    );

    event VerifierUpdated(address indexed oldVerifier, address indexed newVerifier);

    /**
     * @notice Constructor initializes RaylsApp with endpoint
     * @param _endpoint Address of the Rayls endpoint
     * @param _verifier Address of the ZK proof verifier contract
     */
    constructor(
        address _endpoint,
        address _verifier
    ) RaylsApp(_endpoint) Ownable(msg.sender) {
        verifier = IGroth16Verifier(_verifier);
    }

    /**
     * @notice Send a private cross-chain message with ZK proof
     * @param _dstChainId Destination chain ID
     * @param _destination Destination contract address
     * @param _encryptedPayload Encrypted message payload
     * @param _pA Proof point A [x, y]
     * @param _pB Proof point B [[x1, y1], [x2, y2]]
     * @param _pC Proof point C [x, y]
     * @param _publicSignals Public signals [nullifierHash, commitment, recipientHash]
     */
    function sendPrivateMessage(
        uint256 _dstChainId,
        address _destination,
        bytes calldata _encryptedPayload,
        uint256[2] calldata _pA,
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[3] calldata _publicSignals
    ) external payable nonReentrant {
        // Verify the ZK proof
        require(
            verifier.verifyProof(_pA, _pB, _pC, _publicSignals),
            "RaylsShield: Invalid ZK proof"
        );

        // Extract nullifierHash from public signals
        bytes32 nullifierHash = bytes32(_publicSignals[0]);

        // Create message hash
        bytes32 messageHash = keccak256(
            abi.encodePacked(
                msg.sender,
                _dstChainId,
                _destination,
                _encryptedPayload,
                nullifierHash,
                block.timestamp
            )
        );

        // Mark message as verified
        verifiedMessages[messageHash] = true;

        // Send cross-chain message via Rayls
        // Temporarily commented for testing - uncomment when endpoint is available
        // _raylsSend(_dstChainId, _destination, _encryptedPayload);

        emit PrivateMessageSent(messageHash, _dstChainId, msg.sender, nullifierHash);
    }

    /**
     * @notice Receive and process private cross-chain message
     * @param _encryptedPayload Encrypted message payload
     * @param _nullifier Nullifier to prevent replay attacks
     * @param _pA Proof point A
     * @param _pB Proof point B
     * @param _pC Proof point C
     * @param _publicSignals Public signals for proof verification
     */
    function receivePrivateMessage(
        bytes calldata _encryptedPayload,
        bytes32 _nullifier,
        uint256[2] calldata _pA,
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[3] calldata _publicSignals
    ) external receiveMethod nonReentrant {
        // Check nullifier hasn't been used
        require(!nullifiers[_nullifier], "RaylsShield: Nullifier already used");

        // Verify the ZK proof
        require(
            verifier.verifyProof(_pA, _pB, _pC, _publicSignals),
            "RaylsShield: Invalid ZK proof"
        );

        // Mark nullifier as used
        nullifiers[_nullifier] = true;

        // Get cross-chain message metadata
        uint256 srcChainId = _getFromChainIdOnReceiveMethod();
        bytes32 messageId = _getMessageIdOnReceiveMethod();

        // Process the encrypted payload (implementation specific)
        _processEncryptedPayload(_encryptedPayload);

        emit PrivateMessageReceived(messageId, srcChainId, _nullifier);
    }

    /**
     * @notice Send private message to a resourceId (cross-chain identifier)
     * @param _dstChainId Destination chain ID
     * @param _resourceId Resource identifier on destination chain
     * @param _encryptedPayload Encrypted message payload
     * @param _pA Proof point A
     * @param _pB Proof point B
     * @param _pC Proof point C
     * @param _publicSignals Public signals for proof verification
     */
    function sendPrivateMessageToResource(
        uint256 _dstChainId,
        bytes32 _resourceId,
        bytes calldata _encryptedPayload,
        uint256[2] calldata _pA,
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[3] calldata _publicSignals
    ) external payable nonReentrant {
        // Verify the ZK proof
        require(
            verifier.verifyProof(_pA, _pB, _pC, _publicSignals),
            "RaylsShield: Invalid ZK proof"
        );

        // Extract nullifierHash from public signals
        bytes32 nullifierHash = bytes32(_publicSignals[0]);

        // Create message hash
        bytes32 messageHash = keccak256(
            abi.encodePacked(
                msg.sender,
                _dstChainId,
                _resourceId,
                _encryptedPayload,
                nullifierHash,
                block.timestamp
            )
        );

        // Mark message as verified
        verifiedMessages[messageHash] = true;

        // Send to resourceId via Rayls
        _raylsSendToResourceId(_dstChainId, _resourceId, _encryptedPayload);

        emit PrivateMessageSent(messageHash, _dstChainId, msg.sender, nullifierHash);
    }

    /**
     * @notice Update the ZK verifier contract
     * @param _newVerifier New verifier contract address
     */
    function updateVerifier(address _newVerifier) external onlyOwner {
        require(_newVerifier != address(0), "RaylsShield: Invalid verifier address");

        address oldVerifier = address(verifier);
        verifier = IGroth16Verifier(_newVerifier);

        emit VerifierUpdated(oldVerifier, _newVerifier);
    }

    /**
     * @notice Internal function to process encrypted payload
     * @param _encryptedPayload Encrypted data to process
     * @dev Override this function in derived contracts for custom logic
     */
    function _processEncryptedPayload(bytes calldata _encryptedPayload) internal virtual {
        // Default implementation - can be overridden
        // For example: decrypt, validate, execute business logic
    }

    /**
     * @notice Check if a message has been verified
     * @param _messageHash Hash of the message
     * @return bool True if message is verified
     */
    function isMessageVerified(bytes32 _messageHash) external view returns (bool) {
        return verifiedMessages[_messageHash];
    }

    /**
     * @notice Check if a nullifier has been used
     * @param _nullifier Nullifier to check
     * @return bool True if nullifier has been used
     */
    function isNullifierUsed(bytes32 _nullifier) external view returns (bool) {
        return nullifiers[_nullifier];
    }
}
