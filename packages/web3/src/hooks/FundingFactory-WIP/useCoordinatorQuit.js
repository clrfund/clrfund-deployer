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
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory CoordinatorQuit transactions
 * - Example Response [handleCoordinatorQuit, validator, getReceipt, error]
 *
 *  @returns handleCoordinatorQuit()
 *  @returns validator() 
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
function useCoordinatorQuit(contractAddress = "") {
  const { library, account, chainId } = useWeb3Context();

  const handleCoordinatorQuit = useMemo(() => {
    if (!library || !account || !chainId) {
      return null;
    }
    const [FundingFactoryContract, err] = getFundingFactoryContract(contractAddress, library, account);
    const sendTransaction = async () => {
      //NOTE: Get the estimated gas price for this transaction
      const estimatedGas = await FundingFactoryContract.estimateGas.coordinatorQuit().catch(() => {
        return FundingFactoryContract.estimateGas.coordinatorQuit();
      });
      //NOTE: tx object properties will be null except for tx.hash because we use UncheckedJsonRpcSigner
      return await handle(FundingFactoryContract.coordinatorQuit( { gasLimit: estimatedGas }));
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
    const validator = async () => {
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
      !library || !account || !chainId || !handleCoordinatorQuit || !validator || !getReceipt
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleCoordinatorQuit,
      getReceipt,
      error,
    };
  }, [library, account, chainId]);
  
}

export default useCoordinatorQuit;