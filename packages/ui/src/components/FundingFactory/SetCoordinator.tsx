import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useSetCoordinator } from "@clrfund/factory-hooks";
import { Web3Form } from "../Web3Form";

/**
 * @class
 * @classdesc - component for setCoordinator method
 **/
export const SetCoordinatorForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<boolean | string>(false);
  const { handleSubmit, errors, register } = useForm();
  // const { validator, handleSetCoordinator, getReceipt, error } = useSetCoordinator(
  //   "0x99C85bb64564D9eF9A99621301f22C9993Cb89E3"
  // );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");
      setTxReceipt("");
      setTxLoading(true);

      // if (validator == null || handleSetCoordinator == null) throw error;

      // const ok = await validator(data._coordinator, data._coordinatorPubKey);
      // if (!ok) throw Error("Failed smartcontract requirements");

      // const [tx, handleSetCoordinatorError] = await handleSetCoordinator(data._coordinator, data._coordinatorPubKey);
      // if (handleSetCoordinatorError) throw Error(handleSetCoordinatorError);
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
      <Web3Form.Title mb="21px">SetCoordinator</Web3Form.Title>
      <Web3Form.Detail mb="32px">This function is used to set the coordinator</Web3Form.Detail>
      <Web3Form.Input
        name="_coordinator"
        label="_coordinator"
        placeholder="address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Input
        name="_coordinatorPubKey"
        label="_coordinatorPubKey"
        placeholder="string"
        ref={register(Web3Form.registerString)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading} />
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default SetCoordinatorForm;