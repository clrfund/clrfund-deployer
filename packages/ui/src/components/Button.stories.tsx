// @ts-ignore.
import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Flex, Box } from "./Flexbox";
import { Button } from "./Button";
import { ThemeProvider } from "./ThemeProvider";
import { ButtonProps } from "./types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    bg: { control: "color" },
    color: { control: "color" },
    borderColor: { control: "color" },
    width: { control: { type: "range", min: 100, max: 1000, step: 10 } },
    height: { control: { type: "range", min: 27, max: 200, step: 10 } },
    variant: { control: { type: "text" } },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider theme={null}>
    <Flex minWidth={"screenWidth"} mx={-2}>
      <Box width="1/2" bg="grey.100">
        <Flex height="160px" justifyContent="center" alignItems="center">
          <Button
            onClick={() => {
              console.log("test1");
            }}
            px="7"
            py="5"
            bg="black"
            color="white"
            minWidth="xs"
            fontFamily="sans.safe"
            fontSize="sm"
            fontWeight="light"
            letterSpacing="tight"
            lineHeight="loose"
            borderStyle="solid"
            borderColor="blue.200"
            borderWidth="2"
            borderBottom="2px solid"
            borderBottomColor="red.400"
            sx={{
              "&:hover": {
                backgroundColor: "blueGray.900",
              },
            }}
            {...args}>
            Custom Button
          </Button>
        </Flex>
      </Box>
      <Box width="1/2" bg="grey.200">
        <Flex height="160px" justifyContent="center" alignItems="center">
          <Button
            onClick={() => {
              console.log("test2");
            }}
            {...args}>
            Button
          </Button>
        </Flex>
      </Box>
    </Flex>
  </ThemeProvider>
);

export const Simple = Template.bind({});
Simple.args = {
  variant: "simple",
};

export const Pill = Template.bind({});
Pill.args = {
  variant: "pill",
};

export const Bordered = Template.bind({});
Bordered.args = {
  variant: "bordered",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};
