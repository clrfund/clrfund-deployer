import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useSetMaciParameters } from "@clrfund/factory-hooks";
import { Web3Form } from "../Web3Form";

/**
 * @class
 * @classdesc - component for setMaciParameters method
 **/
export const SetMaciParametersForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<boolean | string>(false);
  const { handleSubmit, errors, register } = useForm();
  // const { validator, handleSetMaciParameters, getReceipt, error } = useSetMaciParameters(
  //   "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  // );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);

      // if (validator == null || handleSetMaciParameters == null) throw error;

      // const ok = await validator(
      //   data._stateTreeDepth,
      //   data._messageTreeDepth,
      //   data._voteOptionTreeDepth,
      //   data._tallyBatchSize,
      //   data._messageBatchSize,
      //   data._batchUstVerifier,
      //   data._qvtVerifier,
      //   data._signUpDuration,
      //   data._votingDuration
      // );
      // if (!ok) throw Error("Failed smartcontract requirements");

      // const [tx, handleSetMaciParametersError] = await handleSetMaciParameters(
      //   data._stateTreeDepth,
      //   data._messageTreeDepth,
      //   data._voteOptionTreeDepth,
      //   data._tallyBatchSize,
      //   data._messageBatchSize,
      //   data._batchUstVerifier,
      //   data._qvtVerifier,
      //   data._signUpDuration,
      //   data._votingDuration
      // );
      // if (handleSetMaciParametersError) throw Error(handleSetMaciParametersError);
      // setTxLink("https://etherscan.io/tx/" + tx.hash);

      // const [receipt, getReceiptError] = await getReceipt(tx.hash);
      // if (getReceiptError) throw Error(getReceiptError);
      // setTxReceipt(receipt);
      setTxLoading(false);
    } catch (e) {
      console.log(e);
      setTxError(e.message);
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
      <Web3Form.Submit loading={txLoading} />
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default SetMaciParametersForm;
