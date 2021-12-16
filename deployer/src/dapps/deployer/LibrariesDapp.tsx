import * as React from "react";
import { Flex, Box, VStack, Tabs, TabList, Tab, TabPanels, TabPanel, useBreakpointValue } from "@chakra-ui/react";
import { useWeb3Context } from "../../hooks/Web3Provider";

import DeployPoseidonT3Form from "../../components/Deployers/DeployPoseidonT3";
import DeployPoseidonT6Form from "../../components/Deployers/DeployPoseidonT6";
import DeployBatchUpdateStateTreeVerifierForm from "../../components/Deployers/DeployBatchUpdateStateTreeVerifier";
import DeployQuadVoteTallyVerifierForm from "../../components/Deployers/DeployQuadVoteTallyVerifier";

const FlexBox = ({ children, flexGrow = 0, alignItems = "center", justifyContent = "center", ...rest }) => {
  return (
    <Box display="flex" flexGrow={flexGrow} alignItems={alignItems} justifyContent={justifyContent} {...rest}>
      {children}
    </Box>
  );
};
export const Dapp = () => {
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
                  Deploy PoseidonT3 Library
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
                  Deploy PoseidonT6 Library
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
                  Deploy B.U.S.T. Verifier
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
                  Deploy QV Tally Verifier
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
        </TabPanels>
      </Box>
    </Flex>
  );
};
