import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useCoordinatorQuit } from "@clrfund/factory-hooks";
import {Web3Form} from "../Web3Form";

/**
 * @class
 * @classdesc - component for coordinatorQuit method
 **/
export const CoordinatorQuitForm = (props:any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean|string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<boolean|string>(false);
  const {  handleSubmit } = useForm();
  // const { validator, handleCoordinatorQuit, getReceipt, error } = useCoordinatorQuit(
  //   "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  // );
  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);

      // if (validator == null || handleCoordinatorQuit == null) throw error;

      // const ok = await validator();
      // if (!ok) throw Error("Failed smartcontract requirements");

      // const [tx, handleCoordinatorQuitError] = await handleCoordinatorQuit();
      // if (handleCoordinatorQuitError) throw Error(handleCoordinatorQuitError);
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
    <Web3Form.Form pt="6" pb="5" onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title mb="21px">CoordinatorQuit</Web3Form.Title>
      <Web3Form.Detail mb="32px">This function is used for the coordinator to quit.</Web3Form.Detail>
      <Web3Form.Submit loading={txLoading} />
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default CoordinatorQuitForm;
