export const CONTRACT_ADDRESSES = {
  LOCALHOST: {
    chainId: 31337,
    networkName: 'Localhost',
    rpcUrl: 'http://127.0.0.1:8545',
    explorerUrl: '',
    contracts: {
      RaylsShieldPool: '', // Will be filled after deployment
      PrivacyVerifier: '',
      ComplianceVerifier: '',
    },
  },
  RAYLS_DEVNET: {
    chainId: 123123,
    networkName: 'Rayls Devnet',
    rpcUrl: 'https://devnet-rpc.rayls.com',
    explorerUrl: 'https://devnet-explorer.rayls.com',
    contracts: {
      RaylsShieldPool: '0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be',
      PrivacyVerifier: '0xc853De1e8a8a3Ead0e2A4A39084B792e1e58Dd53',
      ComplianceVerifier: '0xF1925bE98A8Cb667CD65b5FadD171011E2832bca',
    },
  },
};

export const DEFAULT_NETWORK = CONTRACT_ADDRESSES.RAYLS_DEVNET;

// Helper to get network by chainId
export function getNetworkByChainId(chainId: number) {
  if (chainId === 31337) return CONTRACT_ADDRESSES.LOCALHOST;
  if (chainId === 123123) return CONTRACT_ADDRESSES.RAYLS_DEVNET;
  return null;
}

// Helper to update contract addresses (use this after deployment)
export function updateContractAddresses(
  network: 'LOCALHOST' | 'RAYLS_DEVNET',
  addresses: {
    RaylsShieldPool: string;
    PrivacyVerifier: string;
    ComplianceVerifier: string;
  }
) {
  // Update contracts by creating a new object
  Object.assign(CONTRACT_ADDRESSES[network].contracts, addresses);
}
