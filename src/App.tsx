import * as React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  VStack,
  Grid,
  Button,
  CSSReset,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
} from "@chakra-ui/react";
import { theme } from "./theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useWeb3Context } from "./hooks/Web3Provider";
import AddFundingSourceForm from "./components/FundingFactory/AddFundingSource";
import CoordinatorQuitForm from "./components/FundingFactory/CoordinatorQuit";
import CancelCurrentRoundForm from "./components/FundingFactory/CancelCurrentRound";
import DeployNewRoundForm from "./components/FundingFactory/DeployNewRound";
import RemoveFundingSourceForm from "./components/FundingFactory/RemoveFundingSource";
import SetCoordinatorForm from "./components/FundingFactory/SetCoordinator";
import SetMaciParametersForm from "./components/FundingFactory/SetMaciParameters";
import SetRecipientRegistryForm from "./components/FundingFactory/SetRecipientRegistry";
import SetTokenForm from "./components/FundingFactory/SetToken";
import SetUserRegistryForm from "./components/FundingFactory/SetUserRegistry";
import TransferMatchingFundsForm from "./components/FundingFactory/TransferMatchingFunds";
import DeployErc20Form from "./components/FactoryFactory/DeployERC20";
import DeployFundingRoundFactoryForm from "./components/FactoryFactory/DeployFundingFactory";
import DeployPoseidonT3Form from "./components/FactoryFactory/DeployPoseidonT3";
import DeployPoseidonT6Form from "./components/FactoryFactory/DeployPoseidonT6";
import DeployBatchUpdateStateTreeVerifierForm from "./components/FactoryFactory/DeployBatchUpdateStateTreeVerifier";
import DeployQuadVoteTallyVerifierForm from "./components/FactoryFactory/DeployQuadVoteTallyVerifier";
import DeployMACIFactoryForm from "./components/FactoryFactory/DeployMACIFactory";

export const App = () => {
  const { web3Start, web3Connect, web3Logout } = useWeb3Context();
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Grid minH="100vh" p={3}>
        <HStack justifySelf="flex-end" spacing={1}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Button justifySelf="flex-end" onClick={web3Start}>
            Web3 Start
          </Button>
          <Button justifySelf="flex-end" onClick={web3Connect}>
            Web3 Login
          </Button>
          <Button justifySelf="flex-end" onClick={web3Logout}>
            Web3 Logout
          </Button>
        </HStack>
        <VStack spacing={8}>
          <Tabs minH="100%" minWidth="100%" isLazy>
            <TabList position="absolute" border="none">
              <VStack alignItems="start" spacing={1}>
                <Tab>Deploy Test Token</Tab>
                <Tab>Deploy PoseidonT3 Library</Tab>
                <Tab>Deploy PoseidonT6 Library</Tab>
                <Tab>Deploy B.U.S.T. Verifier</Tab>
                <Tab>Deploy QV Tally Verifier</Tab>
                <Tab>Deploy Deploy MACI Factory</Tab>
                <Tab>Deploy Funding Factory</Tab>
                <Tab>Set User Registry</Tab>
                <Tab>Set Recipient Registry</Tab>
                <Tab>Set Token</Tab>
                <Tab>Add Funding Source</Tab>
                <Tab>Set Maci Parameters</Tab>
                <Tab>Set Coordinator</Tab>
                <Tab>Deploy New Round</Tab>
                <Tab>Transfer Matching Funds</Tab>
                <Tab>Cancel Current Round</Tab>
                <Tab>Remove Funding Source</Tab>
                <Tab>Coordinator Quit</Tab>
              </VStack>
            </TabList>
            <Box textAlign="center" fontSize="xl">
              <LoginArea />
            </Box>
          </Tabs>
        </VStack>
      </Grid>
    </ChakraProvider>
  );
};

const LoginArea = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box p={4}>
        <TabPanels>
          <TabPanel>
            <DeployErc20Form />
          </TabPanel>
          <TabPanel>
            <DeployPoseidonT3Form />
          </TabPanel>
          <TabPanel>
            <DeployPoseidonT6Form />
          </TabPanel>
          <TabPanel>
            <DeployBatchUpdateStateTreeVerifierForm />
          </TabPanel>
          <TabPanel>
            <DeployQuadVoteTallyVerifierForm />
          </TabPanel>
          <TabPanel>
            <DeployMACIFactoryForm />
          </TabPanel>

          <TabPanel>
            <DeployFundingRoundFactoryForm />
          </TabPanel>
          <TabPanel>
            <SetUserRegistryForm />
          </TabPanel>
          <TabPanel>
            <SetRecipientRegistryForm />
          </TabPanel>
          <TabPanel>
            <SetTokenForm />
          </TabPanel>
          <TabPanel>
            <AddFundingSourceForm />
          </TabPanel>
          <TabPanel>
            <SetMaciParametersForm />
          </TabPanel>
          <TabPanel>
            <SetCoordinatorForm />
          </TabPanel>
          <TabPanel>
            <DeployNewRoundForm />
          </TabPanel>
          <TabPanel>
            <TransferMatchingFundsForm />
          </TabPanel>
          <TabPanel>
            <CancelCurrentRoundForm />
          </TabPanel>
          <TabPanel>
            <RemoveFundingSourceForm />
          </TabPanel>
          <TabPanel>
            <CoordinatorQuitForm />
          </TabPanel>
        </TabPanels>
      </Box>
    </Flex>
  );
};
