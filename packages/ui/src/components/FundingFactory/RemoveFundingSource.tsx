import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useRemoveFundingSource } from "@clrfund/factory-hooks";
import { Web3Form } from "../Web3Form";

/**
 * @class
 * @classdesc - component for removeFundingSource method
 **/
export const RemoveFundingSourceForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<boolean | string>(false);
  const { handleSubmit, errors, register } = useForm();
  // const { validator, handleRemoveFundingSource, getReceipt, error } = useRemoveFundingSource(
  //   "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  // );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);

      // if (validator == null || handleRemoveFundingSource == null) throw error;

      // const ok = await validator(data._source);
      // if (!ok) throw Error("Failed smartcontract requirements");

      // const [tx, handleRemoveFundingSourceError] = await handleRemoveFundingSource(data._source);
      // if (handleRemoveFundingSourceError) throw Error(handleRemoveFundingSourceError);
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
      <Web3Form.Title mb="21px">RemoveFundingSource</Web3Form.Title>
      <Web3Form.Detail mb="32px">This function is used to remove a funding source</Web3Form.Detail>
      <Web3Form.Input
        name="_source"
        label="_source"
        placeholder="address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading} />
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default RemoveFundingSourceForm;
