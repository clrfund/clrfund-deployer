/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { KlerosGTCRAdapter } from "../KlerosGTCRAdapter";

export class KlerosGTCRAdapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tcr: string,
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KlerosGTCRAdapter> {
    return super.deploy(
      _tcr,
      _controller,
      overrides || {}
    ) as Promise<KlerosGTCRAdapter>;
  }
  getDeployTransaction(
    _tcr: string,
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tcr, _controller, overrides || {});
  }
  attach(address: string): KlerosGTCRAdapter {
    return super.attach(address) as KlerosGTCRAdapter;
  }
  connect(signer: Signer): KlerosGTCRAdapter__factory {
    return super.connect(signer) as KlerosGTCRAdapter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KlerosGTCRAdapter {
    return new Contract(address, _abi, signerOrProvider) as KlerosGTCRAdapter;
  }
}

const _abi = [
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516110bb3803806110bb8339818101604052604081101561003357600080fd5b508051602090910151600580546001600160a01b039384166001600160a01b031991821617909155600080549390921692169190911790556110418061007a6000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c8063148ec9ab146100725780632d3105be146100a357806362564ed4146100c257806388a1307214610107578063c438aeb514610121578063d7c9ebdd14610129578063f77c479114610146575b600080fd5b61008f6004803603602081101561008857600080fd5b503561014e565b604080519115158252519081900360200190f35b6100c0600480360360208110156100b957600080fd5b50356101b7565b005b6100eb600480360360608110156100d857600080fd5b5080359060208101359060400135610432565b604080516001600160a01b039092168252519081900360200190f35b61010f61059a565b60408051918252519081900360200190f35b6100eb6105a0565b6100c06004803603602081101561013f57600080fd5b50356105af565b6100eb61076d565b60006001548210156101915760405162461bcd60e51b8152600401808060200182810382526040815260200180610f1a6040913960400191505060405180910390fd5b6000546001600160a01b031633146101ab575060006101b2565b5060018181555b919050565b60055460408051634aac84e560e01b81526004810184905290516060926000926001600160a01b0390911691634aac84e5916024808201928692909190829003018186803b15801561020857600080fd5b505afa15801561021c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052606081101561024557600080fd5b8101908080516040519392919084600160201b82111561026457600080fd5b90830190602082018581111561027957600080fd5b8251600160201b81118282018810171561029257600080fd5b82525081516020918201929091019080838360005b838110156102bf5781810151838201526020016102a7565b50505050905090810190601f1680156102ec5780820380516001836020036101000a031916815260200191505b50604052602001519294509192505060018214905061033c5760405162461bcd60e51b8152600401808060200182810382526028815260200180610f866028913960400191505060405180910390fd5b606061034f61034a8461077c565b6107a1565b905060006103708260018151811061036357fe5b6020026020010151610889565b9050600061037e86836108a9565b9050857fbae5f37225091eefc1da5f4cb316de5bfd9444361d10b0f69c55c2c3b25b7ff18683426040518080602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156103ee5781810151838201526020016103d6565b50505050905090810190601f16801561041b5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a2505050505050565b6000831580610442575060045484115b1561044f57506000610593565b60606004600186038154811061046157fe5b906000526020600020018054806020026020016040519081016040528092919081815260200182805480156104b557602002820191906000526020600020905b8154815260200190600101908083116104a1575b505050505090508051600014156104d0576000915050610593565b80516000905b801561058e5760008360018303815181106104ed57fe5b602002602001015190506104ff610de4565b50600081815260026020818152604092839020835160808101855281546001600160a01b0316815260018201549281019290925291820154928101839052600390910154606082015290871015610557575050610585565b60608101511580159061056e575087816060015111155b15610580578395505050505050610593565b519250505b600019016104d6565b509150505b9392505050565b60015481565b6005546001600160a01b031681565b60055460408051634aac84e560e01b81526004810184905290516000926001600160a01b031691634aac84e59160248083019286929190829003018186803b1580156105fa57600080fd5b505afa15801561060e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052606081101561063757600080fd5b8101908080516040519392919084600160201b82111561065657600080fd5b90830190602082018581111561066b57600080fd5b8251600160201b81118282018810171561068457600080fd5b82525081516020918201929091019080838360005b838110156106b1578181015183820152602001610699565b50505050905090810190601f1680156106de5780820380516001836020036101000a031916815260200191505b50604052602001519350508215915061072a90505760405162461bcd60e51b815260040180806020018281038252602f815260200180610fae602f913960400191505060405180910390fd5b61073382610b17565b60408051428152905183917fc678e7ee92280740c8b3be4826e92b29fb5477e2ddc3eb2e9ca45f74daa4972e919081900360200190a25050565b6000546001600160a01b031681565b610784610e15565b506040805180820190915281518152602082810190820152919050565b60606107ac82610bf6565b6107b557600080fd5b60006107c083610c30565b905060608167ffffffffffffffff811180156107db57600080fd5b5060405190808252806020026020018201604052801561081557816020015b610802610e15565b8152602001906001900390816107fa5790505b50905060006108278560200151610c88565b60208601510190506000805b8481101561087e5761084483610ceb565b915060405180604001604052808381526020018481525084828151811061086757fe5b602090810291909101015291810191600101610833565b509195945050505050565b805160009060151461089a57600080fd5b6108a382610d84565b92915050565b600080600154116108eb5760405162461bcd60e51b815260040180806020018281038252602d815260200180610e90602d913960400191505060405180910390fd5b600083815260026020526040902060010154156109395760405162461bcd60e51b815260040180806020018281038252602f815260200180610fdd602f913960400191505060405180910390fd5b60045460018054600092919091019081116109dc57604080516001808252818301909252919250829160609160208083019080368337019050509050858160008151811061098357fe5b6020908102919091018101919091526004805460018101825560009190915282516109d5927f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90920191840190610e2f565b5050610aa7565b600354610a1a5760405162461bcd60e51b815260040180806020018281038252602a815260200180610ebd602a913960400191505060405180910390fd5b60038054600091906000198101908110610a3057fe5b906000526020600020015490506003805480610a4857fe5b600190038181906000526020600020016000905590556002600082815260200190815260200160002060010154925060046001840381548110610a8757fe5b600091825260208083209091018054600181018255908352912001869055505b50604080516080810182526001600160a01b0380861682526020808301858152428486019081526000606086018181528b82526002948590529690209451855494166001600160a01b03199094169390931784555160018401559051908201559051600390910155905092915050565b600081815260026020526040902060010154610b645760405162461bcd60e51b8152600401808060200182810382526033815260200180610ee76033913960400191505060405180910390fd5b60008181526002602052604090206003015415610bb25760405162461bcd60e51b815260040180806020018281038252602c815260200180610f5a602c913960400191505060405180910390fd5b600081815260026020526040812042600391820155805460018101825591527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0155565b8051600090610c07575060006101b2565b6020820151805160001a9060c0821015610c26576000925050506101b2565b5060019392505050565b8051600090610c41575060006101b2565b600080610c518460200151610c88565b602085015185519181019250015b80821015610c7f57610c7082610ceb565b60019093019290910190610c5f565b50909392505050565b8051600090811a6080811015610ca25760009150506101b2565b60b8811080610cbd575060c08110801590610cbd575060f881105b15610ccc5760019150506101b2565b60c0811015610ce05760b5190190506101b2565b60f5190190506101b2565b80516000908190811a6080811015610d065760019150610d7d565b60b8811015610d1b57607e1981019150610d7d565b60c0811015610d485760b78103600185019450806020036101000a85510460018201810193505050610d7d565b60f8811015610d5d5760be1981019150610d7d565b60f78103600185019450806020036101000a855104600182018101935050505b5092915050565b805160009015801590610d9957508151602110155b610da257600080fd5b6000610db18360200151610c88565b83516020808601518301805193945091849003929190831015610ddb57826020036101000a820491505b50949350505050565b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b828054828255906000526020600020908101928215610e6a579160200282015b82811115610e6a578251825591602001919060010190610e4f565b50610e76929150610e7a565b5090565b5b80821115610e765760008155600101610e7b56fe526563697069656e7452656769737472793a20526563697069656e74206c696d6974206973206e6f7420736574526563697069656e7452656769737472793a20526563697069656e74206c696d69742072656163686564526563697069656e7452656769737472793a20526563697069656e74206973206e6f7420696e20746865207265676973747279526563697069656e7452656769737472793a204d6178206e756d626572206f6620726563697069656e74732063616e206e6f7420626520646563726561736564526563697069656e7452656769737472793a20526563697069656e7420616c72656164792072656d6f766564526563697069656e7452656769737472793a204974656d206e6f7420666f756e6420696e20544352526563697069656e7452656769737472793a204974656d206973206e6f742072656d6f7665642066726f6d20544352526563697069656e7452656769737472793a20526563697069656e7420616c72656164792072656769737465726564a26469706673582212206ef501a0e0684b8ce5f3838ec0fca5679c67717ddade7a7b486dc008fde56d7d64736f6c634300060c0033";