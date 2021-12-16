/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  IncrementalQuinTree,
  IncrementalQuinTreeInterface,
} from "../IncrementalQuinTree";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_treeLevels",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_zeroValue",
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
        indexed: true,
        internalType: "uint256",
        name: "leaf",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
    ],
    name: "LeafInsertion",
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
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "hash11",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "array",
        type: "uint256[5]",
      },
    ],
    name: "hash5",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_leaf",
        type: "uint256",
      },
    ],
    name: "insertLeaf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rootHistory",
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
  "0x608060405260006001553480156200001657600080fd5b5060405162000fac38038062000fac833981810160405260408110156200003c57600080fd5b5080516020909101516000620000516200018e565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060008260ff16118015620000b35750602060ff831611155b620000f05760405162461bcd60e51b815260040180806020018281038252603981526020018062000f736039913960400191505060405180910390fd5b6000805460ff60a01b1916600160a01b60ff85160217905580620001136200023d565b60005b8460ff168160ff161015620001805760005b600560ff82161015620001545783838260ff16600581106200014657fe5b602002015260010162000128565b5060ff81166000908152600360205260409020839055620001758262000192565b925060010162000116565b5050600255506200025b9050565b3390565b604051630926f44b60e31b815260009073__$12b92d1cbc3f374ffe86947c65032e94dd$__90634937a258908490600401808260a08083838a5b83811015620001e6578181015183820152602001620001cc565b5050505090500191505060206040518083038186803b1580156200020957600080fd5b505af41580156200021e573d6000803e3d6000fd5b505050506040513d60208110156200023557600080fd5b505192915050565b6040518060a001604052806005906020820280368337509192915050565b610d08806200026b6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80639cfced97116100665780639cfced971461019e578063b7202434146101f0578063ebf0c7171461020d578063f1c621ee14610215578063f2fde38b1461024657610093565b80635bb9399514610098578063715018a6146100cd5780638a1a52d2146100d75780638da5cb5b1461017a575b600080fd5b6100bb600480360360408110156100ae57600080fd5b508035906020013561026c565b60408051918252519081900360200190f35b6100d561032a565b005b6100bb600480360360208110156100ed57600080fd5b81019060208101813564010000000081111561010857600080fd5b82018360208201111561011a57600080fd5b8035906020019184602083028401116401000000008311171561013c57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506103de945050505050565b6101826107b4565b604080516001600160a01b039092168252519081900360200190f35b6100bb600480360360a08110156101b457600080fd5b810190808060a0019060058060200260405190810160405280929190826005602002808284376000920191909152509194506107c39350505050565b6100bb6004803603602081101561020657600080fd5b5035610869565b6100bb610ae1565b6102326004803603602081101561022b57600080fd5b5035610ae7565b604080519115158252519081900360200190f35b6100d56004803603602081101561025c57600080fd5b50356001600160a01b0316610afc565b6000610276610c0a565b83815260208101839052604080516314d2f97b60e11b815273__$1ca93bdf972a371ade5aef0d3bede02ce8$__916329a5f2f69184916004909101908190839080838360005b838110156102d45781810151838201526020016102bc565b5050505090500191505060206040518083038186803b1580156102f657600080fd5b505af415801561030a573d6000803e3d6000fd5b505050506040513d602081101561032057600080fd5b5051949350505050565b610332610c06565b6000546001600160a01b03908116911614610394576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60408051600b808252610180820190925260009160609190602082016101608036833701905050905061040f610c28565b610417610c28565b60005b85518110156104565785818151811061042f57fe5b602002602001015184828151811061044357fe5b602090810291909101015260010161041a565b5084515b600b81101561048457600084828151811061047157fe5b602090810291909101015260010161045a565b5060005b60058110156104e85783818151811061049d57fe5b60200260200101518382600581106104b157fe5b602002015283518490600583019081106104c757fe5b60200260200101518282600581106104db57fe5b6020020152600101610488565b506104f1610c0a565b604051630926f44b60e31b815273__$12b92d1cbc3f374ffe86947c65032e94dd$__90634937a258908590600401808260a080838360005b83811015610541578181015183820152602001610529565b5050505090500191505060206040518083038186803b15801561056357600080fd5b505af4158015610577573d6000803e3d6000fd5b505050506040513d602081101561058d57600080fd5b50518152604051630926f44b60e31b815273__$12b92d1cbc3f374ffe86947c65032e94dd$__90634937a258908490600401808260a080838360005b838110156105e15781810151838201526020016105c9565b5050505090500191505060206040518083038186803b15801561060357600080fd5b505af4158015610617573d6000803e3d6000fd5b505050506040513d602081101561062d57600080fd5b5051602082015261063c610c0a565b73__$1ca93bdf972a371ade5aef0d3bede02ce8$__6329a5f2f6836040518263ffffffff1660e01b81526004018082600260200280838360005b8381101561068e578181015183820152602001610676565b5050505090500191505060206040518083038186803b1580156106b057600080fd5b505af41580156106c4573d6000803e3d6000fd5b505050506040513d60208110156106da57600080fd5b5051815284518590600a9081106106ed57fe5b60200260200101518160016002811061070257fe5b6020020152604080516314d2f97b60e11b815273__$1ca93bdf972a371ade5aef0d3bede02ce8$__916329a5f2f69184916004909101908190839080838360005b8381101561075b578181015183820152602001610743565b5050505090500191505060206040518083038186803b15801561077d57600080fd5b505af4158015610791573d6000803e3d6000fd5b505050506040513d60208110156107a757600080fd5b5051979650505050505050565b6000546001600160a01b031690565b604051630926f44b60e31b815260009073__$12b92d1cbc3f374ffe86947c65032e94dd$__90634937a258908490600401808260a08083838a5b838110156108155781810151838201526020016107fd565b5050505090500191505060206040518083038186803b15801561083757600080fd5b505af415801561084b573d6000803e3d6000fd5b505050506040513d602081101561086157600080fd5b505192915050565b6000610873610c06565b6000546001600160a01b039081169116146108d5576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182106109335760405162461bcd60e51b8152600401808060200182810382526045815260200180610c6d6045913960600191505060405180910390fd5b600054600154600160a01b90910460ff1660050a116109835760405162461bcd60e51b8152600401808060200182810382526021815260200180610cb26021913960400191505060405180910390fd5b6001548261098f610c28565b6005830660005b60005460ff600160a01b90910481169082161015610a8057816109f65760015b600560ff821610156109f45760ff808316600090815260036020908152604080832054600483528184209486168452939091529020556001016109b6565b505b60ff8116600090815260046020908152604080832085845290915281208590555b600560ff82161015610a605760ff80831660009081526004602090815260408083209385168084529390915290205490859060058110610a5357fe5b6020020152600101610a17565b50610a6a836107c3565b9350600585049450600585069150600101610996565b506002839055600083815260056020526040808220805460ff19166001908117909155805480820190915590519091829189917fe6f49fa84abd31919f446b22a52bb3ceae774b4b87f062f022fec45c46f4f45891a3509295945050505050565b60025481565b60056020526000908152604090205460ff1681565b610b04610c06565b6000546001600160a01b03908116911614610b66576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610bab5760405162461bcd60e51b8152600401808060200182810382526026815260200180610c476026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b60405180604001604052806002906020820280368337509192915050565b6040518060a00160405280600590602082028036833750919291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e6372656d656e74616c5175696e547265653a20696e736572744c65616620617267756d656e74206d757374206265203c20534e41524b5f5343414c41525f4649454c44496e6372656d656e74616c5175696e547265653a20747265652069732066756c6ca2646970667358221220d801dce0acf8a4b6bef9c6100719ede6eca2c6b27694bc214024ef6eaf9ad24464736f6c634300060c0033496e6372656d656e74616c5175696e547265653a205f747265654c6576656c73206d757374206265206265747765656e203020616e64203333";

