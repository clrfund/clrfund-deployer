import * as ethers from "ethers";
import { BigNumber } from "ethers";

const FundingFactoryABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_source",
        type: "address",
      },
    ],
    name: "addFundingSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelCurrentRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "coordinatorQuit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployNewRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_source",
        type: "address",
      },
    ],
    name: "removeFundingSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_coordinator",
        type: "address",
      },
      {
        internalType: "string",
        name: "_coordinatorPubKey",
        type: "string",
      },
    ],
    name: "setCoordinator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_stateTreeDepth",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_messageTreeDepth",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_voteOptionTreeDepth",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_tallyBatchSize",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_messageBatchSize",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_batchUstVerifier",
        type: "address",
      },
      {
        internalType: "address",
        name: "_qvtVerifier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_signUpDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_votingDuration",
        type: "uint256",
      },
    ],
    name: "setMaciParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipientRegistry",
        type: "address",
      },
    ],
    name: "setRecipientRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userRegistry",
        type: "address",
      },
    ],
    name: "setUserRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalSpent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalSpentSalt",
        type: "uint256",
      },
    ],
    name: "transferMatchingFunds",
    outputs: [],
    stateMutability: "nonpayable",
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
 * @description ### Returns FundingFactory contract using Ethers.js & UncheckedJsonRpcSigner
 * - Example response ethers.Contract
 *
 * @param {string} contractAddress
 * @param {number} chainId
 * @returns {Object} ethers.Contract
 */
export function getFundingFactoryContract(
  contractAddress: string,
  library: ethers.providers.Web3Provider,
  account: string
) {
  const { data: fundingFactoryContract, error } = getContract(contractAddress, FundingFactoryABI, library, account);
  return fundingFactoryContract === undefined || error
    ? { contract: null, error }
    : { contract: fundingFactoryContract, error: null };
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
