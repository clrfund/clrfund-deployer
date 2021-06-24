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

import DeployErc20Form from "./components/Deployers/DeployERC20";
import DeployFundingRoundFactoryForm from "./components/Deployers/DeployFundingFactory";
import DeployPoseidonT3Form from "./components/Deployers/DeployPoseidonT3";
import DeployPoseidonT6Form from "./components/Deployers/DeployPoseidonT6";
import DeployBatchUpdateStateTreeVerifierForm from "./components/Deployers/DeployBatchUpdateStateTreeVerifier";
import DeployQuadVoteTallyVerifierForm from "./components/Deployers/DeployQuadVoteTallyVerifier";
import DeployMACIFactoryForm from "./components/Deployers/DeployMACIFactory";
import DeployOptimisticRecipientRegistryForm from "./components/Deployers/DeployOptimisticRecipientRegistry";
import DeploySimpleRecipientRegistryForm from "./components/Deployers/DeploySimpleRecipientRegistry";
import DeployKlerosGTCRMockForm from "./components/Deployers/DeployKlerosGTCRAdapter";
import DeployKlerosGTCRAdapterForm from "./components/Deployers/DeployKlerosGTCRAdapter";
import DeploySimpleUserRegistryForm from "./components/Deployers/DeploySimpleUserRegistry";
import DeployBrightIdUserRegistryForm from "./components/Deployers/DeployBrightIdUserRegistry";

import TransferOwnershipForm from "./components/MACIFactory/transferOwnership";
import RenounceOwnershipForm from "./components/MACIFactory/renounceOwnership";

import AddRecipientForm from "./components/OptimisticRecipientRegistry/addRecipient";
import ChallengeRequestForm from "./components/OptimisticRecipientRegistry/challengeRequest";
import ExecuteRequestForm from "./components/OptimisticRecipientRegistry/executeRequest";
import RemoveRecipientForm from "./components/OptimisticRecipientRegistry/removeRecipient";
import SetBaseDepositForm from "./components/OptimisticRecipientRegistry/setBaseDeposit";
import SetChallengePeriodDurationForm from "./components/OptimisticRecipientRegistry/setChallengePeriodDuration";
import SetMaxRecipientsForm from "./components/OptimisticRecipientRegistry/setMaxRecipients";

import AddRecipientKlerosForm from "./components/KlerosGTCRAdapter/addRecipient";
import RemoveRecipientKlerosForm from "./components/KlerosGTCRAdapter/removeRecipient";
import SetMaxRecipientsFlerosForm from "./components/KlerosGTCRAdapter/setMaxRecipients";

import AddUserForm from "./components/SimpleUserRegistry/addUser";
import RemoveUserForm from "./components/SimpleUserRegistry/removeUser";
import RenounceOwnershipSimpleUserRegistryForm from "./components/SimpleUserRegistry/renounceOwnership";
import TransferOwnershipSimpleuserResgistryForm from "./components/SimpleUserRegistry/transferOwnership";

