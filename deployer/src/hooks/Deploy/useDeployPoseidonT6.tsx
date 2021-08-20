import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { PoseidonT6__factory as  _PoseidonT6Factory } from "../../typechain/factories/PoseidonT6__factory";

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory AddFundingSource transactions
 * - Example Response [handleAddFundingSource, validator, getReceipt, error]
 *
 *  @returns handleAddFundingSource(_source:address,)
 *  @returns validator(_source:address,)
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
export function useDeployPoseidonT6() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployPoseidonT6 = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const PoseidonT6Factory = new _PoseidonT6Factory(signer);

    try {
      if (PoseidonT6Factory == null) throw Error("failed to get PoseidonT6Factory");

      const deployContract = async () => {
        // const { data: PoseidonT6Contract, error: deployError } = await handle();
        const PoseidonT6Contract = await PoseidonT6Factory.deploy();
        console.log(PoseidonT6Contract);
        if (PoseidonT6Contract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return PoseidonT6Contract;
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
      !library || !account || !chainId || !handleDeployPoseidonT6 || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployPoseidonT6,
      error,
    };
  }, [library, account, chainId, handleDeployPoseidonT6, validator]);
}

export default useDeployPoseidonT6;
