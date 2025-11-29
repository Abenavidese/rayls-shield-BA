pragma circom 2.0.0;

include "../node_modules/circomlib/circuits/poseidon.circom";
include "../node_modules/circomlib/circuits/bitify.circom";

/**
 * @title PrivacyCircuit
 * @notice Zero-Knowledge circuit for private cross-chain messaging
 * @dev Proves knowledge of a secret without revealing it
 *
 * Public Inputs:
 * - nullifierHash: Hash of the nullifier (prevents double-spending)
 * - commitment: Commitment to the message
 * - recipientHash: Hash of the recipient address
 *
 * Private Inputs:
 * - secret: Secret value known only to sender
 * - nullifier: Unique value to prevent replay
 * - recipient: Actual recipient address
 * - amount: Amount being transferred (if applicable)
 */

template PrivacyCircuit() {
    // Public inputs
    signal input nullifierHash;
    signal input commitment;
    signal input recipientHash;

    // Private inputs
    signal input secret;
    signal input nullifier;
    signal input recipient;
    signal input amount;

    // Internal signals
    signal commitmentHash;
    signal computedNullifierHash;
    signal computedRecipientHash;

    // Component declarations
    component poseidon1 = Poseidon(4);  // Changed from 3 to 4 inputs
    component poseidon2 = Poseidon(1);
    component poseidon3 = Poseidon(1);

    // Compute commitment: Poseidon(secret, nullifier, amount, recipient)
    // Recipient is now part of the commitment, locking it to a specific address
    poseidon1.inputs[0] <== secret;
    poseidon1.inputs[1] <== nullifier;
    poseidon1.inputs[2] <== amount;
    poseidon1.inputs[3] <== recipient;  // NEW: Recipient included in commitment
    commitmentHash <== poseidon1.out;

    // Verify commitment matches public input
    commitment === commitmentHash;

    // Compute nullifier hash: Poseidon(nullifier)
    poseidon2.inputs[0] <== nullifier;
    computedNullifierHash <== poseidon2.out;

    // Verify nullifier hash matches public input
    nullifierHash === computedNullifierHash;

    // Compute recipient hash: Poseidon(recipient)
    poseidon3.inputs[0] <== recipient;
    computedRecipientHash <== poseidon3.out;

    // Verify recipient hash matches public input
    recipientHash === computedRecipientHash;

    // Constraint: amount must be non-negative (simplified range check)
    component amountBits = Num2Bits(64);
    amountBits.in <== amount;
}

component main {public [nullifierHash, commitment, recipientHash]} = PrivacyCircuit();
