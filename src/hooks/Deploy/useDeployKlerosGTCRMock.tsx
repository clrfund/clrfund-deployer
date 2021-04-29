import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { KlerosGTCRMock__factory } from "../../typechain/factories/KlerosGTCRMock__factory";

export function useDeployKlerosGTCRMock() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployKlerosGTCRMock = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const KlerosGTCRMockFactory = new KlerosGTCRMock__factory(signer);

    try {
      if (KlerosGTCRMockFactory == null) throw Error("failed to get KlerosGTCRMockFactory");

      const deployContract = async (_registrationMetaEvidence: string, _clearingMetaEvidence: string) => {
        const KlerosGTCRMockContract = await KlerosGTCRMockFactory.deploy(
          _registrationMetaEvidence,
          _clearingMetaEvidence
        );
        console.log(KlerosGTCRMockContract);
        if (KlerosGTCRMockContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return KlerosGTCRMockContract;
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
    const checkArgs = async (_registrationMetaEvidence: string, _clearingMetaEvidence: string) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeployKlerosGTCRMock || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployKlerosGTCRMock,
      error,
    };
  }, [library, account, chainId, handleDeployKlerosGTCRMock, validator]);
}

export default useDeployKlerosGTCRMock;
