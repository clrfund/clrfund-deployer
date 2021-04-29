import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployMACIFactory } from "../../hooks/Deploy/useDeployMACIFactory";
import { Web3Form } from "../Web3Form";
import { useHistory } from "react-router-dom";

export const DeployMACIFactoryForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const { register, handleSubmit, errors } = useForm();
  const { validator, handleDeployMACIFactory, error } = useDeployMACIFactory();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployMACIFactory.deploy == null)
        throw error ? error : handleDeployMACIFactory.error;
      const ok = await validator.checkArgs(
        data.poseidonT3Address,
        data.poseidonT6Address,
        data._stateTreeDepth,
        data._messageTreeDepth,
        data._voteOptionTreeDepth,
        data._tallyBatchSize,
        data._messageBatchSize,
        data._batchUstVerifier,
        data._qvtVerifier,
        data._signUpDuration,
        data._votingDuration
      );
      if (!ok) throw Error("Failed smartcontract requirements");
      const MACIFactoryContract = await handleDeployMACIFactory.deploy(
        data.poseidonT3Address,
        data.poseidonT6Address,
        data._stateTreeDepth,
        data._messageTreeDepth,
        data._voteOptionTreeDepth,
        data._tallyBatchSize,
        data._messageBatchSize,
        data._batchUstVerifier,
        data._qvtVerifier,
        data._signUpDuration,
        data._votingDuration
      );
      setTxLink("https://blockscout.com/xdai/mainnet/address/" + MACIFactoryContract.address + "/transactions");
      setTxLoading(false);
      const params = new URLSearchParams();
      if (MACIFactoryContract.address) {
        params.append("MACIFactoryAddress", MACIFactoryContract.address);
      } else {
        params.delete("MACIFactoryAddress");
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
      <Web3Form.Title>Deploy MACIFactory</Web3Form.Title>
      <Web3Form.Heading detail="Deploying contracts can be expensive, make sure to note the addreses of the contracts deployed, you will need them in the following steps.">
        This Deploys an MACIFactory Contract needed to Deploy a Funding Factory
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>
      <Web3Form.Input
        name="poseidonT3Address"
        label="poseidonT3Address"
        placeholder="address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Input
        name="poseidonT6Address"
        label="poseidonT6Address"
        placeholder="address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Input
        name="_qvtVerifier"
        label="_qvtVerifier"
        placeholder="address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Input
        name="_batchUstVerifier"
        label="_batchUstVerifier"
        placeholder="address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Input
        name="_stateTreeDepth"
        label="_stateTreeDepth"
        placeholder="uint8"
        ref={register(Web3Form.registerUint8)}
        errors={errors}
      />
      <Web3Form.Input
        name="_messageTreeDepth"
        label="_messageTreeDepth"
        placeholder="uint8"
        ref={register(Web3Form.registerUint8)}
        errors={errors}
      />
      <Web3Form.Input
        name="_voteOptionTreeDepth"
        label="_voteOptionTreeDepth"
        placeholder="uint8"
        ref={register(Web3Form.registerUint8)}
        errors={errors}
      />
      <Web3Form.Input
        name="_tallyBatchSize"
        label="_tallyBatchSize"
        placeholder="uint8"
        ref={register(Web3Form.registerUint8)}
        errors={errors}
      />
      <Web3Form.Input
        name="_messageBatchSize"
        label="_messageBatchSize"
        placeholder="uint8"
        ref={register(Web3Form.registerUint8)}
        errors={errors}
      />
      <Web3Form.Input
        name="_signUpDuration"
        label="_signUpDuration"
        placeholder="uint256"
        ref={register(Web3Form.registerUint256)}
        errors={errors}
      />
      <Web3Form.Input
        name="_votingDuration"
        label="_votingDuration"
        placeholder="uint256"
        ref={register(Web3Form.registerUint256)}
        errors={errors}
      />

      <Web3Form.Submit loading={txLoading}>Deploy MACI Factory</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
    </Web3Form.Form>
  );
};

export default DeployMACIFactoryForm;
