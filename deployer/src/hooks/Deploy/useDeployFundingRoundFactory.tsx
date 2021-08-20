import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { FundingRoundFactory__factory as _FundingRoundFactoryFactory} from "../../typechain/factories/FundingRoundFactory__factory";

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory AddFundingSource transactions
 * - Example Response [handleAddFundingSource, validator, getReceipt, error]
 *
 *  @returns handleAddFundingSource(_source:address,)
 *  @returns validator(_source:address,)
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
export function useDeployFundingRoundFactory() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployFundingRoundFactory = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.
    const signer = library.getSigner(account);

    const FundingRoundFactoryFactory = new _FundingRoundFactoryFactory(signer);

    try {
      if (FundingRoundFactoryFactory == null) throw Error("failed to get FundingRoundFactoryFactory");

      const deployContract = async (_maciFactory: string) => {
        // const { data: FundingRoundFactoryContract, error: deployError } = await handle();
        const FundingRoundFactoryContract = await FundingRoundFactoryFactory.deploy(_maciFactory);
        console.log(FundingRoundFactoryContract);
        if (FundingRoundFactoryContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return FundingRoundFactoryContract;
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
    const checkArgs = async (_maciFactory: string) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeployFundingRoundFactory || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployFundingRoundFactory,
      error,
    };
  }, [library, account, chainId, handleDeployFundingRoundFactory, validator]);
}

export default useDeployFundingRoundFactory;
