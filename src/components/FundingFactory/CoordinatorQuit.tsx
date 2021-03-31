import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCoordinatorQuit } from "../../hooks/FundingFactory";
import { TransactionReceipt } from "../../hooks/FundingFactory/utils";
import { Web3Form } from "../Web3Form";

/**
 * @class
 * @classdesc - component for coordinatorQuit method
 **/
export const CoordinatorQuitForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<TransactionReceipt | null>(null);
  const { handleSubmit } = useForm();
  const { validator, handleCoordinatorQuit, getReceipt, error } = useCoordinatorQuit(
    "0x0dA71825182944234F45755989a8C96Ac1343E07"
  );
  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");

      setTxLoading(true);

      if (validator.checkArgs == null || handleCoordinatorQuit.send == null || getReceipt.waitTwoBlocks == null)
        throw error ? error : handleCoordinatorQuit.error;

      const ok = await validator.checkArgs();
      if (!ok) throw Error("Failed smartcontract requirements");

      const tx = await handleCoordinatorQuit.send();
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
    <Web3Form.Form pt="6" pb="5" onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title mb="21px">CoordinatorQuit</Web3Form.Title>
      <Web3Form.Detail mb="32px">This function is used for the coordinator to quit.</Web3Form.Detail>
      <Web3Form.Submit loading={txLoading}>Coordinator Rage Quit</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default CoordinatorQuitForm;
