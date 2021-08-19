import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { BatchUpdateStateTreeVerifier32__factory } from "../../typechain/factories/BatchUpdateStateTreeVerifier32__factory";

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory AddFundingSource transactions
 * - Example Response [handleDeployBatchUpdateStateTreeVerifier, validator, error]
 *
 *  @returns handleDeployBatchUpdateStateTreeVerifier()
 *  @returns validator(_source:address,)
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
export function useDeployBatchUpdateStateTreeVerifier() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox deploying transaction, dont recalc unless library changes
  const handleDeployBatchUpdateStateTreeVerifier = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const BatchUpdateStateTreeVerifierFactory = new BatchUpdateStateTreeVerifier32__factory(signer);

    try {
      if (BatchUpdateStateTreeVerifierFactory == null) throw Error("failed to get BatchUpdateStateTreeVerifierFactory");

      const deployContract = async () => {
        // const { data: BatchUpdateStateTreeVerifierContract, error: deployError } = await handle();
        const BatchUpdateStateTreeVerifierContract = await BatchUpdateStateTreeVerifierFactory.deploy();
        console.log(BatchUpdateStateTreeVerifierContract);
        if (BatchUpdateStateTreeVerifierContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return BatchUpdateStateTreeVerifierContract;
      };
      return { deploy: deployContract, error: null };
    } catch (error) {
      return { deploy: null, error };
    }
  }, [library, account, chainId]);

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

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeployBatchUpdateStateTreeVerifier || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployBatchUpdateStateTreeVerifier,
      error,
    };
  }, [library, account, chainId, handleDeployBatchUpdateStateTreeVerifier, validator]);
}

export default useDeployBatchUpdateStateTreeVerifier;
