import { useMemo } from "react";
import { getSimpleUserRegistryContract, handle, TransactionReceiptOrError } from "./utils";
import { useWeb3Context } from "../Web3Provider";

/**
 * @description ### Returns  validator,handler, getReceipt, and error hooks for SimpleUserRegistry RenounceOwnership transactions
 * - Example Response
 * {
      validator: {
        checkArgs: () => Promise<boolean>;
        error: null;
      }
      handleAddFundingSource: {
        send: () => Promise<...>;
        error: null;
      }
      getReceipt: {
        waitTwoBlocks: () => Promise<...>;
        error: null;
      }
      error: Error | null;
 *   }
 */
function useRenounceOwnership(contractAddress: string) {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleRenounceOwnership = useMemo(() => {
    if (!library || !account || !chainId) {
      return { send: null, error: Error("failed to get web3 context") };
    }
    const { contract: SimpleUserRegistryContract, error } = getSimpleUserRegistryContract(
      contractAddress,
      library,
      account
    );

    try {
      if (error || SimpleUserRegistryContract == null)
        throw Error("failed to get SimpleUserRegistry Contract at " + contractAddress);

      const sendTransaction = async () => {
        //NOTE: Get the estimated gas price for this transaction
        const { data: estimatedGas, error: gasEstimateError } = await handle(
          SimpleUserRegistryContract.estimateGas.renounceOwnership()
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
          SimpleUserRegistryContract.renounceOwnership({ gasLimit: estimatedGas })
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
    const checkArgs = async () => {
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
      !library || !account || !chainId || !handleRenounceOwnership || !validator || !getReceipt
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleRenounceOwnership,
      getReceipt,
      error,
    };
  }, [library, account, chainId, getReceipt, handleRenounceOwnership, validator]);
}

export default useRenounceOwnership;
