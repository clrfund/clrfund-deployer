
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {Web3Form} from "../Web3Form";
// import { useCancelCurrentRound } from "@clrfund/factory-hooks";

/**
 * @class
 * @classdesc - component for CancelCurrentRound method
 **/
export const CancelCurrentRoundForm = (props:any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean|string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<boolean|string>(false);
  const {  handleSubmit } = useForm();
  // const { validator, handleCancelCurrentRound, getReceipt, error } = useCancelCurrentRound(
  //   "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  // );
  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);
      // if (validator == null || handleAddFundingSource == null) throw error;

      // const ok = await validator(data._source);
      // if (!ok) throw Error("Failed smartcontract requirements");

      // const [tx, handleAddFundingSourceError] = await handleAddFundingSource(data._source);
      // if (handleAddFundingSourceError) throw Error(handleAddFundingSourceError);
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
    <Web3Form.Form  pt="6" pb="5" onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title mb="21px">CancelCurrentRound</Web3Form.Title>
      <Web3Form.Detail mb="32px">This function is used to cancel the current round.</Web3Form.Detail>

      <Web3Form.Submit loading={txLoading} />
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>


  );
};

export default CancelCurrentRoundForm;
