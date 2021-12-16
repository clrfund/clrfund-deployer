/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleRecipientRegistry,
  SimpleRecipientRegistryInterface,
} from "../SimpleRecipientRegistry";

const _abi = [
  {
    inputs: [
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
        indexed: true,
        internalType: "bytes32",
        name: "_recipientId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_metadata",
        type: "string",
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
        name: "_recipientId",
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
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
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
    name: "getRecipientCount",
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
        name: "_recipientId",
        type: "bytes32",
      },
    ],
    name: "removeRecipient",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610ea2380380610ea28339818101604052602081101561003357600080fd5b5051600061003f6100ae565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b03929092169190911790556100b2565b3390565b610de1806100c16000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b146101bd578063af99b63f146101c5578063d7c9ebdd146101cd578063f2fde38b146101ea578063f77c4791146102105761009e565b8063148ec9ab146100a357806362564ed4146100d4578063715018a614610119578063739b53841461012357806388a13072146101a3575b600080fd5b6100c0600480360360208110156100b957600080fd5b5035610218565b604080519115158252519081900360200190f35b6100fd600480360360608110156100ea57600080fd5b5080359060208101359060400135610283565b604080516001600160a01b039092168252519081900360200190f35b6101216103ea565b005b6101216004803603604081101561013957600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561016457600080fd5b82018360208201111561017657600080fd5b8035906020019184600183028401116401000000008311171561019857600080fd5b50909250905061048c565b6101ab610644565b60408051918252519081900360200190f35b6100fd61064a565b6101ab610659565b610121600480360360208110156101e357600080fd5b5035610663565b6101216004803603602081101561020057600080fd5b50356001600160a01b03166106fd565b6100fd6107f5565b600060025482101561025b5760405162461bcd60e51b8152600401808060200182810382526040815260200180610cc56040913960400191505060405180910390fd5b6001546001600160a01b031633146102755750600061027e565b50600281905560015b919050565b6000831580610293575060055484115b156102a0575060006103e3565b6060600560018603815481106102b257fe5b9060005260206000200180548060200260200160405190810160405280929190818152602001828054801561030657602002820191906000526020600020905b8154815260200190600101908083116102f2575b505050505090508051600014156103215760009150506103e3565b80516000905b80156103de57600083600183038151811061033e57fe5b60200260200101519050610350610b53565b50600081815260036020818152604092839020835160808101855281546001600160a01b031681526001820154928101929092526002810154938201849052909101546060820152908710156103a75750506103d5565b6060810151158015906103be575087816060015111155b156103d05783955050505050506103e3565b519250505b60001901610327565b509150505b9392505050565b6103f2610804565b6000546001600160a01b03908116911614610442576040805162461bcd60e51b81526020600482018190526024820152600080516020610d5d833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b610494610804565b6000546001600160a01b039081169116146104e4576040805162461bcd60e51b81526020600482018190526024820152600080516020610d5d833981519152604482015290519081900360640190fd5b6001600160a01b0383166105295760405162461bcd60e51b815260040180806020018281038252602c815260200180610d05602c913960400191505060405180910390fd5b806105655760405162461bcd60e51b8152600401808060200182810382526030815260200180610be56030913960400191505060405180910390fd5b600083838360405160200180846001600160a01b031660601b815260140183838082843780830192505050935050505060405160208183030381529060405280519060200120905060006105b98286610808565b9050817fddc3968b1ce25baf13504e6d2de09bbf72f4b32b9d80e2f4914842f0f9217b0d868686854260405180866001600160a01b03168152602001806020018481526020018381526020018281038252868682818152602001925080828437600083820152604051601f909101601f19169092018290039850909650505050505050a25050505050565b60025481565b6000546001600160a01b031690565b6004546005540390565b61066b610804565b6000546001600160a01b039081169116146106bb576040805162461bcd60e51b81526020600482018190526024820152600080516020610d5d833981519152604482015290519081900360640190fd5b6106c481610a72565b60408051428152905182917fc678e7ee92280740c8b3be4826e92b29fb5477e2ddc3eb2e9ca45f74daa4972e919081900360200190a250565b610705610804565b6000546001600160a01b03908116911614610755576040805162461bcd60e51b81526020600482018190526024820152600080516020610d5d833981519152604482015290519081900360640190fd5b6001600160a01b03811661079a5760405162461bcd60e51b8152600401808060200182810382526026815260200180610c426026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031681565b3390565b6000806002541161084a5760405162461bcd60e51b815260040180806020018281038252602d815260200180610c15602d913960400191505060405180910390fd5b600083815260036020526040902060010154156108985760405162461bcd60e51b815260040180806020018281038252602f815260200180610d7d602f913960400191505060405180910390fd5b6005546002546000916001019081116109395760408051600180825281830190925291925082916060916020808301908036833701905050905085816000815181106108e057fe5b602090810291909101810191909152600580546001810182556000919091528251610932927f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db090920191840190610b84565b5050610a04565b6004546109775760405162461bcd60e51b815260040180806020018281038252602a815260200180610c68602a913960400191505060405180910390fd5b6004805460009190600019810190811061098d57fe5b9060005260206000200154905060048054806109a557fe5b6001900381819060005260206000200160009055905560036000828152602001908152602001600020600101549250600560018403815481106109e457fe5b600091825260208083209091018054600181018255908352912001869055505b50604080516080810182526001600160a01b0380861682526020808301858152428486019081526000606086018181528b82526003948590529690209451855494166001600160a01b0319909416939093178455516001840155905160028301559151910155905092915050565b600081815260036020526040902060010154610abf5760405162461bcd60e51b8152600401808060200182810382526033815260200180610c926033913960400191505060405180910390fd5b6000818152600360208190526040909120015415610b0e5760405162461bcd60e51b815260040180806020018281038252602c815260200180610d31602c913960400191505060405180910390fd5b60008181526003602081905260408220429101556004805460018101825591527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0155565b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b828054828255906000526020600020908101928215610bbf579160200282015b82811115610bbf578251825591602001919060010190610ba4565b50610bcb929150610bcf565b5090565b5b80821115610bcb5760008155600101610bd056fe526563697069656e7452656769737472793a204d6574616461746120696e666f20697320656d70747920737472696e67526563697069656e7452656769737472793a20526563697069656e74206c696d6974206973206e6f74207365744f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373526563697069656e7452656769737472793a20526563697069656e74206c696d69742072656163686564526563697069656e7452656769737472793a20526563697069656e74206973206e6f7420696e20746865207265676973747279526563697069656e7452656769737472793a204d6178206e756d626572206f6620726563697069656e74732063616e206e6f7420626520646563726561736564526563697069656e7452656769737472793a20526563697069656e742061646472657373206973207a65726f526563697069656e7452656769737472793a20526563697069656e7420616c72656164792072656d6f7665644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572526563697069656e7452656769737472793a20526563697069656e7420616c72656164792072656769737465726564a2646970667358221220810314b9b60a2de44263b6fe90b84b8f2f4451bfb09ad73c2aed73567e54c63164736f6c634300060c0033";

export class SimpleRecipientRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleRecipientRegistry> {
    return super.deploy(
      _controller,
      overrides || {}
    ) as Promise<SimpleRecipientRegistry>;
  }
  getDeployTransaction(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_controller, overrides || {});
  }
  attach(address: string): SimpleRecipientRegistry {
    return super.attach(address) as SimpleRecipientRegistry;
  }
  connect(signer: Signer): SimpleRecipientRegistry__factory {
    return super.connect(signer) as SimpleRecipientRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleRecipientRegistryInterface {
    return new utils.Interface(_abi) as SimpleRecipientRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleRecipientRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleRecipientRegistry;
  }
}
