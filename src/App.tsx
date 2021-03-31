import * as React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  CSSReset,
  chakra,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
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
import { useWeb3Context } from "./hooks/Web3Provider";

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
