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
  useBreakpointValue,
} from "@chakra-ui/react";
import { theme } from "../../theme";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { useWeb3Context } from "../../hooks/Web3Provider";

import DeployErc20Form from "../../components/Deployers/DeployERC20";
import DeployFundingRoundFactoryForm from "../../components/Deployers/DeployFundingFactory";

const FlexBox = ({
  children,
  flexGrow = 1,
  alignItems = "center",
  justifyContent = "center",
  ...rest
}) => {
  return (
    <Box
      display="flex"
      flexGrow={flexGrow}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...rest}
    >
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
            flexShrink={0}
          >
            <TabList mt="30px" border="none">
              <VStack
                alignItems="start"
                spacing={-3}
                fontFamily="Helvetica"
                letterSpacing="-0.6px"
                color="gray.400"
              >
                <Tab
                  sx={{
                    fontSize: "14px",
                    border: "none",

                    ":focus": {
                      boxShadow: "none",
                      fontSize: "14px",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Deploy Funding Factory
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
                  }}
                >
                  Deploy Test Token
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
            <DeployFundingRoundFactoryForm />
          </TabPanel>
          <TabPanel>
            <DeployErc20Form />
          </TabPanel>
        </TabPanels>
      </Box>
    </Flex>
  );
};
