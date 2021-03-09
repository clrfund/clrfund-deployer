import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTransferMatchingFunds } from "@clrfund/factory-hooks";
import Form from "@motion-system/web3-form";

/**
 * @class
 * @classdesc - component for transferMatchingFunds method
 **/
export const TransferMatchingFundsForm = (props) => {
  const [txLoading, setTxLoading] = useState(false);
  const [txError, setTxError] = useState(false);
  const [txLink, setTxLink] = useState(false);
  const [txReceipt, setTxReceipt] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const { validator, handleTransferMatchingFunds, getReceipt, error } = useTransferMatchingFunds(
    "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);
      if (validator == null || handleTransferMatchingFunds == null) throw error;

      const ok = await validator(data._totalSpent, data._totalSpentSalt);
      if (!ok) throw Error("Failed smartcontract requirements");

      const [tx, handleTransferMatchingFundsError] = await handleTransferMatchingFunds(
        data._totalSpent,
        data._totalSpentSalt
      );
      if (handleTransferMatchingFundsError) throw Error(handleTransferMatchingFundsError);
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
      <Form.Title mb="21px">TransferMatchingFunds</Form.Title>
      <Form.Detail mb="32px">This function is used to transfer matching funds</Form.Detail>
      <Form.Input
        name="_totalSpent"
        label="_totalSpent"
        placeHolder="uint256"
        ref={register(Form.registerUint256)}
        errors={errors}
      />
      <Form.Input
        name="_totalSpentSalt"
        label="_totalSpentSalt"
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

export default TransferMatchingFundsForm;
