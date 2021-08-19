import  React, { ReactNode } from "react";
import {
  Box,
  Text,
  useBreakpointValue,
  StatHelpText,
  Tooltip,
} from "@chakra-ui/react";
import { SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
interface StatsCardProps {
    title: string;
    stat: string;
  
    stat2?: string;
    icon?: ReactNode;
    statusColor: string;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, stat2, icon, statusColor } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={"5"}
        shadow={"xl"}
        border={"1px solid"}
        borderColor="gray.700"
        bg="gray.800"
        rounded={"lg"}
        gridColumn="1"
      >
        <StatLabel>{title}</StatLabel>
        <StatNumber>{stat}/9</StatNumber>
  
        <Tooltip label="0xDEAD...BEEF" fontSize="sm" placement="bottom-start">
          <StatHelpText>
            <CheckCircleIcon color="green" mr="1" /> Poseidon T3/T6
          </StatHelpText>
        </Tooltip>
        <Tooltip label="0xDEAD...BEEF" fontSize="sm" placement="bottom-start">
          <StatHelpText>
            <CheckCircleIcon color="green" mr="1" /> BatchUST/QVT Verifiers
          </StatHelpText>
        </Tooltip>
        <Tooltip label="0xDEAD...BEEF" fontSize="sm" placement="bottom-start">
          <StatHelpText>
            <CheckCircleIcon color="green" mr="1" /> Minimal Anti Collusion
            Infrastructure
          </StatHelpText>
        </Tooltip>
        <Tooltip label="0xDEAD...BEEF" fontSize="sm" placement="bottom-start">
          <StatHelpText>
            <CheckCircleIcon color="green" mr="1" /> Funding Round Controller
          </StatHelpText>
        </Tooltip>
        <Tooltip label="0xDEAD...BEEF" fontSize="sm" placement="bottom-start">
          <StatHelpText>
            <CheckCircleIcon color="green" mr="1" /> Recipient Registry
          </StatHelpText>
        </Tooltip>
        <Tooltip label="0xDEAD...BEEF" fontSize="sm" placement="bottom-start">
          <StatHelpText>
            <WarningIcon color="yellow.500" mr="1" /> User Registry
          </StatHelpText>
        </Tooltip>
      </Stat>
    );
  }
  
  export default function SystemStatus() {
    return (
      <Box
        pt={5}
        px={{ base: 2 }}
        my="20px"
        hidden={useBreakpointValue({ base: true, md: false, lg: false })}
      >
        <Text fontSize="lg" fontWeight="600">
          System Status
        </Text>
        <br />
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: 4, lg: 6 }}
        >
          <StatsCard
            title={"Contracts Deployed"}
            stat={"0"}
            statusColor="red.400"
          />
          <StatsCard
            statusColor="red.400"
            title={"System Configured"}
            stat={"0"}
          />
          <StatsCard
            statusColor="red.400"
            title={"Funding Round Started"}
            stat={"0"}
          />
          <StatsCard
            statusColor="red.400"
            title={"Front End Deployed"}
            stat={"0"}
          />
        </SimpleGrid>
      </Box>
    );
  }
  