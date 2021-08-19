import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormHelperText,
  Button,
  InputRightAddon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { updateState, updateStep } from "../../Dapp";
import { RegisterHelper } from "../../components/Web3Form";

const registerAddress: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^0x[a-fA-F0-9]{40}$/,
    message: "Invalid ethereum address",
  },
  setValueAs: (value) => value,
};
const registerUint256: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^[0-9]+$/,
    message: "Invalid amount",
  },
  setValueAs: (value) => value,
};
const registerString: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /[a-zA-Z0-9]+/,
    message: "Invalid string in call data",
  },
  setValueAs: (value) => value,
};

export default function FormComp() {
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")} py={10}>
      <Layout
        heading="Funding Round Details"
        description="Select the signup and voting durations for individual funding rounds.">
        <Step3 />
      </Layout>
      <Layout
        heading="Token"
        description="Base token to accept donations in and use for matching pool. Must be ERC20 contract native to the EVM network.">
        <Step1 />
      </Layout>

      <Layout
        heading="Coordinator"
        description="Details for the coordinator address and public keys, make sure they know what they're doing. Need a coordinator? Reach out to help@clr.fund">
        <Step2 />
      </Layout>
    </Box>
  );
}

const Step1 = () => {
  const { register, handleSubmit, errors } = useForm();
  const { actions, state } = useStateMachine({ updateState, updateStep });

  const onSubmit = async (data) => {
    actions.updateState({
      tokenAddress: data.tokenAddress,
      fundingSource: data.fundingSource,
    });
  };
  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)} shadow="base" rounded={[null, "md"]} overflow={{ sm: "hidden" }}>
      <Stack px={4} py={5} bg={useColorModeValue("white", "gray.700")} spacing={6} p={{ sm: 6 }}>
        <SimpleGrid columns={3} spacing={6} minChildWidth="100px">
          <FormControl as={GridItem} colSpan={{ lg: 3, xl: 2 }}>
            <FormLabel fontSize="sm" fontWeight="md" color={useColorModeValue("gray.700", "gray.50")}>
              Token Address
            </FormLabel>
            <InputGroup size="sm">
              <Input
                name={"tokenAddress"}
                ref={register(registerAddress)}
                placeholder="0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
            <FormHelperText fontSize="x-small">*Must be an ERC20 compatible token.</FormHelperText>
          </FormControl>
          <FormControl as={GridItem} colSpan={{ lg: 3, xl: 2 }}>
            <FormLabel fontSize="sm" fontWeight="md" color={useColorModeValue("gray.700", "gray.50")}>
              Matching Pool Address
            </FormLabel>
            <InputGroup size="sm">
              <Input
                name={"fundingSource"}
                ref={register(registerAddress)}
                placeholder="0x"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
            <FormHelperText fontSize="x-small">
              *This address must call Approve on the ERC20 contracts to allow the funding contracts to spend on it's
              behalf.
            </FormHelperText>
          </FormControl>
        </SimpleGrid>
      </Stack>
      <Box px={{ base: 4, sm: 6 }} py={3} bg={useColorModeValue("gray.50", "gray.900")} textAlign="right">
        <Button type="submit" colorScheme="brand" _focus={{ shadow: "" }} fontWeight="md">
          Save
        </Button>
      </Box>
    </chakra.form>
  );
};

