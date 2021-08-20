import React, { useEffect } from "react";
import { useStateMachine } from "little-state-machine";
import { Box, Text, BoxProps, IconButton, Button, useDisclosure, useToast } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import ReactPlayer from "react-player";
import { PubKey } from "maci-domainobjs";

import { updateState, updateStep, Step } from "../../Dapp";
import useDeployBatchUpdateStateTreeVerifier from "../../hooks/Deploy/useDeployBatchUpdateStateTreeVerifier";
import useDeployFundingRoundFactory from "../../hooks/Deploy/useDeployFundingRoundFactory";
import useDeployMACIFactory from "../../hooks/Deploy/useDeployMACIFactory";
import useDeployPoseidonT3 from "../../hooks/Deploy/useDeployPoseidonT3";
import useDeployPoseidonT6 from "../../hooks/Deploy/useDeployPoseidonT6";
import useDeployQuadVoteTallyVerifier from "../../hooks/Deploy/useDeployQuadVoteTallyVerifier";
import useDeployBrightIdUserRegistry from "../../hooks/Deploy/useDeployBrightIdUserRegistry";
import useDeployOptimisticRecipientRegistry from "../../hooks/Deploy/useDeployOptimisticRecipientRegistry";

import FormComp from "./FormComp";
import Options from "./Options";

import HeroVideo from "../../assets/HeroVideo2.mp4";
import { ethers } from "ethers";

interface IWrapperProps extends BoxProps {
  onBack: () => void;
  title: string;
  caption?: string;
}
const Wrapper = React.forwardRef<HTMLDivElement, IWrapperProps>(
  ({ onBack, title, caption, children, ...rest }, ref) => {
    return (
      <Box ref={ref} ml="40px" pos="relative" mb={6} rounded={10} shadow="md" {...rest}>
        <Text fontSize="3xl">
          <IconButton
            onClick={onBack}
            aria-label="Back"
            fontSize="2xl"
            icon={<ArrowBackIcon />}
            mr={2}
            variant="solid"
            bg="background.600"
          />
          {title}
        </Text>

        {caption && <Text ml={"50px"}>{caption}</Text>}

        <Box mx={"50px"} my={8} display="flex" flexDir="column">
          {children}
        </Box>
      </Box>
    );
  }
);

