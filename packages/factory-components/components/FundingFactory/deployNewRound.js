import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeployNewRound } from "@clrfund/factory-hooks";
import Form from "@motion-system/web3-form";

/**
 * @class
 * @classdesc - component for deployNewRound method
 **/
export const DeployNewRoundForm = (props) => {
  const [txLoading, setTxLoading] = useState(false);
  const [txError, setTxError] = useState(false);
  const [txLink, setTxLink] = useState(false);
  const [txReceipt, setTxReceipt] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const { validator, handleDeployNewRound, getReceipt, error } = useDeployNewRound(
    "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);

      if (validator == null || handleDeployNewRound == null) throw error;

      const ok = await validator();
      if (!ok) throw Error("Failed smartcontract requirements");

      const [tx, handleDeployNewRoundError] = await handleDeployNewRound();
      if (handleDeployNewRoundError) throw Error(handleDeployNewRoundError);
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
      <Form.Title mb="21px">DeployNewRound</Form.Title>
      <Form.Detail mb="32px">This function is used to deploy a new funding round</Form.Detail>
      <Form.Submit loading={txLoading} />
      <Form.Error error={txError} />
      <Form.ExporerLink url={txLink} />
      <Form.Receipt receipt={txReceipt} />
    </Form>
  );
};

export default DeployNewRoundForm;
