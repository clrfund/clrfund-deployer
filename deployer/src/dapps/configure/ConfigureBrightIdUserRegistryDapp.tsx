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
export const ConfigureBrightIdUserRegistryDapp = () => {
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
