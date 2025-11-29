export const RAYLS_SHIELD_POOL_ABI = [
  // Deposit function
  {
    type: "function",
    name: "deposit",
    stateMutability: "payable",
    inputs: [{ name: "commitment", type: "bytes32", internalType: "bytes32" }],
    outputs: [],
  },
  // Withdraw function
  {
    type: "function",
    name: "withdraw",
    stateMutability: "nonpayable",
    inputs: [
      { name: "recipient", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "_pA", type: "uint256[2]", internalType: "uint256[2]" },
      { name: "_pB", type: "uint256[2][2]", internalType: "uint256[2][2]" },
      { name: "_pC", type: "uint256[2]", internalType: "uint256[2]" },
      { name: "_publicSignals", type: "uint256[3]", internalType: "uint256[3]" },
    ],
    outputs: [],
  },
  // View functions
  {
    type: "function",
    name: "isCommitmentUsed",
    stateMutability: "view",
    inputs: [{ name: "_commitment", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
  },
  {
    type: "function",
    name: "isNullifierUsed",
    stateMutability: "view",
    inputs: [{ name: "_nullifier", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
  },
  {
    type: "function",
    name: "getDepositInfo",
    stateMutability: "view",
    inputs: [{ name: "_commitment", type: "bytes32", internalType: "bytes32" }],
    outputs: [
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "timestamp", type: "uint256", internalType: "uint256" },
      { name: "depositor", type: "address", internalType: "address" },
      { name: "withdrawn", type: "bool", internalType: "bool" },
    ],
  },
  {
    type: "function",
    name: "getPoolStats",
    stateMutability: "view",
    inputs: [],
    outputs: [
      { name: "totalDep", type: "uint256", internalType: "uint256" },
      { name: "totalWith", type: "uint256", internalType: "uint256" },
      { name: "active", type: "uint256", internalType: "uint256" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "denomination", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    name: "getBalance",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "function",
    name: "getAnonymitySetSize",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "function",
    name: "fixedDenomination",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "function",
    name: "complianceRequired",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
  },
  // Events
  {
    type: "event",
    name: "DepositMade",
    inputs: [
      { name: "commitment", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "timestamp", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "totalDeposits", type: "uint256", indexed: false, internalType: "uint256" },
    ],
  },
  {
    type: "event",
    name: "WithdrawalMade",
    inputs: [
      { name: "nullifier", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "recipient", type: "address", indexed: true, internalType: "address" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "timestamp", type: "uint256", indexed: false, internalType: "uint256" },
    ],
  },
] as const;
