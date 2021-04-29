import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployOptimisticRecipientRegistry } from "../../hooks/Deploy/useDeployOptimisticRecipientRegistry";
import { Web3Form } from "../Web3Form";
import { useHistory } from "react-router-dom";

export const DeployOptimisticRecipientRegistryForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { register, handleSubmit, errors } = useForm();
  const { validator, handleDeployOptimisticRecipientRegistry, error } = useDeployOptimisticRecipientRegistry();
  const history = useHistory();
  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployOptimisticRecipientRegistry.deploy == null)
        throw error ? error : handleDeployOptimisticRecipientRegistry.error;

      const ok = await validator.checkArgs(data._baseDeposit, data._challengePeriodDuration, data._controller);
      if (!ok) throw Error("Failed smartcontract requirements");
      const OptimisticRecipientRegistryContract = await handleDeployOptimisticRecipientRegistry.deploy(
        data._baseDeposit,
        data._challengePeriodDuration,
        data._controller
      );
      setTxLink(
        "https://blockscout.com/xdai/mainnet/address/" + OptimisticRecipientRegistryContract.address + "/transactions"
      );
      setTxLoading(false);
      const params = new URLSearchParams();
      if (OptimisticRecipientRegistryContract.address) {
        params.append("OptimisticRecipientRegistryAddress", OptimisticRecipientRegistryContract.address);
      } else {
        params.delete("OptimisticRecipientRegistryAddress");
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
      <Web3Form.Title>Deploy OptimisticRecipientRegistry</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys a OptimisticRecipientRegistry Contract necessary to start a funding round
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Input
        name="_baseDeposit"
        label="_baseDeposit"
        placeholder="Uint256"
        ref={register(Web3Form.registerUint256)}
        errors={errors}
      />
      <Web3Form.Input
        name="_challengePeriodDuration"
        label="_challengePeriodDuration"
        placeholder="Uint256"
        ref={register(Web3Form.registerUint256)}
        errors={errors}
      />
      <Web3Form.Input
        name="_controller"
        label="_controller"
        placeholder="Address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>Deploy OptimisticRecipientRegistry</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeployOptimisticRecipientRegistryForm;
