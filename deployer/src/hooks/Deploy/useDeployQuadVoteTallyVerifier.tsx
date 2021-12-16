import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { QuadVoteTallyVerifier32__factory } from "../../typechain/factories/QuadVoteTallyVerifier32__factory";

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory AddFundingSource transactions
 * - Example Response [handleAddFundingSource, validator, getReceipt, error]
 *
 *  @returns handleAddFundingSource(_source:address,)
 *  @returns validator(_source:address,)
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
export function useDeployQuadVoteTallyVerifier() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployQuadVoteTallyVerifier = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const QuadVoteTallyVerifierFactory = new QuadVoteTallyVerifier32__factory(signer);

    try {
      if (QuadVoteTallyVerifierFactory == null) throw Error("failed to get QuadVoteTallyVerifierFactory");

      const deployContract = async () => {
        // const { data: QuadVoteTallyVerifierContract, error: deployError } = await handle();
        const QuadVoteTallyVerifierContract = await QuadVoteTallyVerifierFactory.deploy();
        console.log(QuadVoteTallyVerifierContract);
        if (QuadVoteTallyVerifierContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return QuadVoteTallyVerifierContract;
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
      !library || !account || !chainId || !handleDeployQuadVoteTallyVerifier || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployQuadVoteTallyVerifier,
      error,
    };
  }, [library, account, chainId, handleDeployQuadVoteTallyVerifier, validator]);
}

export default useDeployQuadVoteTallyVerifier;
