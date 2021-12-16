import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeploySimpleUserRegistry } from "../../hooks/Deploy/useDeploySimpleUserRegistry";
import { Web3Form } from "../Web3Form";
import { useHistory } from "react-router-dom";

export const DeploySimpleUserRegistryForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { handleSubmit } = useForm();
  const { validator, handleDeploySimpleUserRegistry, error } = useDeploySimpleUserRegistry();
  const history = useHistory();
  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeploySimpleUserRegistry.deploy == null)
        throw error ? error : handleDeploySimpleUserRegistry.error;

      const ok = await validator.checkArgs();
      if (!ok) throw Error("Failed smartcontract requirements");
      const SimpleUserRegistryContract = await handleDeploySimpleUserRegistry.deploy();
      setTxLink("https://blockscout.com/xdai/mainnet/address/" + SimpleUserRegistryContract.address + "/transactions");
      setTxLoading(false);
      const params = new URLSearchParams();
      if (SimpleUserRegistryContract.address) {
        params.append("SimpleUserRegistryAddress", SimpleUserRegistryContract.address);
      } else {
        params.delete("SimpleUserRegistryAddress");
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
      <Web3Form.Title>Deploy SimpleUserRegistry</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys a SimpleUserRegistry Contract necessary to start a funding round
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Submit loading={txLoading}>Deploy SimpleUserRegistry</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeploySimpleUserRegistryForm;
