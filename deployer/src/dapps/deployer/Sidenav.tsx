import * as React from "react";
import {
  Box,
  Text,
  VStack,
  StatHelpText,
  Tooltip,
  CircularProgress,
  CircularProgressLabel,
  Badge,
  chakra,
  useColorModeValue,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { useStateMachine } from "little-state-machine";
import { updateState } from "../../Dapp";
enum Step {
  START = 0,
  LOADING = 1,
  CONTRACT_DEPLOY = 2,
  CONFIGURE = 3,
  RECIPIENT = 4,
}

export const Sidenav = () => {
  const { state } = useStateMachine({ updateState });
  const {
    PoseidonT3,
    PoseidonT6,
    BatchUpdateStateTreeVerifier,
    QuadVoteTallyVerifier,
    Maci,
    FundingRoundFactory,
    RecipientRegistry,
    UserRegistry,
    contractsDeployed,
    loadingHeading,
    loadingTitle,
    loading,
    loadingPercent,
    loadingStatus,
    loadingDetail,
    loadingButtonLeft,
    loadingButtonRight,
    loadingButtonRightOnClick,
    messageTreeDepth,
    stateTreeDepth,
    voteOptionTreeDepth,
    tallyBatchSize,
    messageBatchSize,
    tokenAddress,
    coordinatorPubKey,
    coordinatorAddress,
    signupDuration,
    votingDuration,
    fundingSource,
    step,
    txHash,
  } = state.data;
  return (
    <Box
      display={{ md: "none", lg: "flex" }}
      borderRight="1pm solid"
      borderColor="background.400"
      gridColumn={{ md: "0", lg: "1" }}
      mx="auto">
      <VStack>
        <Box>
          <Badge
            mb={1}
            fontSize="xs"
            letterSpacing="wide"
            colorScheme="brand"
            fontWeight="medium"
            rounded="full"
            px={3}
            py={1}
            ml="-2px">
            {loadingHeading}
          </Badge>
          <Text
            mb={2}
            fontSize="3xl"
            fontWeight={["bold", "extrabold"]}
            color={useColorModeValue("gray.900", "gray.50")}
            lineHeight="tight">
            {loadingTitle}
          </Text>
          <HStack>
            <CircularProgress
              height="auto"
              thickness="12px"
              size="25px"
              value={loadingPercent}
              mt="-2px"
              color="green.400"
              isIndeterminate={loading}>
              <CircularProgressLabel></CircularProgressLabel>
            </CircularProgress>
            <Text fontSize="lg" fontWeight="medium" color={useColorModeValue("gray.600", "gray.400")}>
              {loadingStatus}
            </Text>
          </HStack>

          <chakra.p mb={6} mt={3} fontSize="md" color={useColorModeValue("gray.500", "gray.500")}>
            {loadingDetail}
          </chakra.p>
          <HStack>
            <Button width="80px" height="35px" bg="gray.600" fontSize="sm">
              {loadingButtonLeft}
            </Button>
            <Button onClick={loadingButtonRightOnClick} flexGrow={1} height="35px" bg="green.300" fontSize="sm">
              {loadingButtonRight}
            </Button>
          </HStack>
        </Box>
        <HStack width="100%">
          <SimpleGrid
            marginTop="20px !important"
            flexGrow={1}
            width="-webkit-fill-available"
            columns={{ base: 1, md: 1, lg: 1 }}
            spacing={{ base: 4, lg: 4 }}>
            <SystemConfiguredStatsCard
              hidden={step == Step.LOADING || step == Step.CONFIGURE || step == Step.RECIPIENT}
              title={"System Configuration"}
              stat={"Params"}
              stateTreeDepth={stateTreeDepth}
              messageTreeDepth={messageTreeDepth}
              voteOptionTreeDepth={voteOptionTreeDepth}
              tallyBatchSize={tallyBatchSize}
              messageBatchSize={messageBatchSize}
              tokenAddress={tokenAddress}
              coordinatorPubKey={coordinatorPubKey}
              coordinatorAddress={coordinatorAddress}
              signupDuration={signupDuration}
              votingDuration={votingDuration}
              fundingSource={fundingSource}
            />
            <ContractsDeployedStatsCard
              hidden={step == Step.START}
              title={"Contracts Deployed"}
              stat={contractsDeployed}
              PoseidonT3={PoseidonT3}
              PoseidonT6={PoseidonT6}
              BatchUpdateStateTreeVerifier={BatchUpdateStateTreeVerifier}
              QuadVoteTallyVerifier={QuadVoteTallyVerifier}
              Maci={Maci}
              FundingRoundFactory={FundingRoundFactory}
              RecipientRegistry={RecipientRegistry}
              UserRegistry={UserRegistry}
            />
          </SimpleGrid>
        </HStack>
      </VStack>
    </Box>
  );
};
interface ContractsDeployedStatsCardProps {
  title: string;
  stat: string;

  PoseidonT3: string;
  PoseidonT6: string;
  BatchUpdateStateTreeVerifier: string;
  QuadVoteTallyVerifier: string;
  Maci: string;
  FundingRoundFactory: string;
  RecipientRegistry: string;
  UserRegistry: string;
  hidden: boolean;
}

function ContractsDeployedStatsCard(props: ContractsDeployedStatsCardProps) {
  const {
    title,
    stat,
    PoseidonT3,
    PoseidonT6,
    BatchUpdateStateTreeVerifier,
    QuadVoteTallyVerifier,
    Maci,
    FundingRoundFactory,
    RecipientRegistry,
    UserRegistry,
    hidden,
  } = props;

  const check = (contract: string) => {
    return contract != "No contract found."
      ? { status: true, address: contract }
      : { status: false, address: "No contract found." };
  };

  return (
    <Stat
      hidden={hidden}
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor="gray.700"
      bg="gray.800"
      rounded={"lg"}
      gridColumn="1">
      <StatLabel>{title}</StatLabel>
      <StatNumber>{stat}/8</StatNumber>
      <Tooltip label={check(PoseidonT3).address} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {check(PoseidonT3).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Poseidon T3
        </StatHelpText>
      </Tooltip>
      <Tooltip label={check(PoseidonT6).address} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {check(PoseidonT6).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Poseidon T6
        </StatHelpText>
      </Tooltip>
      <Tooltip label={QuadVoteTallyVerifier} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {check(QuadVoteTallyVerifier).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          QVT Verifier
        </StatHelpText>
      </Tooltip>
      <Tooltip label={BatchUpdateStateTreeVerifier} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {check(BatchUpdateStateTreeVerifier).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          BatchUST Verifier
        </StatHelpText>
      </Tooltip>
      <Tooltip label={Maci} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {check(Maci).status ? <CheckCircleIcon color="green" mr="1" /> : <WarningIcon color="yellow.500" mr="1" />}{" "}
          Minimal Anti Collusion Infrastructure
        </StatHelpText>
      </Tooltip>

      <Tooltip label={FundingRoundFactory} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {check(FundingRoundFactory).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Funding Round Controller
        </StatHelpText>
      </Tooltip>
      <Tooltip label={RecipientRegistry} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {check(RecipientRegistry).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Recipient Registry
        </StatHelpText>
      </Tooltip>
      <Tooltip label={UserRegistry} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {check(UserRegistry).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          User Registry
        </StatHelpText>
      </Tooltip>
    </Stat>
  );
}

interface SystemConfiguredStatsCardProps {
  title: string;
  stat: string;

  stateTreeDepth: number;
  messageTreeDepth: number;
  voteOptionTreeDepth: number;
  tallyBatchSize: number;
  messageBatchSize: number;
  tokenAddress: string;
  coordinatorPubKey: string;
  coordinatorAddress: string;
  signupDuration: string;
  votingDuration: string;
  fundingSource: string;
  hidden: boolean;
}

function SystemConfiguredStatsCard(props: SystemConfiguredStatsCardProps) {
  const {
    title,
    stat,
    stateTreeDepth,
    messageTreeDepth,
    voteOptionTreeDepth,
    tallyBatchSize,
    messageBatchSize,
    tokenAddress,
    coordinatorPubKey,
    coordinatorAddress,
    signupDuration,
    votingDuration,
    fundingSource,
    hidden,
  } = props;
  const checkNumber = (param: number) => {
    return param !== 0 && param != undefined
      ? { status: true, param: param }
      : { status: false, param: "No param found." };
  };
  const checkString = (param: string) => {
    return param !== "" && param != undefined && param != "No contract found."
      ? { status: true, param: param }
      : { status: false, param: "No param found." };
  };
  const check = (contract: string) => {
    return contract != "No contract found." && contract != undefined && contract != ""
      ? { status: true, address: contract }
      : { status: false, address: "No contract found." };
  };
  return (
    <Stat
      hidden={hidden}
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor="gray.700"
      bg="gray.800"
      rounded={"lg"}
      gridColumn="1">
      <StatLabel>{title}</StatLabel>
      <StatNumber>{stat}</StatNumber>
      <Tooltip label={checkString(signupDuration).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkString(signupDuration).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Sign Up Duration
        </StatHelpText>
      </Tooltip>
      <Tooltip label={checkString(votingDuration).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkString(votingDuration).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Voting Duration
        </StatHelpText>
      </Tooltip>

      <Tooltip label={check(tokenAddress).address} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {check(tokenAddress).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Token Address
        </StatHelpText>
      </Tooltip>
      <Tooltip label={checkString(fundingSource).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkString(fundingSource).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Funding Source
        </StatHelpText>
      </Tooltip>
      <Tooltip label={checkString(coordinatorPubKey).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkString(coordinatorPubKey).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Coordinator Pub Key
        </StatHelpText>
      </Tooltip>
      <Tooltip label={checkString(coordinatorAddress).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkString(coordinatorAddress).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Coordinator Address
        </StatHelpText>
      </Tooltip>

      <Tooltip label={checkNumber(stateTreeDepth).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkNumber(stateTreeDepth).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          State Tree Depth
        </StatHelpText>
      </Tooltip>

      <Tooltip label={checkNumber(messageTreeDepth).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkNumber(messageTreeDepth).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Message Tree Depth
        </StatHelpText>
      </Tooltip>
      <Tooltip label={checkNumber(voteOptionTreeDepth).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkNumber(voteOptionTreeDepth).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Vote Option Tree Depth
        </StatHelpText>
      </Tooltip>
      <Tooltip label={checkNumber(tallyBatchSize).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkNumber(tallyBatchSize).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Tally Batch Size
        </StatHelpText>
      </Tooltip>
      <Tooltip label={checkNumber(messageBatchSize).param} fontSize="sm" placement="bottom-start">
        <StatHelpText>
          {checkNumber(messageBatchSize).status ? (
            <CheckCircleIcon color="green" mr="1" />
          ) : (
            <WarningIcon color="yellow.500" mr="1" />
          )}{" "}
          Message Batch Size
        </StatHelpText>
      </Tooltip>
    </Stat>
  );
}
