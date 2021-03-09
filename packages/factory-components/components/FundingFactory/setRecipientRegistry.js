import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecipientRegistry } from "@clrfund/factory-hooks";
import Form from "@motion-system/web3-form";

/**
 * @class
 * @classdesc - component for setRecipientRegistry method
 **/
export const SetRecipientRegistryForm = (props) => {
  const [txLoading, setTxLoading] = useState(false);
  const [txError, setTxError] = useState(false);
  const [txLink, setTxLink] = useState(false);
  const [txReceipt, setTxReceipt] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const { validator, handleSetRecipientRegistry, getReceipt, error } = useSetRecipientRegistry(
    "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);

      if (validator == null || handleSetRecipientRegistry == null) throw error;

      const ok = await validator(data._recipientRegistry);
      if (!ok) throw Error("Failed smartcontract requirements");

      const [tx, handleSetRecipientRegistryError] = await handleSetRecipientRegistry(data._recipientRegistry);
      if (handleSetRecipientRegistryError) throw Error(handleSetRecipientRegistryError);
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
      <Form.Title mb="21px">SetRecipientRegistry</Form.Title>
      <Form.Detail mb="32px">This function is used to set the Recipient Registry</Form.Detail>
      <Form.Input
        name="_recipientRegistry"
        label="_recipientRegistry"
        placeHolder="address"
        ref={register(Form.registerAddress)}
        errors={errors}
      />
      <Form.Submit loading={txLoading} />
      <Form.Error error={txError} />
      <Form.ExporerLink url={txLink} />
      <Form.Receipt receipt={txReceipt} />
    </Form>
  );
};

export default SetRecipientRegistryForm;
