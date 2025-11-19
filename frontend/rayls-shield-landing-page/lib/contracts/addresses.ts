export const CONTRACT_ADDRESSES = {
  RAYLS_TESTNET: {
    chainId: 123123,
    networkName: 'Rayls Testnet',
    rpcUrl: 'https://devnet-rpc.rayls.com',
    explorerUrl: 'https://devnet-explorer.rayls.com',
    contracts: {
      RaylsShield: '0x648B7FfD8a5Dd9C901B6569E7a0DC9A2eAF4c9F1',
      Groth16Verifier: '0xfD0b399898efC0186E32eb81B630d7Cf7Bb6f217',
    },
  },
} as const;

export const DEFAULT_NETWORK = CONTRACT_ADDRESSES.RAYLS_TESTNET;