const Step2 = () => {
  const { register, handleSubmit, errors } = useForm();
  const { actions, state } = useStateMachine({ updateState, updateStep });

  const onSubmit = async (data) => {
    actions.updateState({
      coordinatorAddress: data.coordinatorAddress,
      coordinatorPubKey: data.coordinatorPubKey,
    });
  };
  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)} shadow="base" rounded={[null, "md"]} overflow={{ sm: "hidden" }}>
      <Stack px={4} py={5} bg={useColorModeValue("white", "gray.700")} spacing={6} p={{ sm: 6 }}>
        <SimpleGrid columns={3} spacing={6} minChildWidth="100px">
          <FormControl as={GridItem} colSpan={{ lg: 3, xl: 2 }}>
            <FormLabel fontSize="sm" fontWeight="md" color={useColorModeValue("gray.700", "gray.50")}>
              Coordinator Address
            </FormLabel>
            <InputGroup size="sm">
              <Input
                name={"coordinatorAddress"}
                ref={register(registerAddress)}
                placeholder="0x"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
          </FormControl>
          <FormControl as={GridItem} colSpan={{ lg: 3, xl: 2 }}>
            <FormLabel fontSize="sm" fontWeight="md" color={useColorModeValue("gray.700", "gray.50")}>
              Coordinator Public Key
            </FormLabel>
            <InputGroup size="sm">
              <Input
                name={"coordinatorPubKey"}
                ref={register(registerString)}
                placeholder="macipk.2c93053fcc4dc13dfb1cdd679aea39d1667af3d937e1430766e514fd24043999"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
            <FormHelperText fontSize="x-small">
              *This address must call Approve on the ERC20 contracts to allow the funding contracts to spend on it's
              behalf.
            </FormHelperText>
          </FormControl>
        </SimpleGrid>
      </Stack>
      <Box px={{ base: 4, sm: 6 }} py={3} bg={useColorModeValue("gray.50", "gray.900")} textAlign="right">
        <Button type="submit" colorScheme="brand" _focus={{ shadow: "" }} fontWeight="md">
          Save
        </Button>
      </Box>
    </chakra.form>
  );
};

const Step3 = () => {
  const { register, handleSubmit, errors } = useForm();
  const { actions, state } = useStateMachine({ updateState, updateStep });

  const onSubmit = async (data) => {
    actions.updateState({
      signupDuration: data.signupDuration,
      votingDuration: data.votingDuration,
    });
  };
  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)} shadow="base" rounded={[null, "md"]} overflow={{ sm: "hidden" }}>
      <Stack px={4} py={5} bg={useColorModeValue("white", "gray.700")} spacing={6} p={{ sm: 6 }}>
        <SimpleGrid columns={3} spacing={6} minChildWidth="100px">
          <FormControl as={GridItem} colSpan={{ lg: 3, xl: 2 }}>
            <FormLabel fontSize="sm" fontWeight="md" color={useColorModeValue("gray.700", "gray.50")}>
              Signup Duration
            </FormLabel>
            <InputGroup size="sm">
              <Input
                name={"signupDuration"}
                ref={register(registerString)}
                placeholder="9000"
                focusBorderColor="brand.400"
                rounded="md"
              />
              <InputRightAddon bg={useColorModeValue("gray.50", "gray.600")} fontSize="small" children="seconds" />
            </InputGroup>
            <FormHelperText fontSize="x-small">
              *This is the amount of time in seconds contributors and recipients will have to sign up.
            </FormHelperText>
          </FormControl>
          <FormControl as={GridItem} colSpan={{ lg: 3, xl: 2 }}>
            <FormLabel fontSize="sm" fontWeight="md" color={useColorModeValue("gray.700", "gray.50")}>
              Voting Duration
            </FormLabel>
            <InputGroup size="sm">
              <Input
                name={"votingDuration"}
                ref={register(registerString)}
                placeholder="9000"
                focusBorderColor="brand.400"
                rounded="md"
              />
              <InputRightAddon bg={useColorModeValue("gray.50", "gray.600")} fontSize="small" children="seconds" />
            </InputGroup>
            <FormHelperText fontSize="x-small">
              *This is the amount of time in seconds contributors will have to make donations.
            </FormHelperText>
          </FormControl>
        </SimpleGrid>
      </Stack>
      <Box px={{ base: 4, sm: 6 }} py={3} bg={useColorModeValue("gray.50", "gray.900")} textAlign="right">
        <Button type="submit" colorScheme="brand" _focus={{ shadow: "" }} fontWeight="md">
          Save
        </Button>
      </Box>
    </chakra.form>
  );
};

const Layout = ({ children, heading, description }) => {
  return (
    <>
      <Box>
        <SimpleGrid display={{ base: "initial", md: "grid" }} columns={{ md: 3 }} spacing={{ md: 6 }}>
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                {heading}
              </Heading>
              <Text mt={1} fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                {description}
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            {children}
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box borderTop="solid 1px" borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}></Box>
        </Box>
      </Box>
    </>
  );
};
