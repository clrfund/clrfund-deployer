import React from "react";
import { Flex, Box, Text, Button, Image, VStack, Heading } from "@chakra-ui/react";

import { Web3Nav, WithSubnavigation } from "./components/navs";
import bg from "./assets/bg-a.png";
import Section2 from "./Section2";
import LargeWithNewsletter from "./components/Footer";
import { Link as RouterLink } from "react-router-dom";

export const Homepage = () => {
  return (
    <Layout>
      <Section2 />
    </Layout>
  );
};
const Layout = ({ children }) => {
  return (
    <Flex width="100vw" bg="background.600" flexDirection="column">
      <Web3Nav />
      <Nav />
      <Container>{children}</Container>

    </Flex>
  );
};
const Section = () => {
  return (
    <>
      <Box width="100%" height={["40px", "80px", "100px"]} />
      <Flex textAlign="center">
        <Box width="100%" paddingRight="15px" paddingLeft="15px" m="auto">
          <Flex justifyContent="center" flexDirection="row">
            <Box width={["100%", "80%", "70%", "60%"]}>
              <Flex flexDirection="column">
                <Heading>
                  <Text fontSize="2xl" fontWeight="bold">
                    CLR Admin Portal
                  </Text>
                </Heading>
              </Flex>
            </Box>
          </Flex>
          <Flex flexDirection="row" justifyContent="center">
            <Box width={["100%", "90.8%", "82%"]}>
              <Box>
                {/* <Image
                    transform="scale(-1,1)"
                    mt="10px"
                    src={backgroundImage}
                    alt="Hero area"
                  /> */}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
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

const Container = ({ children }) => {
  return (
    <Flex width={["100%"]} flexDirection="column" flexGrow={1}>
      <VStack>{children}</VStack>
    </Flex>
  );
};
