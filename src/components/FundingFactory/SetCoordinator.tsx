import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetCoordinator } from "../../hooks/FundingFactory";
import { TransactionReceipt } from "../../hooks/FundingFactory/utils";
import { Web3Form } from "../Web3Form";

/**
 * @class
 * @classdesc - component for setCoordinator method
 **/
export const SetCoordinatorForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<null | TransactionReceipt>(null);
  const { handleSubmit, errors, register } = useForm();
  const { validator, handleSetCoordinator, getReceipt, error } = useSetCoordinator(
    "0x0dA71825182944234F45755989a8C96Ac1343E07"
  );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");

      setTxLoading(true);

      if (validator.checkArgs == null || handleSetCoordinator.send == null || getReceipt.waitTwoBlocks == null)
        throw error ? error : handleSetCoordinator.error;

      const ok = await validator.checkArgs(data._coordinator, data._coordinatorPubKey);
      if (!ok) throw Error("Failed smartcontract requirements");

      const tx = await handleSetCoordinator.send(data._coordinator, data._coordinatorPubKey);
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
      <Web3Form.Submit loading={txLoading}>Set Coordinator</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default SetCoordinatorForm;
