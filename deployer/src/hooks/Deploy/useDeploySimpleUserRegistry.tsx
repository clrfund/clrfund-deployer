import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { SimpleUserRegistry__factory as _SimpleUserRegistryFactory } from "../../typechain/factories/SimpleUserRegistry__factory";

export function useDeploySimpleUserRegistry() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeploySimpleUserRegistry = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const SimpleUserRegistryFactory = new _SimpleUserRegistryFactory(signer);

    try {
      if (SimpleUserRegistryFactory == null) throw Error("failed to get SimpleUserRegistryFactory");

      const deployContract = async () => {
        const SimpleUserRegistryContract = await SimpleUserRegistryFactory.deploy();
        console.log(SimpleUserRegistryContract);
        if (SimpleUserRegistryContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return SimpleUserRegistryContract;
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
    const checkArgs = async () => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeploySimpleUserRegistry || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeploySimpleUserRegistry,
      error,
    };
  }, [library, account, chainId, handleDeploySimpleUserRegistry, validator]);
}

export default useDeploySimpleUserRegistry;
