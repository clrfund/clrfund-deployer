import * as ethers from "ethers";
import { BigNumber } from "ethers";

const MACIFactoryABI = [
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
        internalType: "contract SnarkVerifier",
        name: "_batchUstVerifier",
        type: "address",
      },
      {
        internalType: "contract SnarkVerifier",
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
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_maci",
        type: "address",
      },
    ],
    name: "MaciDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "MaciParametersChanged",
    type: "event",
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
    inputs: [],
    name: "batchSizes",
    outputs: [
      {
        internalType: "uint8",
        name: "tallyBatchSize",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "messageBatchSize",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "batchUstVerifier",
    outputs: [
      {
        internalType: "contract SnarkVerifier",
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
        internalType: "contract SignUpGatekeeper",
        name: "_signUpGatekeeper",
        type: "address",
      },
      {
        internalType: "contract InitialVoiceCreditProxy",
        name: "_initialVoiceCreditProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coordinator",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct MACISharedObjs.PubKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
    ],
    name: "deployMaci",
    outputs: [
      {
        internalType: "contract MACI",
        name: "_maci",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxValues",
    outputs: [
      {
        internalType: "uint256",
        name: "maxUsers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxMessages",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxVoteOptions",
        type: "uint256",
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
    inputs: [],
    name: "qvtVerifier",
    outputs: [
      {
        internalType: "contract SnarkVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        internalType: "contract SnarkVerifier",
        name: "_batchUstVerifier",
        type: "address",
      },
      {
        internalType: "contract SnarkVerifier",
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
    inputs: [],
    name: "signUpDuration",
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
    inputs: [],
    name: "treeDepths",
    outputs: [
      {
        internalType: "uint8",
        name: "stateTreeDepth",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "messageTreeDepth",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "voteOptionTreeDepth",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingDuration",
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
 * @description ### Returns MACIFactory contract using Ethers.js & UncheckedJsonRpcSigner
 * - Example response ethers.Contract
 *
 * @param {string} contractAddress
 * @param {number} chainId
 * @returns {Object} ethers.Contract
 */
export function getMACIFactoryContract(
  contractAddress: string,
  library: ethers.providers.Web3Provider,
  account: string
) {
  const { data: maciFactoryContract, error } = getContract(contractAddress, MACIFactoryABI, library, account);
  return maciFactoryContract === undefined || error
    ? { contract: null, error }
    : { contract: maciFactoryContract, error: null };
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
