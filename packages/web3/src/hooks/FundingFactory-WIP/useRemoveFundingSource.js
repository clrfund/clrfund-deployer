import { useMemo } from "react";
import { getContract, handle } from "./contract";
import { useWeb3Context } from "../context/web3Provider";
import { FundingFactoryABI } from "../abi/FundingFactory.abi.js";

/**
 * @description ### Returns FundingFactory contract using Ethers.js & UncheckedJsonRpcSigner
 * - Example response ethers.Contract
 *
 * @param {string} contractAddress
 * @param {number} chainId
 * @returns {Object} ethers.Contract
 */
function getFundingFactoryContract(contractAddress, library, account) {
  const [contract, err] = getContract(contractAddress, FundingFactoryABI, library, account);
  return err ? [null, err] : [contract, null];
}

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory RemoveFundingSource transactions
 * - Example Response [handleRemoveFundingSource, validator, getReceipt, error]
 *
 *  @returns handleRemoveFundingSource(_source,)
 *  @returns validator(_source,) 
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
function useRemoveFundingSource(contractAddress = "") {
  const { library, account, chainId } = useWeb3Context();

  const handleRemoveFundingSource = useMemo(() => {
    if (!library || !account || !chainId) {
      return null;
    }
    const [FundingFactoryContract, err] = getFundingFactoryContract(contractAddress, library, account);
    const sendTransaction = async (_source,) => {
      //NOTE: Get the estimated gas price for this transaction
      const estimatedGas = await FundingFactoryContract.estimateGas.removeFundingSource(_source,).catch(() => {
        return FundingFactoryContract.estimateGas.removeFundingSource(_source,);
      });
      //NOTE: tx object properties will be null except for tx.hash because we use UncheckedJsonRpcSigner
      return await handle(FundingFactoryContract.removeFundingSource(_source, { gasLimit: estimatedGas }));
    };
    return sendTransaction;
  }, [library, account, chainId]);

  //NOTE: Blackbox argument validation, dont recalc unless library changes
  const validator = useMemo(() => {
    if (!library || !account || !chainId) {
      return null;
    }
    // TODO: Actual smart contract validations for arguments
    // const [FundingFactoryContract, err] = getFundingFactoryContract(contractAddress, library, account);
    const validator = async (_source,) => {
      return true;
    };
    return validator;
  }, [library, account, chainId]);

  //NOTE: Blackbox fetching tx receipt, dont recalc unless library changes
  const getReceipt = useMemo(() => {
    if (!library || !account || !chainId) {
      return null;
    }
    const waitTwoBlocks = async (hash) => {
      return await handle(library.waitForTransaction(hash, 2));
    };
    return waitTwoBlocks;
  }, [library, account, chainId]);
  
  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleRemoveFundingSource || !validator || !getReceipt
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleRemoveFundingSource,
      getReceipt,
      error,
    };
  }, [library, account, chainId]);
  
}

export default useRemoveFundingSource;