export class IncrementalQuinTree__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: IncrementalQuinTreeLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      IncrementalQuinTree__factory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: IncrementalQuinTreeLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$12b92d1cbc3f374ffe86947c65032e94dd\\$__", "g"),
      linkLibraryAddresses["maci-contracts/sol/Poseidon.sol:PoseidonT6"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1ca93bdf972a371ade5aef0d3bede02ce8\\$__", "g"),
      linkLibraryAddresses["maci-contracts/sol/Poseidon.sol:PoseidonT3"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _treeLevels: BigNumberish,
    _zeroValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IncrementalQuinTree> {
    return super.deploy(
      _treeLevels,
      _zeroValue,
      overrides || {}
    ) as Promise<IncrementalQuinTree>;
  }
  getDeployTransaction(
    _treeLevels: BigNumberish,
    _zeroValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_treeLevels, _zeroValue, overrides || {});
  }
  attach(address: string): IncrementalQuinTree {
    return super.attach(address) as IncrementalQuinTree;
  }
  connect(signer: Signer): IncrementalQuinTree__factory {
    return super.connect(signer) as IncrementalQuinTree__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncrementalQuinTreeInterface {
    return new utils.Interface(_abi) as IncrementalQuinTreeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IncrementalQuinTree {
    return new Contract(address, _abi, signerOrProvider) as IncrementalQuinTree;
  }
}

export interface IncrementalQuinTreeLibraryAddresses {
  ["maci-contracts/sol/Poseidon.sol:PoseidonT6"]: string;
  ["maci-contracts/sol/Poseidon.sol:PoseidonT3"]: string;
}
