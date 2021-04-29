import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployKlerosGTCRMock } from "../../hooks/Deploy/useDeployKlerosGTCRMock";
import { Web3Form } from "../Web3Form";
import { useHistory } from "react-router-dom";

export const DeployKlerosGTCRMockForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { register, handleSubmit, errors } = useForm();
  const { validator, handleDeployKlerosGTCRMock, error } = useDeployKlerosGTCRMock();
  const history = useHistory();
  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployKlerosGTCRMock.deploy == null)
        throw error ? error : handleDeployKlerosGTCRMock.error;

      const ok = await validator.checkArgs(data._registrationMetaEvidence, data._clearingMetaEvidence);
      if (!ok) throw Error("Failed smartcontract requirements");
      const KlerosGTCRMockContract = await handleDeployKlerosGTCRMock.deploy(
        data._registrationMetaEvidence,
        data._clearingMetaEvidence
      );
      setTxLink("https://blockscout.com/xdai/mainnet/address/" + KlerosGTCRMockContract.address + "/transactions");
      setTxLoading(false);
      const params = new URLSearchParams();
      if (KlerosGTCRMockContract.address) {
        params.append("KlerosGTCRMockAddress", KlerosGTCRMockContract.address);
      } else {
        params.delete("KlerosGTCRMockAddress");
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
      <Web3Form.Title>Deploy KlerosGTCRMock</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys a KlerosGTCRMock Contract necessary to start a funding round
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Input
        name="_registrationMetaEvidence"
        label="_registrationMetaEvidence"
        placeholder="String"
        ref={register(Web3Form.registerString)}
        errors={errors}
      />
      <Web3Form.Input
        name="_clearingMetaEvidence"
        label="_clearingMetaEvidence"
        placeholder="String"
        ref={register(Web3Form.registerString)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>Deploy KlerosGTCRMock</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeployKlerosGTCRMockForm;
