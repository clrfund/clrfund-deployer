import * as ethers from "ethers";
import { BigNumber } from "ethers";

const KlerosGTCRAdapterABI = [
  {
    inputs: [
      {
        internalType: "contract IKlerosGTCR",
        name: "_tcr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_controller",
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
        internalType: "bytes32",
        name: "_tcrItemId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_metadata",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "RecipientAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_tcrItemId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "RecipientRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_tcrItemId",
        type: "bytes32",
      },
    ],
    name: "addRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "controller",
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
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    name: "getRecipientAddress",
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
    inputs: [],
    name: "maxRecipients",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_tcrItemId",
        type: "bytes32",
      },
    ],
    name: "removeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxRecipients",
        type: "uint256",
      },
    ],
    name: "setMaxRecipients",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tcr",
    outputs: [
      {
        internalType: "contract IKlerosGTCR",
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
 * @description ### Returns KlerosGTCRAdapter contract using Ethers.js & UncheckedJsonRpcSigner
 * - Example response ethers.Contract
 *
 * @param {string} contractAddress
 * @param {number} chainId
 * @returns {Object} ethers.Contract
 */
export function getKlerosGTCRAdapterContract(
  contractAddress: string,
  library: ethers.providers.Web3Provider,
  account: string
) {
  const { data: klerosGTCRAdapterContract, error } = getContract(
    contractAddress,
    KlerosGTCRAdapterABI,
    library,
    account
  );
  return klerosGTCRAdapterContract === undefined || error
    ? { contract: null, error }
    : { contract: klerosGTCRAdapterContract, error: null };
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
