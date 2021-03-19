import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useSetUserRegistry } from "@clrfund/factory-hooks";
import { Web3Form } from "../Web3Form";

/**
 * @class
 * @classdesc - component for setUserRegistry method
 **/
export const SetUserRegistryForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<boolean | string>(false);
  const { handleSubmit, errors, register } = useForm();
  // const { validator, handleSetUserRegistry, getReceipt, error } = useSetUserRegistry(
  //   "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  // );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);

      // if (validator == null || handleSetUserRegistry == null) throw error;

      // const ok = await validator(data._userRegistry);
      // if (!ok) throw Error("Failed smartcontract requirements");

      // const [tx, handleSetUserRegistryError] = await handleSetUserRegistry(data._userRegistry);
      // if (handleSetUserRegistryError) throw Error(handleSetUserRegistryError);
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
      <Web3Form.Title mb="21px">SetUserRegistry</Web3Form.Title>
      <Web3Form.Detail mb="32px">This function is used to set the User Registry</Web3Form.Detail>
      <Web3Form.Input
        name="_userRegistry"
        label="_userRegistry"
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

export default SetUserRegistryForm;
