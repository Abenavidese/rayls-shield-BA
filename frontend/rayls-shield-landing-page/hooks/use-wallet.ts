import { useState, useEffect, useCallback } from 'react';
import { web3Provider } from '@/lib/web3/provider';
import { DEFAULT_NETWORK } from '@/lib/contracts/addresses';

export function useWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string>('');
  const [chainId, setChainId] = useState<number | null>(null);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // Check if wallet is already connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const account = await web3Provider.getConnectedAccount();
        if (account) {
          setAddress(account);
          setIsConnected(true);
          
          const currentChainId = await web3Provider.getCurrentChainId();
          setChainId(currentChainId);
          setIsCorrectNetwork(currentChainId === DEFAULT_NETWORK.chainId);
        }
      } catch (err) {
        console.error('Error checking wallet connection:', err);
      }
    };

    checkConnection();

    // Setup event listeners for account and chain changes
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
          setError('');
        } else {
          setAddress('');
          setIsConnected(false);
        }
      };

      const handleChainChanged = (chainIdHex: string) => {
        const newChainId = parseInt(chainIdHex, 16);
        setChainId(newChainId);
        setIsCorrectNetwork(newChainId === DEFAULT_NETWORK.chainId);
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, []);

  const connect = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const account = await web3Provider.connectWallet();
      setAddress(account);
      setIsConnected(true);

      const currentChainId = await web3Provider.getCurrentChainId();
      setChainId(currentChainId);
      setIsCorrectNetwork(currentChainId === DEFAULT_NETWORK.chainId);

      return account;
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to connect wallet';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const switchNetwork = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      await web3Provider.switchToRaylsNetwork();
      const currentChainId = await web3Provider.getCurrentChainId();
      setChainId(currentChainId);
      setIsCorrectNetwork(currentChainId === DEFAULT_NETWORK.chainId);
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to switch network';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    setAddress('');
    setChainId(null);
    setIsCorrectNetwork(false);
  }, []);

  return {
    isConnected,
    address,
    chainId,
    isCorrectNetwork,
    error,
    isLoading,
    connect,
    switchNetwork,
    disconnect,
  };
}
