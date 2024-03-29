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

interface SimpleRecipientRegistryInterface extends ethers.utils.Interface {
  functions: {
    "addRecipient(address,string)": FunctionFragment;
    "controller()": FunctionFragment;
    "getRecipientAddress(uint256,uint256,uint256)": FunctionFragment;
    "getRecipientCount()": FunctionFragment;
    "maxRecipients()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeRecipient(bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMaxRecipients(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addRecipient",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecipientAddress",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecipientCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxRecipients",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeRecipient",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxRecipients",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRecipientAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecipientCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RecipientAdded(bytes32,address,string,uint256,uint256)": EventFragment;
    "RecipientRemoved(bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientRemoved"): EventFragment;
}

export class SimpleRecipientRegistry extends BaseContract {
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

  interface: SimpleRecipientRegistryInterface;

  functions: {
    addRecipient(
      _recipient: string,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    getRecipientAddress(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRecipientCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxRecipients(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeRecipient(
      _recipientId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addRecipient(
    _recipient: string,
    _metadata: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  getRecipientAddress(
    _index: BigNumberish,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRecipientCount(overrides?: CallOverrides): Promise<BigNumber>;

  maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeRecipient(
    _recipientId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxRecipients(
    _maxRecipients: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRecipient(
      _recipient: string,
      _metadata: string,
      overrides?: CallOverrides
    ): Promise<void>;

    controller(overrides?: CallOverrides): Promise<string>;

    getRecipientAddress(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRecipientCount(overrides?: CallOverrides): Promise<BigNumber>;

    maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeRecipient(
      _recipientId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    RecipientAdded(
      _recipientId?: BytesLike | null,
      _recipient?: null,
      _metadata?: null,
      _index?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        _recipientId: string;
        _recipient: string;
        _metadata: string;
        _index: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    RecipientRemoved(
      _recipientId?: BytesLike | null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _recipientId: string; _timestamp: BigNumber }
    >;
  };

  estimateGas: {
    addRecipient(
      _recipient: string,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    getRecipientAddress(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecipientCount(overrides?: CallOverrides): Promise<BigNumber>;

    maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeRecipient(
      _recipientId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRecipient(
      _recipient: string,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRecipientAddress(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecipientCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxRecipients(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeRecipient(
      _recipientId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
