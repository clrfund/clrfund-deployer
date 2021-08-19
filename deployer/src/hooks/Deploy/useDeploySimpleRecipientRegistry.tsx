import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { SimpleRecipientRegistry__factory as _SimpleRecipientRegistryFactory } from "../../typechain/factories/SimpleRecipientRegistry__factory";

export function useDeploySimpleRecipientRegistry() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeploySimpleRecipientRegistry = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const SimpleRecipientRegistryFactory = new _SimpleRecipientRegistryFactory(signer);

    try {
      if (SimpleRecipientRegistryFactory == null) throw Error("failed to get SimpleRecipientRegistryFactory");

      const deployContract = async (_controller: string) => {
        const SimpleRecipientRegistryContract = await SimpleRecipientRegistryFactory.deploy(_controller);
        console.log(SimpleRecipientRegistryContract);
        if (SimpleRecipientRegistryContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return SimpleRecipientRegistryContract;
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
    const checkArgs = async (_controller: string) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeploySimpleRecipientRegistry || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeploySimpleRecipientRegistry,
      error,
    };
  }, [library, account, chainId, handleDeploySimpleRecipientRegistry, validator]);
}

export default useDeploySimpleRecipientRegistry;
