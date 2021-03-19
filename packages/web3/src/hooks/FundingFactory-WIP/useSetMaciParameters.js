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
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory SetMaciParameters transactions
 * - Example Response [handleSetMaciParameters, validator, getReceipt, error]
 *
 *  @returns handleSetMaciParameters(_stateTreeDepth,_messageTreeDepth,_voteOptionTreeDepth,_tallyBatchSize,_messageBatchSize,_batchUstVerifier,_qvtVerifier,_signUpDuration,_votingDuration,)
 *  @returns validator(_stateTreeDepth,_messageTreeDepth,_voteOptionTreeDepth,_tallyBatchSize,_messageBatchSize,_batchUstVerifier,_qvtVerifier,_signUpDuration,_votingDuration,) 
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
function useSetMaciParameters(contractAddress = "") {
  const { library, account, chainId } = useWeb3Context();

  const handleSetMaciParameters = useMemo(() => {
    if (!library || !account || !chainId) {
      return null;
    }
    const [FundingFactoryContract, err] = getFundingFactoryContract(contractAddress, library, account);
    const sendTransaction = async (_stateTreeDepth,_messageTreeDepth,_voteOptionTreeDepth,_tallyBatchSize,_messageBatchSize,_batchUstVerifier,_qvtVerifier,_signUpDuration,_votingDuration,) => {
      //NOTE: Get the estimated gas price for this transaction
      const estimatedGas = await FundingFactoryContract.estimateGas.setMaciParameters(_stateTreeDepth,_messageTreeDepth,_voteOptionTreeDepth,_tallyBatchSize,_messageBatchSize,_batchUstVerifier,_qvtVerifier,_signUpDuration,_votingDuration,).catch(() => {
        return FundingFactoryContract.estimateGas.setMaciParameters(_stateTreeDepth,_messageTreeDepth,_voteOptionTreeDepth,_tallyBatchSize,_messageBatchSize,_batchUstVerifier,_qvtVerifier,_signUpDuration,_votingDuration,);
      });
      //NOTE: tx object properties will be null except for tx.hash because we use UncheckedJsonRpcSigner
      return await handle(FundingFactoryContract.setMaciParameters(_stateTreeDepth,_messageTreeDepth,_voteOptionTreeDepth,_tallyBatchSize,_messageBatchSize,_batchUstVerifier,_qvtVerifier,_signUpDuration,_votingDuration, { gasLimit: estimatedGas }));
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
    const validator = async (_stateTreeDepth,_messageTreeDepth,_voteOptionTreeDepth,_tallyBatchSize,_messageBatchSize,_batchUstVerifier,_qvtVerifier,_signUpDuration,_votingDuration,) => {
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
      !library || !account || !chainId || !handleSetMaciParameters || !validator || !getReceipt
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleSetMaciParameters,
      getReceipt,
      error,
    };
  }, [library, account, chainId]);
  
}

export default useSetMaciParameters;