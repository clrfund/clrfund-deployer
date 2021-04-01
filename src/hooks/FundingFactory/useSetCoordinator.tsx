import { useMemo } from "react";
import { getFundingFactoryContract, handle, TransactionReceiptOrError } from "./utils";
import { useWeb3Context } from "../Web3Provider";

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory SetCoordinator transactions
 * - Example Response [handleSetCoordinator, validator, getReceipt, error]
 *
 *  @returns handleSetCoordinator(_coordinator:address,_coordinatorPubKey:string,)
 *  @returns validator(_coordinator:address,_coordinatorPubKey:string,)
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
function useSetCoordinator(contractAddress: string) {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleSetCoordinator = useMemo(() => {
    if (!library || !account || !chainId) {
      return { send: null, error: Error("failed to get web3 context") };
    }
    const { contract: FundingFactoryContract, error } = getFundingFactoryContract(contractAddress, library, account);

    try {
      if (error || FundingFactoryContract == null)
        throw Error("failed to get FundingFactory Contract at " + contractAddress);

      const sendTransaction = async (_coordinator: string, _coordinatorPubKey: string) => {
        //NOTE: Get the estimated gas price for this transaction
        const { data: estimatedGas, error: gasEstimateError } = await handle(
          FundingFactoryContract.estimateGas.setCoordinator(_coordinator, _coordinatorPubKey)
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
          FundingFactoryContract.setCoordinator(_coordinator, _coordinatorPubKey, { gasLimit: estimatedGas })
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
    const checkArgs = async (_coordinator: string, _coordinatorPubKey: string) => {
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
      !library || !account || !chainId || !handleSetCoordinator || !validator || !getReceipt
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleSetCoordinator,
      getReceipt,
      error,
    };
  }, [library, account, chainId, getReceipt, handleSetCoordinator, validator]);
}

export default useSetCoordinator;
