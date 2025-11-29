import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { RaylsShieldPoolContract, PoolStats, generateSecretAndNullifier, generateCommitment } from "@/lib/web3/pool";
import { CONTRACT_ADDRESSES, getNetworkByChainId } from "@/lib/contracts/addresses";

export function useRaylsShieldPool() {
  const [poolContract, setPoolContract] = useState<RaylsShieldPoolContract | null>(null);
  const [poolStats, setPoolStats] = useState<PoolStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);

  // Connect wallet
  const connectWallet = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (!window.ethereum) {
        throw new Error("MetaMask is not installed");
      }

      const browserProvider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await browserProvider.send("eth_requestAccounts", []);
      const network = await browserProvider.getNetwork();
      const signerInstance = await browserProvider.getSigner();

      setProvider(browserProvider);
      setSigner(signerInstance);
      setAccount(accounts[0]);
      setChainId(Number(network.chainId));

      // Initialize contract
      const networkConfig = getNetworkByChainId(Number(network.chainId));
      if (!networkConfig) {
        throw new Error(`Unsupported network. Please switch to Localhost (31337) or Rayls Devnet (123123)`);
      }

      const poolAddress = networkConfig.contracts.RaylsShieldPool;
      if (!poolAddress) {
        throw new Error("Pool contract not deployed on this network yet");
      }

      const contract = new RaylsShieldPoolContract(poolAddress, signerInstance);
      setPoolContract(contract);

      // Load initial stats
      const stats = await contract.getPoolStats();
      setPoolStats(stats);

    } catch (err: any) {
      setError(err.message);
      console.error("Connect wallet error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Disconnect wallet
  const disconnectWallet = useCallback(() => {
    setProvider(null);
    setSigner(null);
    setAccount(null);
    setChainId(null);
    setPoolContract(null);
    setPoolStats(null);
  }, []);

  // Refresh pool stats
  const refreshPoolStats = useCallback(async () => {
    if (!poolContract) return;
    try {
      const stats = await poolContract.getPoolStats();
      setPoolStats(stats);
    } catch (err: any) {
      console.error("Error refreshing stats:", err);
    }
  }, [poolContract]);

  // Deposit
  const deposit = useCallback(async (
    amount: bigint,
    recipient: string
  ): Promise<{ commitment: string; secret: string; nullifier: string }> => {
    if (!poolContract) throw new Error("Pool contract not initialized");

    try {
      setLoading(true);
      setError(null);

      // Generate secret and nullifier
      const { secret, nullifier } = generateSecretAndNullifier();

      // Generate commitment using Poseidon hash (includes recipient to lock funds)
      const commitment = await generateCommitment(secret, nullifier, amount, recipient);

      // Make deposit
      const tx = await poolContract.deposit(commitment, amount);
      await tx.wait();

      // Refresh stats
      await refreshPoolStats();

      return { commitment, secret, nullifier };
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [poolContract, refreshPoolStats]);

  // Withdraw (requires ZK proof - simplified for now)
  const withdraw = useCallback(async (
    recipient: string,
    amount: bigint,
    proof: any
  ): Promise<ethers.ContractTransactionResponse> => {
    if (!poolContract) throw new Error("Pool contract not initialized");

    try {
      setLoading(true);
      setError(null);

      const tx = await poolContract.withdraw(recipient, amount, proof);
      await tx.wait();

      // Refresh stats
      await refreshPoolStats();

      return tx;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [poolContract, refreshPoolStats]);

  // Listen to account changes
  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = async (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnectWallet();
      } else {
        // Account changed - reinitialize signer and contract
        if (provider) {
          try {
            const newSigner = await provider.getSigner();
            setSigner(newSigner);
            setAccount(accounts[0]);

            // Reinitialize contract with new signer
            if (chainId) {
              const networkConfig = getNetworkByChainId(chainId);
              if (networkConfig?.contracts.RaylsShieldPool) {
                const contract = new RaylsShieldPoolContract(
                  networkConfig.contracts.RaylsShieldPool,
                  newSigner
                );
                setPoolContract(contract);
              }
            }
          } catch (err) {
            console.error("Error updating signer:", err);
          }
        }
      }
    };

    const handleChainChanged = () => {
      window.location.reload();
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum.removeListener("chainChanged", handleChainChanged);
    };
  }, [disconnectWallet, provider, chainId]);

  return {
    // State
    poolContract,
    poolStats,
    loading,
    error,
    account,
    chainId,
    provider,
    signer,

    // Actions
    connectWallet,
    disconnectWallet,
    deposit,
    withdraw,
    refreshPoolStats,
  };
}