export const DeployWizard = () => {
  const { actions, state } = useStateMachine({ updateState, updateStep });
  const {
    step,
    PoseidonT3,
    PoseidonT6,
    stateTreeDepth,
    messageTreeDepth,
    voteOptionTreeDepth,
    tallyBatchSize,
    messageBatchSize,
    BatchUpdateStateTreeVerifier,
    QuadVoteTallyVerifier,
    signupDuration,
    votingDuration,
    tokenAddress,
    coordinatorAddress,
    coordinatorPubKey,
    fundingSource,
  } = state.data;

  const toast = useToast();
  const { handleDeployPoseidonT3, error: e1 } = useDeployPoseidonT3();
  const { handleDeployPoseidonT6, error: e2 } = useDeployPoseidonT6();
  const { handleDeployQuadVoteTallyVerifier, error: e3 } = useDeployQuadVoteTallyVerifier();
  const { handleDeployBatchUpdateStateTreeVerifier, error: e4 } = useDeployBatchUpdateStateTreeVerifier();
  const { handleDeployMACIFactory, error: e5 } = useDeployMACIFactory();
  const { handleDeployFundingRoundFactory, error: e6 } = useDeployFundingRoundFactory();
  const { handleDeployBrightIdUserRegistry, error: e7 } = useDeployBrightIdUserRegistry();
  const { handleDeployOptimisticRecipientRegistry, error: e8 } = useDeployOptimisticRecipientRegistry();
  const nextStep = (step) => {
    switch (step) {
      case Step.START: {
        actions.updateState({
          loadingButtonRightOnClick: () =>
            actions.updateState({
              step: Step.LOADING,
              stateTreeDepth: 32,
              messageTreeDepth: 32,
              voteOptionTreeDepth: 3,
              tallyBatchSize: 8,
              messageBatchSize: 8,
            }),
          loadingButtonLeft: "Cancel",
          loadingButtonRight: "Continue with Default",

          loadingHeading: "New Deployment",
          loadingTitle: "Set MACI Params",
          loadingPercent: 5,
          loadingStatus: "Select QF Version",
          loadingDetail:
            "Do not close this tab. This website uses session storage to save your progress as we deploy, closing the tab will cause you to lose your progress",

          loading: false,
        });
        return;
      }
      case Step.LOADING: {
        actions.updateState({
          loadingButtonRightOnClick: async () => {
            actions.updateState({
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Deploying MACI Libraries",
              loadingTitle: "Deploying Poseison T3",
              loadingPercent: 10,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });

            if (handleDeployPoseidonT3.deploy == null) throw e1 ? e1 : handleDeployPoseidonT3.error;
            const PoseidonT3Contract = await handleDeployPoseidonT3.deploy();
            const reciept = await PoseidonT3Contract.deployTransaction.wait(1);
            actions.updateState({
              PoseidonT3: reciept.contractAddress,
              contractsDeployed: "1",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Deploying MACI Libraries",
              loadingTitle: "Deploying Poseison T6",
              loadingPercent: 20,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });
            if (handleDeployPoseidonT6.deploy == null) throw e2 ? e2 : handleDeployPoseidonT6.error;
            const PoseidonT6Contract = await handleDeployPoseidonT6.deploy();
            const recieptPoseidonT6 = await PoseidonT6Contract.deployTransaction.wait(1);
            actions.updateState({
              PoseidonT6: recieptPoseidonT6.contractAddress,
              contractsDeployed: "2",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Deploying MACI Libraries",
              loadingTitle: "Deploying QVT Verifier",
              loadingPercent: 30,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });
            if (handleDeployQuadVoteTallyVerifier.deploy == null)
              throw e3 ? e3 : handleDeployQuadVoteTallyVerifier.error;
            const QuadVoteTallyVerifierContract = await handleDeployQuadVoteTallyVerifier.deploy();
            const recieptQuadVoteTallyVerifier = await QuadVoteTallyVerifierContract.deployTransaction.wait(1);
            actions.updateState({
              QuadVoteTallyVerifier: recieptQuadVoteTallyVerifier.contractAddress,
              contractsDeployed: "3",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Deploying MACI Libraries",
              loadingTitle: "Deploying BatchUST Verifier",
              loadingPercent: 30,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });
            if (handleDeployBatchUpdateStateTreeVerifier.deploy == null)
              throw e4 ? e4 : handleDeployBatchUpdateStateTreeVerifier.error;
            const BatchUpdateStateTreeVerifierContract = await handleDeployBatchUpdateStateTreeVerifier.deploy();
            const recieptBatchUpdateStateTreeVerifier = await BatchUpdateStateTreeVerifierContract.deployTransaction.wait(
              1
            );
            actions.updateState({
              BatchUpdateStateTreeVerifier: recieptBatchUpdateStateTreeVerifier.contractAddress,
              contractsDeployed: "4",
              loadingButtonLeft: "Reciept",
              loadingButtonRight: "Continue",
              loadingHeading: "Libraries Deployed",
              loadingTitle: "MACI Libraries Deployed",
              loadingPercent: 50,
              loadingStatus: "Configure QF Settings ",
              loading: false,
              step: Step.CONTRACT_DEPLOY,
            });
          },
          loadingButtonLeft: "Cancel",
          loadingButtonRight: "Confirm",
          loadingHeading: "deployment pending confirmation",
          loadingTitle: "Ready when you are",
          loadingPercent: 15,
          loadingStatus: "Confirm Poseison T3 Deploy",
          loading: false,
        });
        return;
      }
      case Step.CONTRACT_DEPLOY: {
        actions.updateState({
          loadingButtonRightOnClick: () => {
            if (
              state.data.signupDuration &&
              state.data.votingDuration &&
              state.data.tokenAddress &&
              state.data.fundingSource &&
              state.data.coordinatorAddress &&
              state.data.coordinatorPubKey
            ) {
              actions.updateState({
                step: Step.CONFIGURE,
                loadingButtonLeft: "Cancel",
                loadingButtonRight: "Confirm",
                loadingHeading: "deployment pending confirmation",
                loadingTitle: "Minimal Anti Collusion Infrastructure",
                loadingPercent: 15,
                loadingStatus: "Confirm MACI Deploy",

                loading: false,
              });
            } else {
              toast({
                title: "All parameters are required",
                description: "Missing Parameters",
                status: "warning",
                duration: 3000,
                isClosable: true,
              });
            }
          },
          loadingHeading: "New Quadratic Funding Instance",
          loadingTitle: "Set Quadratic Funding Round Params",
          loadingPercent: 60,
          loadingStatus: "Configure Parameters",
          loadingDetail:
            "Do not close this tab. This website uses session storage to save your progress as we deploy, closing the tab will cause you to lose your progress",

          loadingButtonLeft: "Back",
          loadingButtonRight: "Continue",
        });
        return;
      }
      case Step.CONFIGURE: {
        actions.updateState({
          loadingButtonRightOnClick: async () => {
            actions.updateState({
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Deploying MACI",
              loadingTitle: "Deploying Minimal Anti Collusion Infrastructure",
              loadingPercent: 60,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
              loadingButtonRightOnClick: async () => {
                return;
              },
            });

            if (handleDeployMACIFactory.deploy == null) throw e5 ? e5 : handleDeployMACIFactory.error;
            const MACIFactoryContract = await handleDeployMACIFactory.deploy(
              PoseidonT3,
              PoseidonT6,
              stateTreeDepth.toString(),
              messageTreeDepth.toString(),
              voteOptionTreeDepth.toString(),
              tallyBatchSize.toString(),
              messageBatchSize.toString(),
              BatchUpdateStateTreeVerifier,
              QuadVoteTallyVerifier,
              signupDuration,
              votingDuration
            );
            const maciReciept = await MACIFactoryContract.deployTransaction.wait(1);
            actions.updateState({
              Maci: maciReciept.contractAddress,
              contractsDeployed: "5",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Deploying Funding Factory ",
              loadingTitle: "Deploying Funding Factory",
              loadingPercent: 65,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });

            if (handleDeployFundingRoundFactory.deploy == null) throw e6 ? e6 : handleDeployFundingRoundFactory.error;
            const FundingRoundFactoryContract = await handleDeployFundingRoundFactory.deploy(
              maciReciept.contractAddress
            );
            const recieptFundingRoundFactory = await FundingRoundFactoryContract.deployTransaction.wait(1);
            actions.updateState({
              FundingRoundFactory: recieptFundingRoundFactory.contractAddress,
              contractsDeployed: "6",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Transfering MACI Ownership",
              loadingTitle: "Register MACI Factory",
              loadingPercent: 70,
              loadingStatus: "Transfer ownership to Funding Round Factory Contract",
              loading: true,
            });

            const tx = await MACIFactoryContract.transferOwnership(recieptFundingRoundFactory.contractAddress);
            const receiptTransferOwnershipMaci = await tx.wait(1);
            actions.updateState({
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Deploying User Registry",
              loadingTitle: "Deploying Bright ID User Registry",
              loadingPercent: 75,
              loadingStatus: "Pending transaction confirmation",
              loadingDetail:
                "BrightID User registry being deployed with the following parameters: network: xDai, context: clr.fund , verifier:0xb1d7...F6DB. You may deploy and configure your own versions of this contract from the deploy menu.",
              loading: true,
            });

            const context = ethers.utils.formatBytes32String("clr.fund");
            if (handleDeployBrightIdUserRegistry.deploy == null) throw e7 ? e7 : handleDeployBrightIdUserRegistry.error;
            const BrightIdUserRegistryContract = await handleDeployBrightIdUserRegistry.deploy(
              context,
              "0xb1d71F62bEe34E9Fc349234C201090c33BCdF6DB"
            );
            const recieptBrightIdUserRegistry = await BrightIdUserRegistryContract.deployTransaction.wait(1);

            actions.updateState({
              contractsDeployed: "6",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Set User Registry",
              loadingTitle: "Register BrightId User Registry",
              loadingPercent: 76,
              loadingStatus: "Register on Funding Round Factory Contract",
              loading: true,
            });
            const setUserRegistryTx = await FundingRoundFactoryContract.setUserRegistry(
              recieptBrightIdUserRegistry.contractAddress
            );

            actions.updateState({
              UserRegistry: recieptBrightIdUserRegistry.contractAddress,
              contractsDeployed: "7",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Deploying Recipient Registry",
              loadingTitle: "Deploying Optimistic Recipient Registry",
              loadingPercent: 78,
              loadingStatus: "Pending transaction confirmation",
              loadingDetail:
                "Optimistic Recipient registry being deployed with the following parameters: initialBaseDeposit: 0, initialChallengePeriodDuration: 1 week. You may deploy and configure your own versions of this contract from the deploy menu.",

              loading: false,
            });
            if (handleDeployOptimisticRecipientRegistry.deploy == null)
              throw e8 ? e8 : handleDeployOptimisticRecipientRegistry.error;
            const oneWeekInSeconds = "604800";
            const initialBaseDeposit = "0";
            const initialChallengePeriodDuration = oneWeekInSeconds;
            const OptimisticRecipientRegistryContract = await handleDeployOptimisticRecipientRegistry.deploy(
              initialBaseDeposit,
              initialChallengePeriodDuration,
              recieptFundingRoundFactory.contractAddress
            );
            const recieptOptimisticRecipientRegistry = await OptimisticRecipientRegistryContract.deployTransaction.wait(
              1
            );
            actions.updateState({
              RecipientRegistry: recieptOptimisticRecipientRegistry.contractAddress,
              contractsDeployed: "6",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Set Recipient Registry",
              loadingTitle: "Register Optimistic Recipient Registry ",
              loadingPercent: 76,
              loadingStatus: "Register on Funding Round Factory Contract",
              loadingDetail:
                "Do not close this tab. This website uses session storage to save your progress as we deploy, closing the tab will cause you to lose your progress",
              loading: true,
            });
            const setRecipientRegistryTx = await FundingRoundFactoryContract.setRecipientRegistry(
              recieptOptimisticRecipientRegistry.contractAddress
            );
            actions.updateState({
              contractsDeployed: "8",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Set Donation Token",
              loadingTitle: "Set Funding Round Token",
              loadingPercent: 82,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });

            const setTokenTx = await FundingRoundFactoryContract.setToken(tokenAddress);

            const serializedCoordinatorPubKey = coordinatorPubKey;
            const unSerializedCoordinatorPubKey = PubKey.unserialize(serializedCoordinatorPubKey);
            actions.updateState({
              contractsDeployed: "8",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Set Coordinator ",
              loadingTitle: "Set Coordinator PubKey and Address",
              loadingPercent: 82,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });
            const setCoordinatorTx = await FundingRoundFactoryContract.setCoordinator(
              coordinatorAddress,
              unSerializedCoordinatorPubKey.asContractParam()
            );
            actions.updateState({
              contractsDeployed: "8",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Set MACI Parameters ",
              loadingTitle: "Set Funding Round Params",
              loadingPercent: 85,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });
            const setMaciParametersTx = await FundingRoundFactoryContract.setMaciParameters(
              stateTreeDepth,
              messageTreeDepth,
              voteOptionTreeDepth,
              tallyBatchSize,
              messageBatchSize,
              BatchUpdateStateTreeVerifier,
              QuadVoteTallyVerifier,
              signupDuration,
              votingDuration
            );
            actions.updateState({
              contractsDeployed: "8",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Add Funding Source ",
              loadingTitle: "Register matching pool address",
              loadingPercent: 87,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });
            const addFundingSourceTx = await FundingRoundFactoryContract.addFundingSource(fundingSource);
            actions.updateState({
              contractsDeployed: "8",
              loadingButtonLeft: "Cancel",
              loadingButtonRight: "Check Transaction",
              loadingHeading: "Deploy New Quadratic Funding Round ",
              loadingTitle: "Deploy New Round",
              loadingPercent: 87,
              loadingStatus: "Pending transaction confirmation",
              loading: true,
            });
            const deployNewRoundTx = await FundingRoundFactoryContract.deployNewRound();
          },
          loadingButtonLeft: "Cancel",
          loadingButtonRight: "Confirm",
          loadingHeading: "deployment pending confirmation",
          loadingTitle: "Minimal Anti Collusion Infrastructure",
          loadingPercent: 15,
          loadingStatus: "Confirm MACI Deploy",
          loadingDetail:
            "Do not close this tab. This website uses session storage to save your progress as we deploy, closing the tab will cause you to lose your progress",

          loading: false,
        });
        return;
      }
      default: {
      }
    }
  };

  useEffect(() => {
    nextStep(step);
  }, [
    step,
    state.data.signupDuration,
    state.data.signupDuration,
    state.data.votingDuration,
    state.data.tokenAddress,
    state.data.fundingSource,
    state.data.coordinatorAddress,
    state.data.coordinatorPubKey,
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  switch (step) {
    case Step.START:
      return (
        <>
          <Wrapper
            onBack={() => {}}
            title="Select your Quadratic Matching Infrastructure"
            caption="Choose the capacity for ZKSnark Circuits and registries you will use">
            <Options />
          </Wrapper>
        </>
      );
    case Step.LOADING:
      return (
        <Wrapper
          onBack={() => {
            actions.updateStep({ step: Step.START });
          }}
          title="Deploying Quadratic Funding Infrastructure"
          caption="You will be promted to send a series of transactions to deploy and configure the system. Please look at the pretty blob while we build the future together. Do not refresh the page.">
          <Box
            my={6}
            width="100%"
            position="relative"
            _video={{
              objectFit: "cover",
            }}>
            <ReactPlayer url={HeroVideo} playing loop muted width="100%" height="100%" />
          </Box>
          <Button
            alignSelf="flex-end"
            onClick={() => {
              actions.updateStep({ step: Step.CONTRACT_DEPLOY });
            }}
            size="lg"
            leftIcon={<FaGithub />}
            isLoading={false}
            bg="red.700">
            Skip
          </Button>
        </Wrapper>
      );
    case Step.CONTRACT_DEPLOY:
      return (
        <Wrapper
          onBack={() => {
            actions.updateStep({ step: Step.LOADING });
          }}
          title="Configure Instance Specific Settings"
          caption=" Choose the token, coordinator, signup durations, voting duration, and funding source for your quadratic matching infrastructure.">
          <FormComp />
          <Button
            alignSelf="flex-end"
            onClick={() => {
              actions.updateState({
                step: Step.CONFIGURE,
              });
            }}
            size="lg"
            leftIcon={<FaGithub />}
            isLoading={false}
            bg="red.700">
            Skip
          </Button>
        </Wrapper>
      );
    case Step.CONFIGURE:
      return (
        <Wrapper
          onBack={() => {
            actions.updateStep({ step: Step.CONTRACT_DEPLOY });
          }}
          title="Deploying Quadratic Funding Infrastructure"
          caption="You will be promted to send a series of transactions to deploy and configure the system. Please look at the pretty blob while we build the future together. Do not refresh the page.">
          <Box
            my={6}
            width="100%"
            position="relative"
            _video={{
              objectFit: "cover",
            }}>
            <ReactPlayer url={HeroVideo} playing loop muted width="100%" height="100%" />
          </Box>
          <Button
            alignSelf="flex-end"
            onClick={() => {
              actions.updateStep({ step: Step.RECIPIENT });
            }}
            size="lg"
            leftIcon={<FaGithub />}
            isLoading={false}
            bg="red.700">
            Skip
          </Button>
        </Wrapper>
      );
    case Step.RECIPIENT:
      return (
        <Wrapper
          onBack={() => {
            actions.updateStep({ step: Step.CONFIGURE });
          }}
          title="Infrastructure deployed successfully"
          caption="GUI Deployer unavailable. Contact support to be added to subgraph and generate a GUI">
          <Button
            alignSelf="flex-end"
            onClick={() => {
              actions.updateStep({ step: Step.START });
            }}
            size="lg"
            leftIcon={<FaGithub />}
            isLoading={false}
            bg="red.700">
            Finish
          </Button>
        </Wrapper>
      );
    default:
      return null;
  }
};
