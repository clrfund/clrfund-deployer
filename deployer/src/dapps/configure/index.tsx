import * as React from "react";
import { Box, Text, Button, Flex, HStack, VStack, Image, Heading } from "@chakra-ui/react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { SystemStatus, Web3Nav, WithSubnavigation } from "../../components/navs";
import LargeWithNewsletter from "../../components/Footer";
import { useWeb3Context } from "../../hooks/Web3Provider";
import { ConfigureLayout } from "./ConfigureLayout";
import { ConfigureDapp } from "./ConfigureDapp";
import Q from "../../assets/Q.png";
import { ConfigureMaciDapp } from "./ConfigureMaciDapp";
import { ConfigureFundingFactoryDapp } from "./ConfigureFundingFactoryDapp";
import { ConfigureOptimisticRecipientRegistryDapp } from "./ConfigureOptimisticRecipientRegistryDapp";
import { ConfigureKlerosGtcrDapp } from "./ConfigureKlerosGtcrDapp";
import { ConfigureSimpleUserRegistryDapp } from "./ConfigureSimpleUserRegistryDapp";
import { ConfigureBrightIdUserRegistryDapp } from "./ConfigureBrightIdUserRegistryDapp";
export const Configure = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const { library, account, web3Start, web3Connect } = useWeb3Context();

  const render = () => {
    if (library && account) {
      return (
        <ConfigureLayout>
        <Switch>
          <Route exact path={`${path}`}></Route>
          <Route exact path={`${path}maci`}>
            
              <ConfigureMaciDapp />
           
          </Route>
          <Route exact path={`${path}fundingfactory`}>
            <ConfigureFundingFactoryDapp />
          </Route>
          <Route exact path={`${path}optimisticrecipientregistry`}>
            <ConfigureOptimisticRecipientRegistryDapp />
          </Route>
          <Route exact path={`${path}klerosgtcr`}>
            <ConfigureKlerosGtcrDapp />
          </Route>
          <Route exact path={`${path}simpleuserregistry`}>
            <ConfigureSimpleUserRegistryDapp />
          </Route>
          <Route exact path={`${path}brightiduserregistry`}>
            <ConfigureBrightIdUserRegistryDapp />
          </Route>
        </Switch>
        </ConfigureLayout>
      );
    } else {
      return (
        <ConfigureLayout>
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
        </ConfigureLayout>
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

const SubgraphProvider = ({ children, key }) => {
  return <> {children}</>;
};
