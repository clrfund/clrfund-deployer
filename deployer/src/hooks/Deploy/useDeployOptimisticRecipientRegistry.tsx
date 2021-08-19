import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { OptimisticRecipientRegistry__factory as _OptimisticRecipientRegistryFactory} from "../../typechain/factories/OptimisticRecipientRegistry__factory";

export function useDeployOptimisticRecipientRegistry() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployOptimisticRecipientRegistry = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const OptimisticRecipientRegistryFactory = new _OptimisticRecipientRegistryFactory(signer);

    try {
      if (OptimisticRecipientRegistryFactory == null) throw Error("failed to get OptimisticRecipientRegistryFactory");

      const deployContract = async (_baseDeposit: string, _challengePeriodDuration: string, _controller: string) => {
        const OptimisticRecipientRegistryContract = await OptimisticRecipientRegistryFactory.deploy(
          _baseDeposit,
          _challengePeriodDuration,
          _controller
        );
        console.log(OptimisticRecipientRegistryContract);
        if (OptimisticRecipientRegistryContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return OptimisticRecipientRegistryContract;
      };
      return { deploy: deployContract, error: null };
    } catch (error) {
      return { send: null, error };
    }
  }, [library, account, chainId]);

  //NOTE: Blackbox argument validation, dont recalc unless library changes
  const validator = useMemo(() => {
    if (!library || !account || !chainId) {
      return { checkArgs: null, error: Error("failed to get web3 context") };
    }
    // TODO: Actual smart contract validations for arguments
    const checkArgs = async (_baseDeposit: string, _challengePeriodDuration: string, _controller: string) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeployOptimisticRecipientRegistry || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployOptimisticRecipientRegistry,
      error,
    };
  }, [library, account, chainId, handleDeployOptimisticRecipientRegistry, validator]);
}

export default useDeployOptimisticRecipientRegistry;
