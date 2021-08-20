import * as React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  HStack,
  Link,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useBreakpointValue,
  StatHelpText,
  Tooltip,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useWeb3Context } from "../../hooks/Web3Provider";

import Logo from "../../assets/logo.svg";

import queryString from "query-string";
import { useLocation } from "react-router-dom";

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

export const Web3Nav = () => {
  const { web3Start, web3Connect, web3Logout } = useWeb3Context();
  const { search } = useLocation();
  const values = queryString.parse(search);
  return (
    <Box width="100%" mx="auto" px="40px">
      <Flex height="80px" justifyContent="left" flexDirection="row">
        <FlexBox flexGrow={0} justifyContent="center">
        <Image p={4} height={"60px"} src={Logo}  />

          
        
        </FlexBox>
        <FlexBox justifyContent="left">
          
        </FlexBox>
        <HStack justifySelf="flex-end" spacing={1}>
    
          <Button
                  justifySelf="flex-end"
                  onClick={async () => {
                    await web3Start();
                    await web3Connect();
                  }}>
                  Web3 Login
                </Button>
          <Button justifySelf="flex-end" onClick={web3Logout}>
            Web3 Logout
          </Button>
        </HStack>
      </Flex>
      <Flex justifyContent="center" flexDirection="row"></Flex>
    </Box>
  );
};

export function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "background.600")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: "48px" }}
        borderTop={1}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
    
  
          <Flex display={{ base: "none", md: "flex" }} ml={0}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            mr="3"
            display={{ sm: "none", base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"background.600"}
            as={RouterLink}
            to="/deploy"
            _hover={{
              bg: "secondary.300",
              color: "gray.50",
            }}
          >
            Set Factory Contract Address
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

interface StatsCardProps {
  title: string;
  stat: string;

  stat2?: string;
  icon?: React.ReactNode;
  statusColor: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, stat2, icon, statusColor } = props;
  return (
    <Stat>
      <StatLabel>{title}</StatLabel>
      <StatNumber>{stat}/9</StatNumber>

      <Tooltip label="0xDEAD...BEEF" fontSize="sm" placement="bottom-start">
        <StatHelpText>
          <CheckCircleIcon color={"green"} mr="1" /> Poseidon T3/T6
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

export function SystemStatus() {
  return (
    <Box
      maxW="7xl"
      pt={5}
      px={{ base: 2 }}
      my="20px"
      mx="30px"
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
          stat={"----------"}
          statusColor="red.400"
        />
        <StatsCard
          statusColor="red.400"
          title={"System Configured"}
          stat={"----------"}
        />
        <StatsCard
          statusColor="red.400"
          title={"Funding Round Started"}
          stat={"----------"}
        />
        <StatsCard
          statusColor="red.400"
          title={"Front End Deployed"}
          stat={"----------"}
        />
      </SimpleGrid>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Text
                p={2}
                fontFamily="helvetica"
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Text>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                fontFamily="helvetica"
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      as={RouterLink}
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("link.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            fontFamily="helvetica"
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.500" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text color="#687497" fontSize={"sm"}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "background.600")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
      
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={500}
          fontFamily="helvetica"
          color={useColorModeValue("gray.50", "gray.100")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                as={RouterLink}
                fontFamily="helvetica"
                key={child.label}
                py={2}
                to={child.href}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Deploy",
    children: [
      {
        label: "Deploy Wizard",
        subLabel:
          "Automated, Zero Stress, Quadratic Funding Instance Deployer. Deploys and configures MACI and other dependencies. ",
        href: "/dashboard/deploy",
      },
      {
        label: "Deploy Library Contracts",
        subLabel:
          "Manually deploy zkSnark libraries for MACI, these libraries are needed for ZKP circuits and can be reused.",
        href: "/dashboard/deploy/lib",
      },
      {
        label: "Deploy MACI Factory",
        subLabel:
          "Manually deploy smart contracts for MACI Factory, currently does not support coordinator set up.",
        href: "/dashboard/deploy/maci",
      },
      {
        label: "Deploy Funding Factory",
        subLabel:
          "Manually deploy smart contracts for Funding Factory, this is the core contract interacts with users.",
        href: "/dashboard/deploy/factory",
      },

      {
        label: "Deploy Recipient Registry",
        subLabel:
          "Manually deploy smart contracts for Recipient Registries. There are two options: Simple and Optimistic.",
        href: "/dashboard/deploy/recipient",
      },
      {
        label: "Deploy User Registry",
        subLabel:
          "Manually deploy smart contracts for user Registries. There are two options supported: Simple, Optimistic",
        href: "/dashboard/deploy/user",
      },
    ],
  },
  {
    label: "Manage",
    children: [
      {
        label: "Configure MACI Factory",
        subLabel: "Configure smart contracts for MACI Factory. Transfer or Renounce ownership.",
        href: "/dashboard/configure/maci",
      },
      {
        label: "Configure Funding Factory",
        subLabel: "Configure smart contracts for Funding Factory. Set User/Recipient Registries, token, funding source, MACI parameters, and Coordinator. You may also deploy a new Round, transfer matching funds, or cancel the current round.",
        href: "/dashboard/configure/fundingfactory",
      },

      {
        label: "Configure Optimistic Recipient Registry",
        subLabel: "Configure smart contracts for Optimistic Recipient Registries. Add recipient, Challenge Request, Execute Request, Remove Recipient, Set Base deposit, Set Challenge Period Duration, Set Max Recipients, or Transfer Ownership.",
        href: "/dashboard/configure/optimisticrecipientregistry",
      },
      {
        label: "Configure Kleros GTCR Adapter",
        subLabel: "Configure smart contracts for Kleros GTCR Adapter Recipient Registries. Add and Remove Recipients or Set max Recipients.",
        href: "/dashboard/configure/klerosgtcr",
      },
      {
        label: "Configure Simple User Registry",
        subLabel: "Configure smart contracts for Simple User Registries. Add and Remove Contributors or Renounce and Transfer ownership.",
        href: "/dashboard/configure/simpleuserregistry",
      },
      {
        label: "Configure Bright ID User Registry",
        subLabel: "Configure smart contracts for BrightID User Registries. Register or Sponsor new users, change settings, or renounce and transfer ownership.",
        href: "/dashboard/configure/brightiduserregistry",
      },
    ],
  },
  {
    label: "Learn",
    href: "/qw",
  },
  {
    label: "Contribute",
    href: "/qw",
  },
];
