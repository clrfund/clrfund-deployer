import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployPoseidonT3 } from "../../hooks/Deploy/useDeployPoseidonT3";
import { Web3Form } from "../Web3Form";

export const DeployPoseidonT3Form = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { handleSubmit } = useForm();
  const { validator, handleDeployPoseidonT3, error } = useDeployPoseidonT3();

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployPoseidonT3.deploy == null)
        throw error ? error : handleDeployPoseidonT3.error;
      const ok = await validator.checkArgs();
      if (!ok) throw Error("Failed smartcontract requirements");
      const PoseidonT3Contract = await handleDeployPoseidonT3.deploy();
      setTxLink("https://blockscout.com/xdai/mainnet/address/" + PoseidonT3Contract.address + "/transactions");
      setTxLoading(false);
    } catch (e) {
      console.log(e);
      setTxError(e && e.message ? e.message : "unexpected error");
      setTxLoading(false);
    }
  };

  return (
    <Web3Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title>Deploy PoseidonT3</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys an PoseidonT3 Library needed to Deploy a MACIFactory
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Submit loading={txLoading}>Deploy PoseidonT3 Library</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeployPoseidonT3Form;
