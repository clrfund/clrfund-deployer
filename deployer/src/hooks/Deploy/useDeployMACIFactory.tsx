import { useMemo } from "react";
import { useWeb3Context } from "../Web3Provider";
import { MACIFactoryLibraryAddresses, MACIFactory__factory as _MaciFactoryFactory } from "../../typechain/factories/MACIFactory__factory";

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory AddFundingSource transactions
 * - Example Response [handleAddFundingSource, validator, getReceipt, error]
 *
 *  @returns handleAddFundingSource(_source:address,)
 *  @returns validator(_source:address,)
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
export function useDeployMACIFactory() {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleDeployMACIFactory = useMemo(() => {
    if (!library || !account || !chainId) {
      return { deploy: null, error: Error("failed to get web3 context") };
    }
    //You cannot pass an an UncheckedSigner into a ContractFactory.
    //If you need to use an UncheckedSigner (which does not populate the from or nonce), the factory cannot compute the contract address.

    try {
      const deployContract = async (
        poseidonT3Address: string,
        poseidonT6Address: string,
        _stateTreeDepth: string,
        _messageTreeDepth: string,
        _voteOptionTreeDepth: string,
        _tallyBatchSize: string,
        _messageBatchSize: string,
        _batchUstVerifier: string,
        _qvtVerifier: string,
        _signUpDuration: string,
        _votingDuration: string
      ) => {
        const signer = library.getSigner(account);
    
        const maciLibraries:MACIFactoryLibraryAddresses = {
          ["maci-contracts/sol/Poseidon.sol:PoseidonT3"]: poseidonT3Address,
          ["maci-contracts/sol/Poseidon.sol:PoseidonT6"]: poseidonT6Address,
        };
        const MACIFactoryFactory = new _MaciFactoryFactory(
          {
            ...maciLibraries,
          },
          signer
        );
        if (MACIFactoryFactory == null) throw Error("failed to get MACIFactoryFactory");
        const MACIFactoryContract = await MACIFactoryFactory.deploy(
          _stateTreeDepth,
          _messageTreeDepth,
          _voteOptionTreeDepth,
          _tallyBatchSize,
          _messageBatchSize,
          _batchUstVerifier,
          _qvtVerifier,
          _signUpDuration,
          _votingDuration
        );
        console.log(MACIFactoryContract);
        if (MACIFactoryContract == null) {
          throw Error("Deploy failed unexpectedly.");
        }
        return MACIFactoryContract;
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
    const checkArgs = async (
      poseidonT3Address: string,
      poseidonT6Address: string,
      _stateTreeDepth: string,
      _messageTreeDepth: string,
      _voteOptionTreeDepth: string,
      _tallyBatchSize: string,
      _messageBatchSize: string,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: string,
      _votingDuration: string
    ) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleDeployMACIFactory || !validator
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleDeployMACIFactory,
      error,
    };
  }, [library, account, chainId, handleDeployMACIFactory, validator]);
}

export default useDeployMACIFactory;
