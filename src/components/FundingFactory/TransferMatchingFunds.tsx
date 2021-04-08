import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTransferMatchingFunds } from "../../hooks/FundingFactory";
import { TransactionReceipt } from "../../hooks/FundingFactory/utils";
import { Web3Form } from "../Web3Form";

/**
 * @class
 * @classdesc - component for transferMatchingFunds method
 **/

export const TransferMatchingFundsForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<null | TransactionReceipt>(null);
  const { handleSubmit, errors, register } = useForm();
  const { validator, handleTransferMatchingFunds, getReceipt, error } = useTransferMatchingFunds(
    "0x7a2088a1bfc9d81c55368ae168c2c02570cb814f"
  );

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");

      setTxLoading(true);
      if (validator.checkArgs == null || handleTransferMatchingFunds.send == null || getReceipt.waitTwoBlocks == null)
        throw error ? error : handleTransferMatchingFunds.error;

      const ok = await validator.checkArgs(data._totalSpent, data._totalSpentSalt);
      if (!ok) throw Error("Failed smartcontract requirements");

      const tx = await handleTransferMatchingFunds.send(data._totalSpent, data._totalSpentSalt);
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
    <Web3Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title>Transfer Matching Funds</Web3Form.Title>

      <Web3Form.Heading detail="These changes will take effect immediately. Proceed with caution.">
        This function is used to transfer matching funds
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>

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
      <Web3Form.Submit loading={txLoading}>Transfer Matching Funds</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default TransferMatchingFundsForm;
