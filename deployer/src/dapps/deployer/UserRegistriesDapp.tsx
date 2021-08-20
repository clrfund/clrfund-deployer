import * as React from "react";
import { Flex, Box, VStack, Tabs, TabList, Tab, TabPanels, TabPanel, useBreakpointValue } from "@chakra-ui/react";
import { useWeb3Context } from "../../hooks/Web3Provider";

import DeploySimpleUserRegistryForm from "../../components/Deployers/DeploySimpleUserRegistry";
import DeployBrightIdUserRegistryForm from "../../components/Deployers/DeployBrightIdUserRegistry";
const FlexBox = ({ children, flexGrow = 1, alignItems = "center", justifyContent = "center", ...rest }) => {
  return (
    <Box display="flex" flexGrow={flexGrow} alignItems={alignItems} justifyContent={justifyContent} {...rest}>
      {children}
    </Box>
  );
};
export const Dapp = () => {
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
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",

                    ":focus": {
                      boxShadow: "none",
                      fontSize: "14px",
                      fontWeight: "bold",
                    },
                  }}>
                  Deploy Simple User Registry
                </Tab>
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",

                    ":focus": {
                      boxShadow: "none",
                      fontSize: "14px",
                      fontWeight: "bold",
                    },
                  }}>
                  Deploy BrightId User Registry
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
            <DeploySimpleUserRegistryForm />
          </TabPanel>
          <TabPanel>
            <DeployBrightIdUserRegistryForm />
          </TabPanel>
        </TabPanels>
      </Box>
    </Flex>
  );
};
