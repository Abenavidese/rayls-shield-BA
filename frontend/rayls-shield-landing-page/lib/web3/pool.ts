import { ethers } from "ethers";
import { RAYLS_SHIELD_POOL_ABI } from "../contracts/RaylsShieldPoolABI";
import {
  generateRandomSecretAndNullifier,
  computeCommitment,
} from "@/lib/zk/proof";

export interface PoolStats {
  totalDeposits: bigint;
  totalWithdrawals: bigint;
  activeDeposits: bigint;
  balance: bigint;
  denomination: bigint;
}

export interface DepositInfo {
  amount: bigint;
  timestamp: bigint;
  depositor: string;
  withdrawn: boolean;
}

export class RaylsShieldPoolContract {
  private contract: ethers.Contract;
  private signer: ethers.Signer;

  constructor(contractAddress: string, signerOrProvider: ethers.Signer | ethers.Provider) {
    this.contract = new ethers.Contract(contractAddress, RAYLS_SHIELD_POOL_ABI, signerOrProvider);

    // Check if it's a signer by checking for signTransaction method
    if ('signTransaction' in signerOrProvider) {
      this.signer = signerOrProvider as ethers.Signer;
    } else {
      throw new Error("Signer required for write operations");
    }
  }

  // Write functions
  async deposit(commitment: string, amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return await this.contract.deposit(commitment, { value: amount });
  }

  async withdraw(
    recipient: string,
    amount: bigint,
    proof: {
      a: [bigint, bigint];
      b: [[bigint, bigint], [bigint, bigint]];
      c: [bigint, bigint];
      publicSignals: [bigint, bigint, bigint];
    }
  ): Promise<ethers.ContractTransactionResponse> {
    return await this.contract.withdraw(
      recipient,
      amount,
      proof.a,
      proof.b,
      proof.c,
      proof.publicSignals
    );
  }

  // Read functions
  async isCommitmentUsed(commitment: string): Promise<boolean> {
    return await this.contract.isCommitmentUsed(commitment);
  }

  async isNullifierUsed(nullifier: string): Promise<boolean> {
    return await this.contract.isNullifierUsed(nullifier);
  }

  async getDepositInfo(commitment: string): Promise<DepositInfo> {
    const [amount, timestamp, depositor, withdrawn] = await this.contract.getDepositInfo(commitment);
    return { amount, timestamp, depositor, withdrawn };
  }

  async getPoolStats(): Promise<PoolStats> {
    const [totalDep, totalWith, active, balance, denomination] = await this.contract.getPoolStats();
    return {
      totalDeposits: totalDep,
      totalWithdrawals: totalWith,
      activeDeposits: active,
      balance,
      denomination,
    };
  }

  async getBalance(): Promise<bigint> {
    return await this.contract.getBalance();
  }

  async getAnonymitySetSize(): Promise<bigint> {
    return await this.contract.getAnonymitySetSize();
  }

  async getFixedDenomination(): Promise<bigint> {
    return await this.contract.fixedDenomination();
  }

  async getComplianceRequired(): Promise<boolean> {
    return await this.contract.complianceRequired();
  }

  // Event listeners
  onDeposit(callback: (commitment: string, amount: bigint, timestamp: bigint, totalDeposits: bigint) => void) {
    this.contract.on("DepositMade", (commitment, amount, timestamp, totalDeposits) => {
      callback(commitment, amount, timestamp, totalDeposits);
    });
  }

  onWithdrawal(callback: (nullifier: string, recipient: string, amount: bigint, timestamp: bigint) => void) {
    this.contract.on("WithdrawalMade", (nullifier, recipient, amount, timestamp) => {
      callback(nullifier, recipient, amount, timestamp);
    });
  }

  removeAllListeners() {
    this.contract.removeAllListeners();
  }
}

/**
 * Generate commitment hash using Poseidon: Poseidon(secret, nullifier, amount, recipient)
 * Recipient is included to lock funds to a specific address
 */
export async function generateCommitment(
  secret: string,
  nullifier: string,
  amount: bigint,
  recipient: string
): Promise<string> {
  return await computeCommitment(secret, nullifier, amount, recipient);
}

/**
 * Generate random cryptographically secure secret and nullifier
 */
export function generateSecretAndNullifier(): { secret: string; nullifier: string } {
  return generateRandomSecretAndNullifier();
}
