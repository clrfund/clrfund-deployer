import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployQuadVoteTallyVerifier } from "../../hooks/Deploy/useDeployQuadVoteTallyVerifier";
import { Web3Form } from "../Web3Form";

export const DeployQuadVoteTallyVerifierForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { handleSubmit } = useForm();
  const { validator, handleDeployQuadVoteTallyVerifier, error } = useDeployQuadVoteTallyVerifier();

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployQuadVoteTallyVerifier.deploy == null)
        throw error ? error : handleDeployQuadVoteTallyVerifier.error;
      const ok = await validator.checkArgs();
      if (!ok) throw Error("Failed smartcontract requirements");
      const QuadVoteTallyVerifierContract = await handleDeployQuadVoteTallyVerifier.deploy();
      setTxLink(
        "https://blockscout.com/xdai/mainnet/address/" + QuadVoteTallyVerifierContract.address + "/transactions"
      );
      setTxLoading(false);
    } catch (e) {
      console.log(e);
      setTxError(e && e.message ? e.message : "unexpected error");
      setTxLoading(false);
    }
  };

  return (
    <Web3Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title>Deploy Quadratic Vote Tally Verifier</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys an Quadratic Vote Tally Verifier Contract
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>

      <Web3Form.Submit loading={txLoading}>Deploy QV Tally Verifier</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeployQuadVoteTallyVerifierForm;
