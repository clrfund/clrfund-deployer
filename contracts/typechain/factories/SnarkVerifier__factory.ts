/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { SnarkVerifier, SnarkVerifierInterface } from "../SnarkVerifier";

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

export class SnarkVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): SnarkVerifierInterface {
    return new utils.Interface(_abi) as SnarkVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SnarkVerifier {
    return new Contract(address, _abi, signerOrProvider) as SnarkVerifier;
  }
}