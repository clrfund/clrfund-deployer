import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { AnyOldERC20Token__factory } from "../../typechain/factories/AnyOldERC20Token__factory";

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory AddFundingSource transactions
 * - Example Response [handleAddFundingSource, validator, getReceipt, error]
 *
 *  @returns handleAddFundingSource(_source:address,)
 *  @returns validator(_source:address,)
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
export function useDeployERC20() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployERC20 = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const erc20Factory = new AnyOldERC20Token__factory(signer);

    try {
      if (erc20Factory == null) throw Error("failed to get ERC20Factory");

      const deployContract = async (_initialSupply: string) => {
        // const { data: erc20Contract, error: deployError } = await handle();
        const erc20Contract = await erc20Factory.deploy(_initialSupply);
        console.log(erc20Contract);
        if (erc20Contract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return erc20Contract;
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
    const checkArgs = async (_initialSupply: string) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeployERC20 || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployERC20,
      error,
    };
  }, [library, account, chainId, handleDeployERC20, validator]);
}

export default useDeployERC20;
