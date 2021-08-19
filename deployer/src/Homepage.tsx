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
      <Section />
      <Image minWidth="300px" maxWidth="60%" src={bg} />
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
      <Footer />
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
                <Box>
                  <Text
                    fontFamily="heading"
                    color="text.500"
                    fontSize={["36px", "40px", "48px"]}
                    fontWeight="700"
                    fontStyle="normal"
                    letterSpacing="-1.58px"
                    lineHeight={["48px", "52px", "60px"]}>
                    Fund your community’s public goods with provably fair, collusion-resistant quadratic funding.{" "}
                  </Text>
                  <Text
                    fontFamily="body"
                    color="#687497"
                    fontSize="lg"
                    fontWeight="400"
                    fontStyle="normal"
                    letterSpacing="-0.58px"
                    lineHeight={["28px"]}
                    padding={["0px", "0px", "0px 50px"]}
                    mt="5">
                    Deploy your own quadratic funding application with the Clr.Fund Deployer. Empower your community to
                    choose and fund(!) its own future, in a fully decentralized manner.
                  </Text>
                </Box>
                <Box margin="0px -8px -20px -8px" marginTop="45px">
                  <Button
                    as={RouterLink}
                    margin="0px 8px 20px 8px"
                    width="250px"
                    height="60px"
                    bg="green.300"
                    color="text.500"
                    fontSize="16px"
                    fontWeight="700"
                    letterSpacing="-0.618px"
                    lineHeight="normal"
                    to="/dashboard/deploy">
                    Get Started
                  </Button>
                  <Button
                    margin="0px 8px 20px 8px"
                    width="200px"
                    height="60px"
                    border="1px solid white"
                    bg="background.600"
                    color="text.500"
                    fontSize="16px"
                    fontWeight="700"
                    letterSpacing="-0.618px"
                    lineHeight="normal"
                    to="/dashboard/deploy">
                    Learn More
                  </Button>
                </Box>
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
