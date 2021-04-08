import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployBatchUpdateStateTreeVerifier } from "../../hooks/Deploy/useDeployBatchUpdateStateTreeVerifier";
import { Web3Form } from "../Web3Form";

export const DeployBatchUpdateStateTreeVerifierForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { handleSubmit } = useForm();
  const { validator, handleDeployBatchUpdateStateTreeVerifier, error } = useDeployBatchUpdateStateTreeVerifier();

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployBatchUpdateStateTreeVerifier.deploy == null)
        throw error ? error : handleDeployBatchUpdateStateTreeVerifier.error;
      const ok = await validator.checkArgs();
      if (!ok) throw Error("Failed smartcontract requirements");
      const BustVerifierContract = await handleDeployBatchUpdateStateTreeVerifier.deploy();
      setTxLink("https://blockscout.com/xdai/mainnet/address/" + BustVerifierContract.address + "/transactions");
      setTxLoading(false);
    } catch (e) {
      console.log(e);
      setTxError(e && e.message ? e.message : "unexpected error");
      setTxLoading(false);
    }
  };

  return (
    <Web3Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title>Deploy Batch UST Verifier</Web3Form.Title>

      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys an Batch U.S.T. Verifier Contract necessary to deploy a MACI Factory
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Submit loading={txLoading}>Deploy Batch U.S.T. Verifier</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeployBatchUpdateStateTreeVerifierForm;
