/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BatchUpdateStateTreeVerifier } from "../BatchUpdateStateTreeVerifier";

export class BatchUpdateStateTreeVerifier__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BatchUpdateStateTreeVerifier> {
    return super.deploy(
      overrides || {}
    ) as Promise<BatchUpdateStateTreeVerifier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BatchUpdateStateTreeVerifier {
    return super.attach(address) as BatchUpdateStateTreeVerifier;
  }
  connect(signer: Signer): BatchUpdateStateTreeVerifier__factory {
    return super.connect(signer) as BatchUpdateStateTreeVerifier__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchUpdateStateTreeVerifier {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BatchUpdateStateTreeVerifier;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[]",
        name: "input",
        type: "uint256[]",
      },
    ],
    name: "verifyProof",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506114bc806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c32e370e14610030575b600080fd5b610182600480360361012081101561004757600080fd5b6040805180820182529183019291818301918390600290839083908082843760009201829052506040805180820190915293969594608081019493509150600290835b828210156100c8576040805180820182529080840286019060029083908390808284376000920191909152505050815260019091019060200161008a565b5050604080518082018252939695948181019493509150600290839083908082843760009201919091525091949392602081019250359050600160201b81111561011157600080fd5b82018360208201111561012357600080fd5b803590602001918460208302840111600160201b8311171561014457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610196945050505050565b604080519115158252519081900360200190f35b60006101a06112b3565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015191810191909152908201526102186112e5565b610220610685565b905061022a61132c565b5060408051808201909152600080825260208201528251516000805160206114678339815191521161029d576040805162461bcd60e51b815260206004820152601760248201527676657269666965722d61582d6774652d7072696d652d7160481b604482015290519081900360640190fd5b825160200151600080516020611467833981519152116102fe576040805162461bcd60e51b815260206004820152601760248201527676657269666965722d61592d6774652d7072696d652d7160481b604482015290519081900360640190fd5b6020830151515160008051602061146783398151915211610361576040805162461bcd60e51b815260206004820152601860248201527776657269666965722d6258302d6774652d7072696d652d7160401b604482015290519081900360640190fd5b602083810151015151600080516020611467833981519152116103c6576040805162461bcd60e51b815260206004820152601860248201527776657269666965722d6259302d6774652d7072696d652d7160401b604482015290519081900360640190fd5b6020838101515101516000805160206114678339815191521161042b576040805162461bcd60e51b815260206004820152601860248201527776657269666965722d6258312d6774652d7072696d652d7160401b604482015290519081900360640190fd5b602083810151810151015160008051602061146783398151915211610492576040805162461bcd60e51b815260206004820152601860248201527776657269666965722d6259312d6774652d7072696d652d7160401b604482015290519081900360640190fd5b604083015151600080516020611467833981519152116104f3576040805162461bcd60e51b815260206004820152601760248201527676657269666965722d63582d6774652d7072696d652d7160481b604482015290519081900360640190fd5b60008051602061146783398151915283604001516020015110610557576040805162461bcd60e51b815260206004820152601760248201527676657269666965722d63592d6774652d7072696d652d7160481b604482015290519081900360640190fd5b60005b6010811015610631577f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000186828151811061059057fe5b6020026020010151106105ea576040805162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604482015290519081900360640190fd5b610627826106228560800151846001016011811061060457fe5b602002015189858151811061061557fe5b6020026020010151610eac565b610f41565b915060010161055a565b50608082015151610643908290610f41565b90506106796106558460000151610fd2565b84602001518460000151856020015185876040015189604001518960600151611055565b98975050505050505050565b61068d6112e5565b6040805180820182527f11bcee9f70e4e2df66176f0e67e65b69bd5a16a016ce5867c763696ed1702ede81527f2c60634753c5104d3ace8aebef72da6c6ae0a474127fffe0c210c449ed1601216020808301919091529083528151608080820184527f136760b39727f92631a825ebe98dcee6de5700b5fa69599f8879befa531852948285019081527f04a3e4f147792a6de953a6495a1cb7b85d167c2d5157a5c1d410262440de83cb606080850191909152908352845180860186527f027fbdae3190eae58462b8936e2ff4dbbeec11a34cea962f15130de4e66a0e2881527f036fd0602b49a0472f9a49f850b95522c0829238202b817a68de88a0206592f5818601528385015285840192909252835180820185527f302f603839c1b50d9a9d6adb4188364fd450796f1b6c106937a3e4f4d211304c8186019081527f19cc6d66bbf5b56cf36a925d39e48ca0d9e7e2f7a2a1562e15f26423078d9da1828501528152845180860186527f22fe8f41b58780f5bff60222def30636abf28bfd3523bccc4e4b12a60fd15ac581527f2568f663c134ae137dcf2bd04a073ff796bc5aabb6bfc7b7072ab450814b62d0818601528185015285850152835180820185527f24cd69188db181359e90e338e47027ac20f9e123e679fc76ad9b07642408b2068186019081527f0f1382cedc2f7be91c3c5fdffb23a237ffdc818e8a7f28571e660d6ebd80c597828501528152845180860186527f2ce8a23782d087bfab416071e9e66970fc6a056e298cd375dc716915dff07c7881527f1413a0856de1aba347c382d7207cfa0bd2f87f0f2516d53dee283c054e2857fa818601528185015282860152835180850185527f0e9cbf0d8b1f9156e9b58027eed6c3d6570e55c723002796ace1b4e0c550a12881527f230fea08694f5ad3b913137f2124f406c3e0eab20b0e7cf646e4936a4498b8f281850152818601805191909152845180860186527f08a1338bee3f98350a703eb7c2dcb9a4874309c6a870a34d2bc64d3ed846ca4d81527f09cb03ade184f0e541344c2f605dd4e2b3a1bb3c4cdfe670ab4e027af35ed963818601528151850152845180860186527f074fc7ce1a44e8ef87b9451fdfdcf8640c4ff6de94c2b66ad4f500c91f0e739881527f1202088897178d4c136bbef8b0ed47008c49510828d1f83d785eb9c438be2724818601528151860152845180860186527f2aa930b2fc79e5ab8b4a0ed9e8dc904316287956b84b075b1c5a962dae16ab9181527f1cb0dacbdb655ac4bd87c49eea098b94528d87adb6212cde508815290ce123c181860152815190930192909252835180850185527f05157fb40eb6fc94a16a9653b757381bb607d8de0ed681cbe02028f2588c725681527f195321008bd9951fa408e78edb6196022206feb376aedec44ffd8a460e0063b881850152825190910152825180840184527f2edaa91a1302ffedbaae9d31f84631ce3769efde1e219baf1d89848fb3fd9f4581527f0faebe894c7c57bb546c2759983076b4ad874b9ed9fd7debd9556a38b1c6b94281840152815160a00152825180840184527f10302b3eb2c3b7c46b65868031f6c1362e88c8c6dda0c7f2e14505b860efe80a81527f26ee22a34e01d07f94e7d36ebf1aff75cf5483eb08f990f11dcec3aa57ab7f8981840152815160c00152825180840184527f12f00c9e95fb8c1673019d45df4edf5a9b01ee6312ef26fd12ca76e83137437781527f2aba6b3bd77dfb2bfa9c4130facd13d26215e73c7d0ef34baa8abd3ce1a9d5a681840152815160e00152825180840184527f0f7f5be438361f5ff5db0163a98a0048294174d674a14597d05d8e1b1db5b38481527f1c0e3dedc07d2ea8ff92824797ba3cd40e74c1dc50e048295482da1a5b0fd3698184015281516101000152825180840184527f080973c73cf9409763df44c422c377a8f3f3e108a187728c3435c3aa8af1282f81527f1e339c11145ee2a59047678b96c1e53ac1faac95bc39c2938c209ee30b0bdc178184015281516101200152825180840184527f093673e1bf624806f289bad7248d425f4e546b8a9bef7d308e0f08dd538f028881527f0f3ac4f120dd3b2dd3657299383afb6b74a2fa1704632d4da4e61a31e96c5a508184015281516101400152825180840184527f12a248018861214a8db41a3bf85b0458e38176aa80198d7f975600f245cf1f7081527f12e995f9761b12dadf550078f5b54f82b39dfb84436a78e24e9a3ec8f80f67a98184015281516101600152825180840184527f1e1a606d441de8aa259a079b67c3fffc1dc5e839694bd13b4a77781f7542789b81527f16e46d26c97dbadd65f457815883edf79f2e56ca74d8b1b4b4ae994377b007c38184015281516101800152825180840184527f18dc6177ff1786841e73ec76cb4e9f15700498c14a6a0ffbde5efeb26c632f6881527f2718e533838c89a5a3d0db3cb56e364f8e4cd199d734458a82c3ba435e7b6f148184015281516101a00152825180840184527f1d9c11e189e29a985bc24a23ebb8c370222d98829c12daad68ab89a80d543ae681527f1ed3f9c8c7ee4279095449a3c2d0bef5f87b4409fb231ea1755bab2ef90db4288184015281516101c00152825180840184527f283082e78ec736fd8021c35004ca1dacd39604f0175ae4646e90df3d7ec62a8481527e5af2a2e785614333c39b88b2f7ddefaea9268899d6cc38cdd83b587b26b27f8184015281516101e0015282518084019093527f20e865008ea7b1cb4e2a433f87f38a37935156813238b7742ea7885217ae1c4a83527f0c0e7663fa3babaea1eb54652c59d3fdf358cf2e530b1d794608913476a9bafa9183019190915251610200015290565b610eb461132c565b610ebc611346565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610eef57610ef1565bfe5b5080610f39576040805162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604482015290519081900360640190fd5b505092915050565b610f4961132c565b610f51611364565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610eef575080610f39576040805162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b604482015290519081900360640190fd5b610fda61132c565b8151158015610feb57506020820151155b1561100a57506040805180820190915260008082526020820152611050565b60405180604001604052808360000151815260200160008051602061146783398151915284602001518161103a57fe5b0660008051602061146783398151915203905290505b919050565b600061105f611382565b60405180608001604052808b815260200189815260200187815260200185815250905061108a6113af565b50604080516080810182528a81526020810189905280820187905260608082018690528251601880825261032082019094529192918281602001602082028036833701905050905060005b600481101561122c57600681028582600481106110ee57fe5b602002015151835184908390811061110257fe5b60200260200101818152505085826004811061111a57fe5b60200201516020015183826001018151811061113257fe5b60200260200101818152505084826004811061114a57fe5b60200201515151835184906002840190811061116257fe5b60200260200101818152505084826004811061117a57fe5b6020020151516001602002015183826003018151811061119657fe5b6020026020010181815250508482600481106111ae57fe5b6020020151602001516000600281106111c357fe5b60200201518382600401815181106111d757fe5b6020026020010181815250508482600481106111ef57fe5b60200201516020015160016002811061120457fe5b602002015183826005018151811061121857fe5b6020908102919091010152506001016110d5565b506112356113dc565b6000602082602086026020860160086107d05a03fa9050808015610eef57508061129e576040805162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604482015290519081900360640190fd5b505115159d9c50505050505050505050505050565b60405180606001604052806112c661132c565b81526020016112d36113fa565b81526020016112e061132c565b905290565b6040518060a001604052806112f861132c565b81526020016113056113fa565b81526020016113126113fa565b815260200161131f6113fa565b81526020016112e061141a565b604051806040016040528060008152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180608001604052806004905b61139961132c565b8152602001906001900390816113915790505090565b60405180608001604052806004905b6113c66113fa565b8152602001906001900390816113be5790505090565b60405180602001604052806001906020820280368337509192915050565b604051806040016040528061140d611448565b81526020016112e0611448565b6040518061022001604052806011905b61143261132c565b81526020019060019003908161142a5790505090565b6040518060400160405280600290602082028036833750919291505056fe30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47a264697066735822122053e3b59348b527396d8643825f20a23bfa2e21362f62059b75ca97d8bf66c90f64736f6c634300060c0033";