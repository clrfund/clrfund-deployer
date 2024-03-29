/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BrightIdUserRegistryInterface extends ethers.utils.Interface {
  functions: {
    "context()": FunctionFragment;
    "isVerifiedUser(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "register(bytes32,address[],uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setSettings(bytes32,address)": FunctionFragment;
    "sponsor(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verifications(address)": FunctionFragment;
    "verifier()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "context", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isVerifiedUser",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [
      BytesLike,
      string[],
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setSettings",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "sponsor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifications",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;

  decodeFunctionResult(functionFragment: "context", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isVerifiedUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSettings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sponsor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifications",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SetBrightIdSettings(bytes32,address)": EventFragment;
    "Sponsor(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetBrightIdSettings"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sponsor"): EventFragment;
}

export class BrightIdUserRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BrightIdUserRegistryInterface;

  functions: {
    context(overrides?: CallOverrides): Promise<[string]>;

    isVerifiedUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    register(
      _context: BytesLike,
      _addrs: string[],
      _timestamp: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSettings(
      _context: BytesLike,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sponsor(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifications(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { time: BigNumber; isVerified: boolean }>;

    verifier(overrides?: CallOverrides): Promise<[string]>;
  };

  context(overrides?: CallOverrides): Promise<string>;

  isVerifiedUser(_user: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  register(
    _context: BytesLike,
    _addrs: string[],
    _timestamp: BigNumberish,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSettings(
    _context: BytesLike,
    _verifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sponsor(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifications(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { time: BigNumber; isVerified: boolean }>;

  verifier(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    context(overrides?: CallOverrides): Promise<string>;

    isVerifiedUser(_user: string, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    register(
      _context: BytesLike,
      _addrs: string[],
      _timestamp: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setSettings(
      _context: BytesLike,
      _verifier: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sponsor(addr: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verifications(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { time: BigNumber; isVerified: boolean }>;

    verifier(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    SetBrightIdSettings(
      context?: null,
      verifier?: null
    ): TypedEventFilter<
      [string, string],
      { context: string; verifier: string }
    >;

    Sponsor(addr?: string | null): TypedEventFilter<[string], { addr: string }>;
  };

  estimateGas: {
    context(overrides?: CallOverrides): Promise<BigNumber>;

    isVerifiedUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      _context: BytesLike,
      _addrs: string[],
      _timestamp: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSettings(
      _context: BytesLike,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sponsor(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifications(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    verifier(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    context(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isVerifiedUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      _context: BytesLike,
      _addrs: string[],
      _timestamp: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSettings(
      _context: BytesLike,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sponsor(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifications(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
