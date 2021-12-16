import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployKlerosGTCRAdapter } from "../../hooks/Deploy/useDeployKlerosGTCRAdapter";
import { Web3Form } from "../Web3Form";
import { useHistory } from "react-router-dom";

export const DeployKlerosGTCRAdapterForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { register, handleSubmit, errors } = useForm();
  const { validator, handleDeployKlerosGTCRAdapter, error } = useDeployKlerosGTCRAdapter();
  const history = useHistory();
  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployKlerosGTCRAdapter.deploy == null)
        throw error ? error : handleDeployKlerosGTCRAdapter.error;

      const ok = await validator.checkArgs(data._tcr, data._controller);
      if (!ok) throw Error("Failed smartcontract requirements");
      const KlerosGTCRAdapterContract = await handleDeployKlerosGTCRAdapter.deploy(data._tcr, data._controller);
      setTxLink("https://blockscout.com/xdai/mainnet/address/" + KlerosGTCRAdapterContract.address + "/transactions");
      setTxLoading(false);
      const params = new URLSearchParams();
      if (KlerosGTCRAdapterContract.address) {
        params.append("KlerosGTCRAdapterAddress", KlerosGTCRAdapterContract.address);
      } else {
        params.delete("KlerosGTCRAdapterAddress");
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
      <Web3Form.Title>Deploy KlerosGTCRAdapter</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys a KlerosGTCRAdapter Contract necessary to start a funding round
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Input
        name="_tcr"
        label="_tcr"
        placeholder="Address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Input
        name="_controller"
        label="_controller"
        placeholder="Address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>Deploy KlerosGTCRAdapter</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeployKlerosGTCRAdapterForm;
