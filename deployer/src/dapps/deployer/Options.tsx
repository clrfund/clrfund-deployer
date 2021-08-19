import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  useToken,
  Stack,
  SimpleGrid,
  Icon,
  Link,
  Badge,
  Button,
} from "@chakra-ui/react";

import { updateState, updateStep, Step } from "../../Dapp";
import { useStateMachine } from "little-state-machine";

export default function Options(): JSX.Element {
  const topBg = useColorModeValue("gray.800", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const [bottomBgHex] = useToken("colors", [bottomBg]);
  const { actions, state } = useStateMachine({ updateState, updateStep });
  const { step, loadingButtonRightOnClick } = state.data;

  const continueWithProdSettings = () => {
    actions.updateState({
      step: Step.LOADING,
      stateTreeDepth: 32,
      messageTreeDepth: 32,
      voteOptionTreeDepth: 3,
      tallyBatchSize: 8,
      messageBatchSize: 8,
    });
  };

  const Feature = (props) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={1}
            color={useColorModeValue("brand.500", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"></path>
          </Icon>
        </Flex>
        <Box ml={1}>
          <chakra.span mt={1} color={useColorModeValue("gray.700", "gray.400")}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Box pt={12} rounded="md" bg={topBg}>
      <Box bg={`linear-gradient(180deg, transparent 70%, ${bottomBgHex} 30%)`}>
        <SimpleGrid columns={[1, 2]} gap="24px" rounded="md" mx={[10, 12]} textAlign="left" minChildWidth="275px">
          <Box bg={useColorModeValue("white", "gray.800")} pt={6} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={6} pb={3}>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color={useColorModeValue("gray.900", "gray.50")}
                  lineHeight="tight">
                  DEV
                </Text>
                <Text fontSize="2xl" fontWeight="medium" color={useColorModeValue("gray.600", "gray.400")}>
                  100 users
                </Text>
                <chakra.p mb={3} fontSize="md" color={useColorModeValue("gray.500", "gray.500")}>
                  Minimal Anti Colllusion Infrastructure
                </chakra.p>
              </Box>
              <Flex
                px={6}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue("gray.50", "gray.900")}
                roundedBottom="md">
                <Stack mb={5} spacing={4}>
                  <Feature>Quadratic Funding</Feature>
                  <Feature>Simple User Registry</Feature>
                  <Feature>Simple Recipient Registry</Feature>
                  <Feature>Management Dashboard</Feature>
                </Stack>

                <Button
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  disabled
                  color={useColorModeValue("white", "gray.800")}
                  bg={useColorModeValue("green.500", "green.300")}
                  _hover={{
                    bg: useColorModeValue("gray.700", "green.200"),
                    color: useColorModeValue("white", "gray.800"),
                  }}
                  _active={{
                    bg: useColorModeValue("gray.700", "green.200"),
                    color: useColorModeValue("white", "gray.800"),
                  }}
                  _focus={{
                    bg: useColorModeValue("gray.700", "green.200"),
                    color: useColorModeValue("white", "gray.800"),
                  }}>
                  👷 Soon!
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue("white", "gray.800")} pt={6} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={6} pb={3}>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color={useColorModeValue("gray.900", "gray.50")}
                  lineHeight="tight">
                  PROD
                </Text>
                <Text fontSize="2xl" fontWeight="medium" color={useColorModeValue("gray.600", "gray.400")}>
                  1,000,000,000 users
                </Text>
                <chakra.p mb={3} fontSize="md" color={useColorModeValue("gray.500", "gray.500")}>
                  Minimal Anti Colllusion Infrastructure
                </chakra.p>
              </Box>
              <Flex
                px={6}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue("gray.50", "gray.900")}
                roundedBottom="md">
                <Stack mb={5} spacing={4}>
                  <Feature>Quadratic Funding</Feature>
                  <Feature>BrightID User Registry</Feature>
                  <Feature>Optimistic Recipient Registry</Feature>
                  <Feature>Management Dashboard</Feature>
                </Stack>
                <Button
                  w="full"
                  onClick={continueWithProdSettings}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  color={useColorModeValue("white", "gray.800")}
                  bg={useColorModeValue("green.500", "green.300")}
                  _hover={{
                    bg: useColorModeValue("gray.700", "green.200"),
                    color: useColorModeValue("white", "gray.800"),
                  }}
                  _active={{
                    bg: useColorModeValue("gray.700", "green.200"),
                    color: useColorModeValue("white", "gray.800"),
                  }}
                  _focus={{
                    bg: useColorModeValue("gray.700", "green.200"),
                    color: useColorModeValue("white", "gray.800"),
                  }}>
                  Get started
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue("white", "gray.800")} pt={6} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={6} pb={2}>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color={useColorModeValue("gray.900", "gray.50")}
                  lineHeight="tight">
                  API
                </Text>
                <Text fontSize="2xl" fontWeight="medium" color={useColorModeValue("gray.600", "gray.400")}>
                  1 user
                </Text>
                <chakra.p mb={3} fontSize="md" color={useColorModeValue("gray.500", "gray.500")}>
                  Minimal Anti Colllusion Infrastructure
                </chakra.p>
              </Box>
              <Flex
                px={6}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue("gray.50", "gray.900")}
                roundedBottom="md">
                <Stack mb={5} spacing={4}>
                  <Feature>Quadratic Funding</Feature>
                  <Feature>Simple User Registry</Feature>
                  <Feature>Simple Recipient Registry</Feature>
                  <Feature>Management Dashboard</Feature>
                </Stack>

                <Button
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  disabled
                  color={useColorModeValue("white", "gray.800")}
                  bg={useColorModeValue("green.500", "green.300")}
                  _hover={{
                    bg: useColorModeValue("gray.700", "green.200"),
                    color: useColorModeValue("white", "gray.800"),
                  }}
                  _active={{
                    bg: useColorModeValue("gray.700", "green.200"),
                    color: useColorModeValue("white", "gray.800"),
                  }}
                  _focus={{
                    bg: useColorModeValue("gray.700", "green.200"),
                    color: useColorModeValue("white", "gray.800"),
                  }}>
                  👷 Soon!
                </Button>
              </Flex>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
