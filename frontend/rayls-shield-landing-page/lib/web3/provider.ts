import { ethers, BrowserProvider, JsonRpcSigner } from 'ethers';
import { DEFAULT_NETWORK } from '@/lib/contracts/addresses';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export class Web3Provider {
  private provider: BrowserProvider | null = null;
  private signer: JsonRpcSigner | null = null;

  private async initProvider() {
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }
    
    if (!this.provider) {
      this.provider = new BrowserProvider(window.ethereum);
    }
    
    // Re-get signer if needed
    if (!this.signer) {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (accounts.length > 0) {
        this.signer = await this.provider.getSigner();
      }
    }
  }

  async connectWallet(): Promise<string> {
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }

    try {
      this.provider = new BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length === 0) {
        throw new Error('No accounts found');
      }

      this.signer = await this.provider.getSigner();
      return accounts[0];
    } catch (error: any) {
      if (error.code === 4001) {
        throw new Error('User rejected the connection request');
      }
      throw error;
    }
  }

  async getConnectedAccount(): Promise<string | null> {
    if (!window.ethereum) {
      return null;
    }

    try {
      // Initialize provider if needed
      await this.initProvider();
      
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      return accounts.length > 0 ? accounts[0] : null;
    } catch {
      return null;
    }
  }

  async switchToRaylsNetwork(): Promise<void> {
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }

    const chainIdHex = `0x${DEFAULT_NETWORK.chainId.toString(16)}`;

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainIdHex }],
      });
    } catch (switchError: any) {
      // Chain doesn't exist, add it
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: chainIdHex,
                chainName: DEFAULT_NETWORK.networkName,
                nativeCurrency: {
                  name: 'USDgas',
                  symbol: 'USDgas',
                  decimals: 18,
                },
                rpcUrls: [DEFAULT_NETWORK.rpcUrl],
                blockExplorerUrls: [DEFAULT_NETWORK.explorerUrl],
              },
            ],
          });
        } catch (addError) {
          throw new Error('Failed to add Rayls network to MetaMask');
        }
      } else {
        throw switchError;
      }
    }
  }

  async getCurrentChainId(): Promise<number> {
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }

    const chainId = await window.ethereum.request({
      method: 'eth_chainId',
    });
    return parseInt(chainId, 16);
  }

  async getSigner(): Promise<JsonRpcSigner> {
    // Try to initialize if not connected
    if (!this.signer) {
      await this.initProvider();
    }
    
    if (!this.signer) {
      throw new Error('Wallet not connected');
    }
    return this.signer;
  }

  async getProvider(): Promise<BrowserProvider> {
    if (!this.provider) {
      await this.initProvider();
    }
    
    if (!this.provider) {
      throw new Error('Provider not initialized');
    }
    return this.provider;
  }

  isConnected(): boolean {
    return this.provider !== null && this.signer !== null;
  }
}

export const web3Provider = new Web3Provider();
