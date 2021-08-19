import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSetMaciParameters } from "../../hooks/FundingFactory";
import { TransactionReceipt } from "../../hooks/FundingFactory/utils";
import { Web3Form } from "../Web3Form";
import { useLocation } from "react-router-dom";

/**
 * @class
 * @classdesc - component for setMaciParameters method
 **/
export const SetMaciParametersForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<null | TransactionReceipt>(null);
  const { handleSubmit, errors, register } = useForm();
  const [contractAddress, setContractAddress] = useState<string>("0x0dA71825182944234F45755989a8C96Ac1343E07");

  let { search: params } = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(params);
    const contractAddress = query.get("contract");
    setContractAddress(contractAddress ? contractAddress : "0x0dA71825182944234F45755989a8C96Ac1343E07");
  }, [params]);
  const { validator, handleSetMaciParameters, getReceipt, error } = useSetMaciParameters(contractAddress);

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");

      setTxLoading(true);

      if (validator.checkArgs == null || handleSetMaciParameters.send == null || getReceipt.waitTwoBlocks == null)
        throw error ? error : handleSetMaciParameters.error;

      const ok = await validator.checkArgs(
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

      const tx = await handleSetMaciParameters.send(
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
      setTxLink("https://blockscout.com/xdai/mainnet/tx/" + tx.hash);

      const { receipt, error: getReceiptError } = await getReceipt.waitTwoBlocks(tx.hash);
      if (getReceiptError) throw getReceiptError;

      setTxReceipt(receipt);
      setTxLoading(false);
    } catch (e) {
      console.log(e);
      setTxError(e && e.message ? e.message : "unexpected error");
      setTxLoading(false);
    }
  };

  return (
    <Web3Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title>Set Maci Parameters</Web3Form.Title>
      <Web3Form.Heading detail="These changes will take effect on the next voting round. Voting rounds that have already started or been deployed will not be affected.">
        This function is used to set Maci parameters
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>

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
        name="_batchUstVerifier"
        label="_batchUstVerifier"
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
      <Web3Form.Submit loading={txLoading}>Set Maci Parameters</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default SetMaciParametersForm;
