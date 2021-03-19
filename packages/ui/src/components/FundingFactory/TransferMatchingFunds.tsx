import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useTransferMatchingFunds } from "@clrfund/factory-hooks";
import { Web3Form } from "../Web3Form";

/**
 * @class
 * @classdesc - component for transferMatchingFunds method
 **/

export const TransferMatchingFundsForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<boolean | string>(false);
  const { handleSubmit, errors, register } = useForm();
  // const { validator, handleTransferMatchingFunds, getReceipt, error } = useTransferMatchingFunds(
  //   "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  // );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);
      // if (validator == null || handleTransferMatchingFunds == null) throw error;

      // const ok = await validator(data._totalSpent, data._totalSpentSalt);
      // if (!ok) throw Error("Failed smartcontract requirements");

      // const [tx, handleTransferMatchingFundsError] = await handleTransferMatchingFunds(
      //   data._totalSpent,
      //   data._totalSpentSalt
      // );
      // if (handleTransferMatchingFundsError) throw Error(handleTransferMatchingFundsError);
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
      <Web3Form.Title mb="21px">TransferMatchingFunds</Web3Form.Title>
      <Web3Form.Detail mb="32px">This function is used to transfer matching funds</Web3Form.Detail>
      <Web3Form.Input
        name="_totalSpent"
        label="_totalSpent"
        placeholder="uint256"
        ref={register(Web3Form.registerUint256)}
        errors={errors}
      />
      <Web3Form.Input
        name="_totalSpentSalt"
        label="_totalSpentSalt"
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

export default TransferMatchingFundsForm;
