import * as React from "react";
import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { Web3Nav, WithSubnavigation } from "../../components/navs";
import LargeWithNewsletter from "../../components/Footer";
import { SimpleGrid } from "@chakra-ui/react";
import { Sidenav } from "./Sidenav";

export const WizardLayout = ({ children }) => {
  return (
    <Flex width="100vw" bg="background.600" flexDirection="column">
      <Web3Nav />
      <Nav />
      <Box
        mt="40px"
        pt={5}
        px={{ base: 2 }}
        mx="80px"
        hidden={useBreakpointValue({ base: true, md: false, lg: false })}>
        <SimpleGrid columns={5} spacing={{ base: 2 }} minChildWidth="250px">
          <Sidenav />
          <Container>{children}</Container>
        </SimpleGrid>
      </Box>
      <Footer />
    </Flex>
  );
};
export const DeployLayout = ({ children }) => {
  return (
    <Flex width="100vw" bg="background.600" flexDirection="column">
      <Web3Nav />
      <Nav />
      <Box
        mt="40px"
        pt={5}
        px={{ base: 2 }}
        mx="80px"
        hidden={useBreakpointValue({ base: true, md: false, lg: false })}>
        <SimpleGrid columns={5} spacing={{ base: 2 }} minChildWidth="250px">
          <Container>{children}</Container>
        </SimpleGrid>
      </Box>
      <Footer />
    </Flex>
  );
};

const Nav = () => {
  return (
    <>
      <WithSubnavigation />
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

const Container = ({ children, ...rest }) => {
  return (
    <Flex gridColumn={{ md: "1 / 6", lg: "2 / 6" }} flexDirection="column" flexGrow={1} {...rest}>
      {children}
    </Flex>
  );
};
