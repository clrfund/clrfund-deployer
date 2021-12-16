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

import AddRecipientForm from "../../components/OptimisticRecipientRegistry/addRecipient";
import ChallengeRequestForm from "../../components/OptimisticRecipientRegistry/challengeRequest";
import ExecuteRequestForm from "../../components/OptimisticRecipientRegistry/executeRequest";
import RemoveRecipientForm from "../../components/OptimisticRecipientRegistry/removeRecipient";
import SetBaseDepositForm from "../../components/OptimisticRecipientRegistry/setBaseDeposit";
import SetChallengePeriodDurationForm from "../../components/OptimisticRecipientRegistry/setChallengePeriodDuration";
import SetMaxRecipientsForm from "../../components/OptimisticRecipientRegistry/setMaxRecipients";
import RenounceOwnershipForm from "../../components/OptimisticRecipientRegistry/renounceOwnership";

const FlexBox = ({ children, flexGrow = 1, alignItems = "center", justifyContent = "center", ...rest }) => {
  return (
    <Box display="flex" flexGrow={flexGrow} alignItems={alignItems} justifyContent={justifyContent} {...rest}>
      {children}
    </Box>
  );
};
export const ConfigureOptimisticRecipientRegistryDapp = () => {
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
        </TabPanels>
      </Box>
    </Flex>
  );
};
