import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployFundingRoundFactory } from "../../hooks/Deploy/useDeployFundingRoundFactory";
import { Web3Form } from "../Web3Form";
import { useHistory } from "react-router-dom";

export const DeployFundingRoundFactoryForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { register, handleSubmit, errors } = useForm();
  const { validator, handleDeployFundingRoundFactory, error } = useDeployFundingRoundFactory();
  const history = useHistory();
  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployFundingRoundFactory.deploy == null)
        throw error ? error : handleDeployFundingRoundFactory.error;
      const ok = await validator.checkArgs(data._maciFactory);
      if (!ok) throw Error("Failed smartcontract requirements");
      const FundingRoundFactoryContract = await handleDeployFundingRoundFactory.deploy(data._maciFactory);
      setTxLink("https://blockscout.com/xdai/mainnet/address/" + FundingRoundFactoryContract.address + "/transactions");
      setTxLoading(false);
      const params = new URLSearchParams();
      if (FundingRoundFactoryContract.address) {
        params.append("contract_address", FundingRoundFactoryContract.address);
      } else {
        params.delete("contract_address");
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
      <Web3Form.Title>Deploy FundingRoundFactory</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys a Funding Round Factory Contract necessary to start a funding round
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Input
        name="_maciFactory"
        label="_maciFactory"
        placeholder="address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>Deploy Funding Round Factory</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeployFundingRoundFactoryForm;
