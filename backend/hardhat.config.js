require("@nomicfoundation/hardhat-toolbox");
require("hardhat-circom");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },

  networks: {
    // Rayls Devnet Configuration
    raylsDevnet: {
      url: "https://devnet-rpc.rayls.com",
      chainId: 123123,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: "auto",
    },

    // Local development network
    hardhat: {
      chainId: 31337,
    },

    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },

  // Circom configuration for ZK circuits
  circom: {
    inputBasePath: "./circuits",
    ptau: "ptau/powersOfTau28_hez_final_14.ptau",
    circuits: [
      {
        name: "privacy",
        protocol: "groth16",
        circuit: "privacy.circom",
        input: "input.json",
        wasm: "privacy.wasm",
        zkey: "privacy.zkey",
      },
      {
        name: "compliance",
        protocol: "groth16",
        circuit: "compliance.circom",
        input: "input-compliance.json",
        wasm: "compliance.wasm",
        zkey: "compliance.zkey",
      },
    ],
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    circuits: "./circuits",
  },

  // Etherscan verification (if Rayls provides a block explorer API)
  etherscan: {
    apiKey: {
      raylsDevnet: process.env.RAYLS_EXPLORER_API_KEY || "your-api-key",
    },
    customChains: [
      {
        network: "raylsDevnet",
        chainId: 123123,
        urls: {
          apiURL: "https://devnet-explorer.rayls.com/api",
          browserURL: "https://devnet-explorer.rayls.com",
        },
      },
    ],
  },

  mocha: {
    timeout: 100000,
  },
};
