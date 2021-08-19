import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSetMaxRecipients } from "../../hooks/KlerosGTCRAdapter/";
import { TransactionReceipt } from "../../hooks/KlerosGTCRAdapter/utils";
import { Web3Form } from "../Web3Form";
import { useLocation } from "react-router-dom";
/**
 * @class
 * @classdesc - component for setMaxRecipients method
 **/
export const SetMaxRecipientsForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<null | TransactionReceipt>(null);
  const { register, handleSubmit, errors } = useForm();
  const [contractAddress, setContractAddress] = useState<string>("0x0dA71825182944234F45755989a8C96Ac1343E07");

  let { search: params } = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(params);
    const contractAddress = query.get("contract");
    setContractAddress(contractAddress ? contractAddress : "0x0dA71825182944234F45755989a8C96Ac1343E07");
  }, [params]);

  const { validator, handleSetMaxRecipients, getReceipt, error } = useSetMaxRecipients(contractAddress);

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");

      setTxLoading(true);
      if (validator.checkArgs == null || handleSetMaxRecipients.send == null || getReceipt.waitTwoBlocks == null)
        throw error ? error : handleSetMaxRecipients.error;

      const ok = await validator.checkArgs(data._maxRecipients);
      if (!ok) throw Error("Failed smartcontract requirements");

      const tx = await handleSetMaxRecipients.send(data._maxRecipients);
      setTxLink("https://blockscout.com/xdai/mainnet/tx/" + tx.hash);

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
    <Web3Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title>SetMaxRecipients</Web3Form.Title>
      <Web3Form.Heading detail="These changes will take effect on the next voting round. Voting rounds that have already started or been deployed will not be affected.">
        Set SetMaxRecipients
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>

      <Web3Form.Input
        name="_maxRecipients"
        label="_maxRecipients"
        placeholder="Uint256"
        ref={register(Web3Form.registerUint256)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>SetMaxRecipients</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default SetMaxRecipientsForm;
