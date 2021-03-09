import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetMaciParameters } from "@clrfund/factory-hooks";
import Form from "@motion-system/web3-form";

/**
 * @class
 * @classdesc - component for setMaciParameters method
 **/
export const SetMaciParametersForm = (props) => {
  const [txLoading, setTxLoading] = useState(false);
  const [txError, setTxError] = useState(false);
  const [txLink, setTxLink] = useState(false);
  const [txReceipt, setTxReceipt] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const { validator, handleSetMaciParameters, getReceipt, error } = useSetMaciParameters(
    "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);

      if (validator == null || handleSetMaciParameters == null) throw error;

      const ok = await validator(
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

      const [tx, handleSetMaciParametersError] = await handleSetMaciParameters(
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
      if (handleSetMaciParametersError) throw Error(handleSetMaciParametersError);
      setTxLink("https://etherscan.io/tx/" + tx.hash);

      const [receipt, getReceiptError] = await getReceipt(tx.hash);
      if (getReceiptError) throw Error(getReceiptError);
      setTxReceipt(receipt);
      setTxLoading(false);
    } catch (e) {
      console.log(e);
      setTxError(e.message);
      setTxLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Title mb="21px">SetMaciParameters</Form.Title>
      <Form.Detail mb="32px">This function is used to set Maci parameters</Form.Detail>
      <Form.Input
        name="_stateTreeDepth"
        label="_stateTreeDepth"
        placeHolder="uint8"
        ref={register(Form.registerUint8)}
        errors={errors}
      />
      <Form.Input
        name="_messageTreeDepth"
        label="_messageTreeDepth"
        placeHolder="uint8"
        ref={register(Form.registerUint8)}
        errors={errors}
      />
      <Form.Input
        name="_voteOptionTreeDepth"
        label="_voteOptionTreeDepth"
        placeHolder="uint8"
        ref={register(Form.registerUint8)}
        errors={errors}
      />
      <Form.Input
        name="_tallyBatchSize"
        label="_tallyBatchSize"
        placeHolder="uint8"
        ref={register(Form.registerUint8)}
        errors={errors}
      />
      <Form.Input
        name="_messageBatchSize"
        label="_messageBatchSize"
        placeHolder="uint8"
        ref={register(Form.registerUint8)}
        errors={errors}
      />
      <Form.Input
        name="_batchUstVerifier"
        label="_batchUstVerifier"
        placeHolder="address"
        ref={register(Form.registerAddress)}
        errors={errors}
      />
      <Form.Input
        name="_qvtVerifier"
        label="_qvtVerifier"
        placeHolder="address"
        ref={register(Form.registerAddress)}
        errors={errors}
      />
      <Form.Input
        name="_signUpDuration"
        label="_signUpDuration"
        placeHolder="uint256"
        ref={register(Form.registerUint256)}
        errors={errors}
      />
      <Form.Input
        name="_votingDuration"
        label="_votingDuration"
        placeHolder="uint256"
        ref={register(Form.registerUint256)}
        errors={errors}
      />
      <Form.Submit loading={txLoading} />
      <Form.Error error={txError} />
      <Form.ExporerLink url={txLink} />
      <Form.Receipt receipt={txReceipt} />
    </Form>
  );
};

export default SetMaciParametersForm;
