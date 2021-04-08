import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployERC20 } from "../../hooks/Deploy/useDeployERC20";
import { Web3Form } from "../Web3Form";

export const DeployErc20Form = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { register, handleSubmit, errors } = useForm();
  const { validator, handleDeployERC20, error } = useDeployERC20();

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployERC20.deploy == null)
        throw error ? error : handleDeployERC20.error;
      const ok = await validator.checkArgs(data._initialSupply);
      if (!ok) throw Error("Failed smartcontract requirements");
      const erc20Contract = await handleDeployERC20.deploy(data._initialSupply);
      setTxLink("https://blockscout.com/xdai/mainnet/address/" + erc20Contract.address + "/transactions");
      setTxLoading(false);
    } catch (e) {
      console.log(e);
      setTxError(e && e.message ? e.message : "unexpected error");
      setTxLoading(false);
    }
  };

  return (
    <Web3Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title>Deploy ERC20</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys an ERC20 Contract necessary to help testing
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Input
        name="_initialSupply"
        label="_initialSupply"
        placeholder="amount"
        ref={register(Web3Form.registerUint256)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>Deploy ERC20</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeployErc20Form;
