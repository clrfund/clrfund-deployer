import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetToken } from "../../hooks/FundingFactory";
import { TransactionReceipt } from "../../hooks/FundingFactory/utils";
import { Web3Form } from "../Web3Form";

/**
 * @class
 * @classdesc - component for setToken method
 **/
export const SetTokenForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<null | TransactionReceipt>(null);
  const { handleSubmit, errors, register } = useForm();
  const { validator, handleSetToken, getReceipt, error } = useSetToken("0x5fc8d32690cc91d4c39d9d3abcbd16989f875707");

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");

      setTxLoading(true);

      if (validator.checkArgs == null || handleSetToken.send == null || getReceipt.waitTwoBlocks == null)
        throw error ? error : handleSetToken.error;

      const ok = await validator.checkArgs(data._token);
      if (!ok) throw Error("Failed smartcontract requirements");

      const [tx, handleSetTokenError] = await handleSetToken.send(data._token);
      if (handleSetTokenError) throw Error(handleSetTokenError);
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
      <Web3Form.Title mb="21px">SetToken</Web3Form.Title>
      <Web3Form.Detail mb="32px">This function is used to set the token donations are received in</Web3Form.Detail>
      <Web3Form.Input
        name="_token"
        label="_token"
        placeholder="address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>Set Token</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default SetTokenForm;
