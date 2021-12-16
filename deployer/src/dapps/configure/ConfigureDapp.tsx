import * as React from "react";
import {
  Flex,
  Box,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { useWeb3Context } from "../../hooks/Web3Provider";

import AddFundingSourceForm from "../../components/FundingFactory/AddFundingSource";
import CoordinatorQuitForm from "../../components/FundingFactory/CoordinatorQuit";
import CancelCurrentRoundForm from "../../components/FundingFactory/CancelCurrentRound";
import DeployNewRoundForm from "../../components/FundingFactory/DeployNewRound";
import RemoveFundingSourceForm from "../../components/FundingFactory/RemoveFundingSource";
import SetCoordinatorForm from "../../components/FundingFactory/SetCoordinator";
import SetMaciParametersForm from "../../components/FundingFactory/SetMaciParameters";
import SetRecipientRegistryForm from "../../components/FundingFactory/SetRecipientRegistry";
import SetTokenForm from "../../components/FundingFactory/SetToken";
import SetUserRegistryForm from "../../components/FundingFactory/SetUserRegistry";
import TransferMatchingFundsForm from "../../components/FundingFactory/TransferMatchingFunds";

import TransferOwnershipForm from "../../components/MACIFactory/transferOwnership";
import RenounceOwnershipForm from "../../components/MACIFactory/renounceOwnership";

import AddRecipientForm from "../../components/OptimisticRecipientRegistry/addRecipient";
import ChallengeRequestForm from "../../components/OptimisticRecipientRegistry/challengeRequest";
import ExecuteRequestForm from "../../components/OptimisticRecipientRegistry/executeRequest";
import RemoveRecipientForm from "../../components/OptimisticRecipientRegistry/removeRecipient";
import SetBaseDepositForm from "../../components/OptimisticRecipientRegistry/setBaseDeposit";
import SetChallengePeriodDurationForm from "../../components/OptimisticRecipientRegistry/setChallengePeriodDuration";
import SetMaxRecipientsForm from "../../components/OptimisticRecipientRegistry/setMaxRecipients";

import AddRecipientKlerosForm from "../../components/KlerosGTCRAdapter/addRecipient";
import RemoveRecipientKlerosForm from "../../components/KlerosGTCRAdapter/removeRecipient";
import SetMaxRecipientsFlerosForm from "../../components/KlerosGTCRAdapter/setMaxRecipients";

import AddUserForm from "../../components/SimpleUserRegistry/addUser";
import RemoveUserForm from "../../components/SimpleUserRegistry/removeUser";
import RenounceOwnershipSimpleUserRegistryForm from "../../components/SimpleUserRegistry/renounceOwnership";
import TransferOwnershipSimpleuserResgistryForm from "../../components/SimpleUserRegistry/transferOwnership";

import RegisterForm from "../../components/BrightIdUserRegistry/register";
import RenounceOwnershipBrightIdForm from "../../components/BrightIdUserRegistry/renounceOwnership";
import SetSettingsForm from "../../components/BrightIdUserRegistry/setSettings";
import SponsorForm from "../../components/BrightIdUserRegistry/sponsor";
import TransferBrightIdOwnershipForm from "../../components/BrightIdUserRegistry/transferOwnership";

const FlexBox = ({ children, flexGrow = 1, alignItems = "center", justifyContent = "center", ...rest }) => {
  return (
    <Box display="flex" flexGrow={flexGrow} alignItems={alignItems} justifyContent={justifyContent} {...rest}>
      {children}
    </Box>
  );
};
export const ConfigureDapp = () => {
  const { web3Start, web3Connect, web3Logout } = useWeb3Context();
  return (
    <VStack>
      <Tabs width="100%" isLazy>
        <Flex direction="row" pl="58px">
          <FlexBox
            hidden={useBreakpointValue({ base: true, md: true, lg: false })}
            alignItems="top"
            justifyContent="left"
            flexShrink={0}>
            <TabList mt="30px" border="none">
              <VStack alignItems="start" spacing={-3} fontFamily="Helvetica" letterSpacing="-0.6px" color="gray.400">
                <Button
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Funding Factory
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
                    fontSize: "14px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  MACI Factory
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
                    fontSize: "14px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Optimistic Recipient Registry
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
                    fontSize: "14px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Kleros GTCR Adapter
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
                    fontSize: "14px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  Simple User Registry
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
                    fontSize: "14px",
                    fontWeight: "bold",
                    border: "none",
                    letterSpacing: "-1px",
                    background: "none",
                    ":focus": { boxShadow: "none", fontSize: "14px", fontWeight: "bold" },
                  }}>
                  BrightId User Registry
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
          </FlexBox>
          <Box flexGrow={1}>
            {" "}
            <LoginArea />
          </Box>
        </Flex>
      </Tabs>
    </VStack>
  );
};

const LoginArea = () => {
  return (
    <Flex align="center" justifyContent="flex-start">
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
