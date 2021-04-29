import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeploySimpleRecipientRegistry } from "../../hooks/Deploy/useDeploySimpleRecipientRegistry";
import { Web3Form } from "../Web3Form";
import { useHistory } from "react-router-dom";

export const DeploySimpleRecipientRegistryForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { register, handleSubmit, errors } = useForm();
  const { validator, handleDeploySimpleRecipientRegistry, error } = useDeploySimpleRecipientRegistry();
  const history = useHistory();
  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeploySimpleRecipientRegistry.deploy == null)
        throw error ? error : handleDeploySimpleRecipientRegistry.error;

      const ok = await validator.checkArgs(data._controller);
      if (!ok) throw Error("Failed smartcontract requirements");
      const SimpleRecipientRegistryContract = await handleDeploySimpleRecipientRegistry.deploy(data._controller);
      setTxLink(
        "https://blockscout.com/xdai/mainnet/address/" + SimpleRecipientRegistryContract.address + "/transactions"
      );
      setTxLoading(false);
      const params = new URLSearchParams();
      if (SimpleRecipientRegistryContract.address) {
        params.append("SimpleRecipientRegistryAddress", SimpleRecipientRegistryContract.address);
      } else {
        params.delete("SimpleRecipientRegistryAddress");
      }
      history.push({ search: params.toString() });
    } catch (e) {
      console.log(e);
      setTxError(e && e.message ? e.message : "unexpected error");
      setTxLoading(false);
    }
  };

  return (
    <Web3Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title>Deploy SimpleRecipientRegistry</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys a SimpleRecipientRegistry Contract necessary to start a funding round
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Input
        name="_controller"
        label="_controller"
        placeholder="Address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>Deploy SimpleRecipientRegistry</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeploySimpleRecipientRegistryForm;
