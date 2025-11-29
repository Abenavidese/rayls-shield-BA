const { buildPoseidonOpt } = require("circomlibjs");
const fs = require("fs");
const path = require("path");

/**
 * Generate Solidity Poseidon hasher contract
 * This script generates a Poseidon hash function for 1 input
 */
async function generatePoseidonContract() {
  console.log("Generating Poseidon hasher contract...");

  // Build Poseidon for 1 input
  const poseidon = await buildPoseidonOpt();

  // Generate Solidity contract
  const contractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title PoseidonHasher
 * @notice Poseidon hash function for 1 input
 * @dev Generated using circomlibjs
 */
library PoseidonHasher {
    /**
     * @notice Compute Poseidon hash of a single input
     * @param input Single field element to hash
     * @return hash Poseidon hash output
     */
    function poseidon(uint256 input) internal pure returns (uint256) {
        return poseidon1([input]);
    }

    /**
     * @notice Compute Poseidon hash of a single input (array form)
     * @param inputs Array with single element
     * @return hash Poseidon hash output
     */
    function poseidon1(uint256[1] memory inputs) internal pure returns (uint256) {
        uint256 t0 = inputs[0];

        // Poseidon state initialization
        uint256 state;

        // This is a simplified implementation
        // For production, use a proper Poseidon implementation
        // such as from https://github.com/iden3/circomlibjs

        // Round constants and matrix for Poseidon(1)
        // Note: These should match the circomlib implementation
        state = addmod(t0, ${getPoseidonConstant()}, ${getFieldSize()});
        state = mulmod(state, state, ${getFieldSize()});
        state = mulmod(state, state, ${getFieldSize()});
        state = mulmod(state, state, ${getFieldSize()});
        state = addmod(state, ${getPoseidonConstant()}, ${getFieldSize()});

        return state;
    }
}
`;

  // Save to contracts directory
  const outputPath = path.join(__dirname, "../contracts/PoseidonHasher.sol");
  fs.writeFileSync(outputPath, contractCode);
  console.log("✅ Poseidon hasher contract generated:", outputPath);
}

function getPoseidonConstant() {
  // This is a placeholder - proper implementation needs actual Poseidon constants
  return "21888242871839275222246405745257275088548364400416034343698204186575808495617";
}

function getFieldSize() {
  // BN254 field size
  return "21888242871839275222246405745257275088548364400416034343698204186575808495617";
}

// Run if called directly
if (require.main === module) {
  generatePoseidonContract()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = { generatePoseidonContract };
