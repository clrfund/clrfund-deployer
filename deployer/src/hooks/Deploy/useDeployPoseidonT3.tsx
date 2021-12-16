import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { PoseidonT3__factory as _PoseidonT3Factory } from "../../typechain/factories/PoseidonT3__factory";

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory AddFundingSource transactions
 * - Example Response [handleAddFundingSource, validator, getReceipt, error]
 *
 *  @returns handleAddFundingSource(_source:address,)
 *  @returns validator(_source:address,)
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
export function useDeployPoseidonT3() {
  const { library, account, chainId, hasMounted } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployPoseidonT3 = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const PoseidonT3Factory = new _PoseidonT3Factory(signer);

    try {
      if (PoseidonT3Factory == null) throw Error("failed to get PoseidonT3Factory");

      const deployContract = async () => {
        // const { data: PoseidonT3Contract, error: deployError } = await handle();
        const PoseidonT3Contract = await PoseidonT3Factory.deploy();
      
        if (PoseidonT3Contract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return PoseidonT3Contract;
      };
      return { deploy: deployContract, error: null };
    } catch (error) {
      return { deploy: null, error };
    }
  }, [library, account, chainId, hasMounted]);

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
      !library || !account || !chainId || !handleDeployPoseidonT3 || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployPoseidonT3,
      error,
    };
  }, [library, account, chainId, handleDeployPoseidonT3, validator]);
}

export default useDeployPoseidonT3;