import RegisterForm from "./components/BrightIdUserRegistry/register";
import RenounceOwnershipBrightIdForm from "./components/BrightIdUserRegistry/renounceOwnership";
import SetSettingsForm from "./components/BrightIdUserRegistry/setSettings";
import SponsorForm from "./components/BrightIdUserRegistry/sponsor";
import TransferBrightIdOwnershipForm from "./components/BrightIdUserRegistry/transferOwnership";
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
              <VStack alignItems="start" spacing={-3}>
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 1: Deploy Base Contracts and Libraries
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy Test Token
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy PoseidonT3 Library
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy PoseidonT6 Library
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy B.U.S.T. Verifier
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy QV Tally Verifier
                </Tab>

                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 2: Deploy Recipient Registry
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy Optimistic Recipient Registry
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy Simple Recipient Registry
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy Kleros GTCR Mock
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy Kleros GTCR Adapter
                </Tab>
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 3: Deploy User Registry
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy Simple User Registry
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy BrightId User Registry
                </Tab>
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 4: Deploy QF instance
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy Deploy MACI Factory
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy Funding Factory
                </Tab>
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 5: Manage Funding Factory
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set User Registry
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set Recipient Registry
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set Token
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Add Funding Source
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set Maci Parameters
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set Coordinator
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Deploy New Round
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Transfer Matching Funds
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Cancel Current Round
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Remove Funding Source
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Coordinator Quit
                </Tab>
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 6: Manage MACI Factory
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Transfer Ownership
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Renounce Ownership
                </Tab>
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 7A: Manage Optimistic Recipient Registry
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Add Recipient
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Challenge Request
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Execute Request
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Remove Recipient
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Renounce Ownership
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set Base Deposit
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set Challenge Period Duration
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set Max Recipients
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Transfer Ownership
                </Tab>

                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 7B: Manage Kleros GTCR Adapter
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Add Recipient
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Remove Recipient
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set Max Recipients
                </Tab>
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 8A: Manage Simple User Registry
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Add User
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Remove User
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Renounce Ownership
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Transfer Ownership
                </Tab>
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Step 8B: Manage BrightId User Registry
                </Button>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Register
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Renounce Ownership
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Set Settings
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Sponsor
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",
                    letterSpacing: "-1px",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Transfer Ownership
                </Tab>
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
            <DeployOptimisticRecipientRegistryForm />
          </TabPanel>
          <TabPanel>
            <DeploySimpleRecipientRegistryForm />
          </TabPanel>
          <TabPanel>
            <DeployKlerosGTCRMockForm />
          </TabPanel>
          <TabPanel>
            <DeployKlerosGTCRAdapterForm />
          </TabPanel>
          <TabPanel>
            <DeploySimpleUserRegistryForm />
          </TabPanel>
          <TabPanel>
            <DeployBrightIdUserRegistryForm />
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
          <TabPanel>
            <TransferOwnershipForm />
          </TabPanel>
          <TabPanel>
            <RenounceOwnershipForm />
          </TabPanel>
          <TabPanel>
            <AddRecipientForm />
          </TabPanel>
          <TabPanel>
            <ChallengeRequestForm />
          </TabPanel>
          <TabPanel>
            <ExecuteRequestForm />
          </TabPanel>
          <TabPanel>
            <RemoveRecipientForm />
          </TabPanel>
          <TabPanel>
            <RenounceOwnershipForm />
          </TabPanel>
          <TabPanel>
            <SetBaseDepositForm />
          </TabPanel>
          <TabPanel>
            <SetChallengePeriodDurationForm />
          </TabPanel>
          <TabPanel>
            <SetMaxRecipientsForm />
          </TabPanel>
          <TabPanel>
            <TransferOwnershipForm />
          </TabPanel>
          <TabPanel>
            <AddRecipientKlerosForm />
          </TabPanel>
          <TabPanel>
            <RemoveRecipientKlerosForm />
          </TabPanel>
          <TabPanel>
            <SetMaxRecipientsFlerosForm />
          </TabPanel>
          <TabPanel>
            <AddUserForm />
          </TabPanel>
          <TabPanel>
            <RemoveUserForm />
          </TabPanel>
          <TabPanel>
            <RenounceOwnershipSimpleUserRegistryForm />
          </TabPanel>
          <TabPanel>
            <TransferOwnershipSimpleuserResgistryForm />
          </TabPanel>

          <TabPanel>
            <RegisterForm />
          </TabPanel>
          <TabPanel>
            <RenounceOwnershipBrightIdForm />
          </TabPanel>
          <TabPanel>
            <SetSettingsForm />
          </TabPanel>
          <TabPanel>
            <SponsorForm />
          </TabPanel>
          <TabPanel>
            <TransferBrightIdOwnershipForm />
          </TabPanel>
        </TabPanels>
      </Box>
    </Flex>
  );
};
