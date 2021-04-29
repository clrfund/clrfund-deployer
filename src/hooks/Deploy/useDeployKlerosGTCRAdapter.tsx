import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { KlerosGTCRAdapter__factory } from "../../typechain/factories/KlerosGTCRAdapter__factory";

export function useDeployKlerosGTCRAdapter() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployKlerosGTCRAdapter = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const KlerosGTCRAdapterFactory = new KlerosGTCRAdapter__factory(signer);

    try {
      if (KlerosGTCRAdapterFactory == null) throw Error("failed to get KlerosGTCRAdapterFactory");

      const deployContract = async (_tcr: string, _controller: string) => {
        const KlerosGTCRAdapterContract = await KlerosGTCRAdapterFactory.deploy(_tcr, _controller);
        console.log(KlerosGTCRAdapterContract);
        if (KlerosGTCRAdapterContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return KlerosGTCRAdapterContract;
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
    const checkArgs = async (_tcr: string, _controller: string) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeployKlerosGTCRAdapter || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployKlerosGTCRAdapter,
      error,
    };
  }, [library, account, chainId, handleDeployKlerosGTCRAdapter, validator]);
}

export default useDeployKlerosGTCRAdapter;
