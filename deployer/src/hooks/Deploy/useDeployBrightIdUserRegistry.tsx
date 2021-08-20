import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { BrightIdUserRegistry__factory as _BrightIdUserRegistryFactory} from "../../typechain/factories/BrightIdUserRegistry__factory";

export function useDeployBrightIdUserRegistry(){
  const { library, account, chainId } = useWeb3Context();

   //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployBrightIdUserRegistry = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const BrightIdUserRegistryFactory = new _BrightIdUserRegistryFactory(signer);

    try {
      if (BrightIdUserRegistryFactory == null) throw Error("failed to get BrightIdUserRegistryFactory");

      const deployContract = async (_context: string,_verifier: string,) => {
        const BrightIdUserRegistryContract = await BrightIdUserRegistryFactory.deploy(_context,_verifier,);
        console.log(BrightIdUserRegistryContract);
        if (BrightIdUserRegistryContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return BrightIdUserRegistryContract;
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
    const checkArgs = async (_context:string,_verifier:string,) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeployBrightIdUserRegistry || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployBrightIdUserRegistry,
      error,
    };
  }, [library, account, chainId,handleDeployBrightIdUserRegistry,validator]);

}

export default useDeployBrightIdUserRegistry;