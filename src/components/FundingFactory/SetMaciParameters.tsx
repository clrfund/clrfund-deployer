import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetMaciParameters } from "../../hooks/FundingFactory";
import { TransactionReceipt } from "../../hooks/FundingFactory/utils";
import { Web3Form } from "../Web3Form";

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
  const { validator, handleSetMaciParameters, getReceipt, error } = useSetMaciParameters(
    "0x5fc8d32690cc91d4c39d9d3abcbd16989f875707"
  );

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
      setTxLink("https://etherscan.io/tx/" + tx.hash);

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
    <Web3Form.Form my="50px" pt="6" pb="5" onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title mb="21px">SetMaciParameters</Web3Form.Title>
      <Web3Form.Detail mb="32px">This function is used to set Maci parameters</Web3Form.Detail>
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
