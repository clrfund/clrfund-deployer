import { useMemo } from "react";
import { getOptimisticRecipientRegistryContract, handle, TransactionReceiptOrError } from "./utils";
import { useWeb3Context } from "../Web3Provider";

/**
 * @description ### Returns  validator,handler, getReceipt, and error hooks for OptimisticRecipientRegistry SetChallengePeriodDuration transactions
 * - Example Response
 * {
      validator: {
        checkArgs: (_challengePeriodDuration:uint256,) => Promise<boolean>;
        error: null;
      }
      handleAddFundingSource: {
        send: (_challengePeriodDuration:uint256,) => Promise<...>;
        error: null;
      }
      getReceipt: {
        waitTwoBlocks: () => Promise<...>;
        error: null;
      }
      error: Error | null;
 *   }
 */
function useSetChallengePeriodDuration(contractAddress: string) {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleSetChallengePeriodDuration = useMemo(() => {
    if (!library || !account || !chainId) {
      return { send: null, error: Error("failed to get web3 context") };
    }
    const { contract: OptimisticRecipientRegistryContract, error } = getOptimisticRecipientRegistryContract(
      contractAddress,
      library,
      account
    );

    try {
      if (error || OptimisticRecipientRegistryContract == null)
        throw Error("failed to get OptimisticRecipientRegistry Contract at " + contractAddress);

      const sendTransaction = async (_challengePeriodDuration: string) => {
        //NOTE: Get the estimated gas price for this transaction
        const { data: estimatedGas, error: gasEstimateError } = await handle(
          OptimisticRecipientRegistryContract.estimateGas.setChallengePeriodDuration(_challengePeriodDuration)
        );
        if (gasEstimateError != null || estimatedGas == null) {
          switch (gasEstimateError?.message) {
            case "Internal JSON-RPC error.":
              throw Error(gasEstimateError.data.message);
            default:
              switch (gasEstimateError?.code) {
                case "INVALID_ARGUMENT":
                  throw Error(gasEstimateError.argument + ":" + gasEstimateError.reason);
                default:
                  throw Error("Transaction will fail check method args.");
              }
          }
        }

        //NOTE: tx object properties will be null except for tx.hash because we use UncheckedJsonRpcSigner
        const { data: txObject, error: sendError } = await handle(
          OptimisticRecipientRegistryContract.setChallengePeriodDuration(_challengePeriodDuration, {
            gasLimit: estimatedGas,
          })
        );
        if (sendError != null || txObject == null) {
          console.log(sendError);
          throw Error("Failed sending transaction. ");
        }
        return txObject;
      };
      return { send: sendTransaction, error: null };
    } catch (error) {
      return { send: null, error };
    }
  }, [library, account, chainId, contractAddress]);

  //NOTE: Blackbox argument validation, dont recalc unless library changes
  const validator = useMemo(() => {
    if (!library || !account || !chainId) {
      return { checkArgs: null, error: Error("failed to get web3 context") };
    }
    // TODO: Actual smart contract validations for arguments
    const checkArgs = async (_challengePeriodDuration: string) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Blackbox fetching tx receipt, dont recalc unless library changes
  const getReceipt = useMemo(() => {
    if (!library || !account || !chainId) {
      return { waitTwoBlocks: null, error: Error("failed to get web3 context") };
    }
    const waitTwoBlocks: TransactionReceiptOrError = async (hash: string) => {
      const { data: receipt, error } = await handle(library.waitForTransaction(hash, 1));
      if (error != null) {
        return { receipt: null, error };
      }
      return { receipt, error };
    };
    return { waitTwoBlocks: waitTwoBlocks, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleSetChallengePeriodDuration || !validator || !getReceipt
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleSetChallengePeriodDuration,
      getReceipt,
      error,
    };
  }, [library, account, chainId, getReceipt, handleSetChallengePeriodDuration, validator]);
}

export default useSetChallengePeriodDuration;
