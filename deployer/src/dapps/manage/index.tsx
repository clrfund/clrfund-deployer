import * as React from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import {
  SystemStatus,
  Web3Nav,
  WithSubnavigation,
} from "../../components/navs";
import LargeWithNewsletter from "../../components/Footer";

export const Deploy = (address: string) => {
  const { id } = useParams();
  const { path } = useRouteMatch();

  return (
    <SubgraphProvider key={id}>
      <Flex width="100vw" bg="background.600" flexDirection="column">
        <VStack>
          <DeployLayout>
            
            <Switch>
              <Route exact path={`${path}`}></Route>
              <Route exact path={`${path}lib`}></Route>
              <Route exact path={`${path}maci`}></Route>
              <Route exact path={`${path}recipient`}></Route>
              <Route exact path={`${path}user`}></Route>
              <Route exact path={`${path}factory`}></Route>
            </Switch>
          </DeployLayout>
        </VStack>
      </Flex>
    </SubgraphProvider>
  );
};

const DeployLayout = ({ children }) => {
  return (
    <Flex width="100vw" bg="background.600" flexDirection="column">
      <Nav />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  );
};

const Nav = () => {
  return (
    <>
      <Web3Nav />
      <WithSubnavigation />
      <SystemStatus />
    </>
  );
};
const Footer = () => {
  return (
    <>
      <LargeWithNewsletter />
    </>
  );
};

const Container = ({ children }) => {
  return (
    <Flex width={["100%"]} flexDirection="column" flexGrow={1}>
      {children}
    </Flex>
  );
};
const SubgraphProvider = ({ children, key }) => {
  return <> {children}</>;
};
