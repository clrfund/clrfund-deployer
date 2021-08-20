import React from "react";
import { Box, Text, Button, Flex, HStack, VStack, Image, Heading } from "@chakra-ui/react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";

import { Dapp as LibrariesDapp } from "./LibrariesDapp";
import { Dapp as MaciDapp } from "./MaciDapp";
import { Dapp as RecipientRegistriesDapp } from "./RecipientRegistriesDapp";
import { Dapp as UserRegistriesDapp } from "./UserRegistriesDapp";
import { Dapp as FundingRoundFactoryDapp } from "./FundingRoundFactoryDapp";

import { DeployLayout, WizardLayout } from "./DeployLayout";
import { DeployWizard } from "./Wizard";
import Q from "../../assets/Q.png";
import { useWeb3Context } from "../../hooks/Web3Provider";

export const Deploy = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const { library, account, balance, chainId, web3Start, web3Connect } = useWeb3Context();
  // console.log({library, account,balance, chainId})
  const render = () => {
    if (library && account) {
      return (
        <Switch>
          <Route exact path={`${path}`}>
            <WizardLayout>
              <DeployWizard />
            </WizardLayout>
          </Route>
          <Route exact path={`${path}lib`}>
            <DeployLayout>
              <LibrariesDapp />
            </DeployLayout>
          </Route>
          <Route exact path={`${path}maci`}>
            <DeployLayout>
              <MaciDapp />
            </DeployLayout>
          </Route>
          <Route exact path={`${path}recipient`}>
            <DeployLayout>
              <RecipientRegistriesDapp />
            </DeployLayout>
          </Route>
          <Route exact path={`${path}user`}>
            <DeployLayout>
              <UserRegistriesDapp />
            </DeployLayout>
          </Route>
          <Route exact path={`${path}factory`}>
            <DeployLayout>
              <FundingRoundFactoryDapp />
            </DeployLayout>
          </Route>
        </Switch>
      );
    } else {
      return (
        <DeployLayout>
          <Flex justifyContent="center" align="center">
            <VStack p={4} mt={{ sm: "50px", lg: "100px" }} mb={{ sm: "150px", lg: "200px" }} textAlign="center">
              <Image my="40px" h="250px" mx="auto" src={Q}></Image>
              <Box mb="10px !important">
                <Text fontSize="xs">NO ACCOUNT DETECTED</Text>
              </Box>
              <Heading mb="20px !important">Please log into your Web3 Provider</Heading>
              <Button
                my="400px"
                mx="auto"
                minWidth="250px"
                minHeight="50px"
                backgroundColor="background.50"
                fontWeight="bold"
                fontSize="md"
                onClick={async () => {
                  await web3Start();
                  await web3Connect();
                }}>
                Connect Wallet
              </Button>
            </VStack>
          </Flex>
        </DeployLayout>
      );
    }
  };

  return (
    <SubgraphProvider key={id}>
      <Flex width="100vw" bg="background.600" flexDirection="column">
        <VStack>{render()}</VStack>
      </Flex>
    </SubgraphProvider>
  );
};

const SubgraphProvider = ({ children }) => {
  return <> {children}</>;
};
