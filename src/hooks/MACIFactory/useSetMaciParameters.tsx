import { useMemo } from "react";
import { getMACIFactoryContract, handle, TransactionReceiptOrError } from "./utils";
import { useWeb3Context } from "../Web3Provider";

/**
 * @description ### Returns  validator,handler, getReceipt, and error hooks for MACIFactory SetMaciParameters transactions
 * - Example Response
 * {
      validator: {
        checkArgs: (_stateTreeDepth:uint8,_messageTreeDepth:uint8,_voteOptionTreeDepth:uint8,_tallyBatchSize:uint8,_messageBatchSize:uint8,_batchUstVerifier:address,_qvtVerifier:address,_signUpDuration:uint256,_votingDuration:uint256,) => Promise<boolean>;
        error: null;
      }
      handleAddFundingSource: {
        send: (_stateTreeDepth:uint8,_messageTreeDepth:uint8,_voteOptionTreeDepth:uint8,_tallyBatchSize:uint8,_messageBatchSize:uint8,_batchUstVerifier:address,_qvtVerifier:address,_signUpDuration:uint256,_votingDuration:uint256,) => Promise<...>;
        error: null;
      }
      getReceipt: {
        waitTwoBlocks: () => Promise<...>;
        error: null;
      }
      error: Error | null;
 *   }
 */
function useSetMaciParameters(contractAddress: string) {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleSetMaciParameters = useMemo(() => {
    if (!library || !account || !chainId) {
      return { send: null, error: Error("failed to get web3 context") };
    }
    const { contract: MACIFactoryContract, error } = getMACIFactoryContract(contractAddress, library, account);

    try {
      if (error || MACIFactoryContract == null) throw Error("failed to get MACIFactory Contract at " + contractAddress);

      const sendTransaction = async (
        _stateTreeDepth: string,
        _messageTreeDepth: string,
        _voteOptionTreeDepth: string,
        _tallyBatchSize: string,
        _messageBatchSize: string,
        _batchUstVerifier: string,
        _qvtVerifier: string,
        _signUpDuration: string,
        _votingDuration: string
      ) => {
        //NOTE: Get the estimated gas price for this transaction
        const { data: estimatedGas, error: gasEstimateError } = await handle(
          MACIFactoryContract.estimateGas.setMaciParameters(
            _stateTreeDepth,
            _messageTreeDepth,
            _voteOptionTreeDepth,
            _tallyBatchSize,
            _messageBatchSize,
            _batchUstVerifier,
            _qvtVerifier,
            _signUpDuration,
            _votingDuration
          )
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
          MACIFactoryContract.setMaciParameters(
            _stateTreeDepth,
            _messageTreeDepth,
            _voteOptionTreeDepth,
            _tallyBatchSize,
            _messageBatchSize,
            _batchUstVerifier,
            _qvtVerifier,
            _signUpDuration,
            _votingDuration,
            { gasLimit: estimatedGas }
          )
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
    const checkArgs = async (
      _stateTreeDepth: string,
      _messageTreeDepth: string,
      _voteOptionTreeDepth: string,
      _tallyBatchSize: string,
      _messageBatchSize: string,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: string,
      _votingDuration: string
    ) => {
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
      !library || !account || !chainId || !handleSetMaciParameters || !validator || !getReceipt
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleSetMaciParameters,
      getReceipt,
      error,
    };
  }, [library, account, chainId, getReceipt, handleSetMaciParameters, validator]);
}

export default useSetMaciParameters;
