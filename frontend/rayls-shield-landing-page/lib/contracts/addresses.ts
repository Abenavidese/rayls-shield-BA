export const CONTRACT_ADDRESSES = {
  RAYLS_TESTNET: {
    chainId: 123123,
    networkName: 'Rayls Testnet',
    rpcUrl: 'https://devnet-rpc.rayls.com',
    explorerUrl: 'https://devnet-explorer.rayls.com',
    contracts: {
      RaylsShield: '0xAC22e6292EbDf4Ee3963FFa35293a22770AD6781',
      Groth16Verifier: '0x8fded712132bC7d9c284c6f1F96Fd5aA61adfC89',
    },
  },
} as const;

export const DEFAULT_NETWORK = CONTRACT_ADDRESSES.RAYLS_TESTNET;
