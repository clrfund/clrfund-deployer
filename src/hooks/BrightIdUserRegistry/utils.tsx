import * as ethers from "ethers";
import { BigNumber } from "ethers";

const BrightIdUserRegistryABI = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_context",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "context",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "verifier",
        type: "address",
      },
    ],
    name: "SetBrightIdSettings",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "Sponsor",
    type: "event",
  },
  {
    inputs: [],
    name: "context",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isVerifiedUser",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_context",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "_addrs",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_context",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
    ],
    name: "setSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "sponsor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "verifications",
    outputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isVerified",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

interface Web3Error extends Error {
  data?: any;
  code?: any;
  argument?: any;
  reason?: string;
}
/**
 * @description ### Returns Go / Lua like responses for awaiting promises (data, err)
 * when used with await
 *
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 * @param {Promise} promise
 * @returns {Promise} [ data, undefined ]
 * @returns {Promise} [ undefined, Error ]
 */
export const handle = (promise: Promise<any>) => {
  return promise
    .then((data) => {
      return { data, error: null };
    })
    .catch((error: Web3Error) => Promise.resolve({ data: null, error }));
};

/**
 * @description ### Returns Ethers contract instance using UncheckedJsonRpcSigner (ethers.Contract, err)
 *
 * - Example response [ ethers.Contract, undefined ]
 * - Example response [ undefined, Error ]
 *
 * @param {string} contractAddress
 * @param {Array} ABI
 * @returns {Array} [ ethers.Contract, undefined ]
 * @returns {Array} [ undefined, Error ]
 */
export function getContract(
  contractAddress: string,
  ABI: ethers.ContractInterface,
  library: ethers.providers.Web3Provider,
  account: string
) {
  try {
    return {
      data: new ethers.Contract(contractAddress, ABI, library.getUncheckedSigner(account)),
      error: null,
    };
  } catch (error) {
    return { data: null, error };
  }
}
/**
 * @description ### Returns BrightIdUserRegistry contract using Ethers.js & UncheckedJsonRpcSigner
 * - Example response ethers.Contract
 *
 * @param {string} contractAddress
 * @param {number} chainId
 * @returns {Object} ethers.Contract
 */
export function getBrightIdUserRegistryContract(
  contractAddress: string,
  library: ethers.providers.Web3Provider,
  account: string
) {
  const { data: brightIdUserRegistryContract, error } = getContract(
    contractAddress,
    BrightIdUserRegistryABI,
    library,
    account
  );
  return brightIdUserRegistryContract === undefined || error
    ? { contract: null, error }
    : { contract: brightIdUserRegistryContract, error: null };
}

//CC RadHaus 2020

export interface Log {
  blockNumber: number;
  blockHash: string;
  transactionIndex: number;
  removed: boolean;
  address: string;
  data: string;
  topics: Array<string>;
  transactionHash: string;
  logIndex: number;
}
export interface TransactionReceipt {
  to: string;
  from: string;
  contractAddress: string;
  transactionIndex: number;
  root?: string;
  gasUsed: BigNumber;
  logsBloom: string;
  blockHash: string;
  transactionHash: string;
  logs: Array<Log>;
  blockNumber: number;
  confirmations: number;
  cumulativeGasUsed: BigNumber;
  byzantium: boolean;
  status?: number;
}
export interface TransactionReceiptOrError {
  (hash: string): Promise<
    | {
        receipt: null;
        error: Error;
      }
    | {
        receipt: TransactionReceipt;
        error: null;
      }
  >;
}
