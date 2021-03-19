// @ts-ignore.
import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Web3Form } from "./Web3Form";
import { ThemeProvider } from "./ThemeProvider.storybook";
import { Flex } from "./Flexbox";
import { FormProps } from "./types";
import "./tailwind.base.css";
import { SetMaciParametersForm } from "./FundingFactory/SetMaciParameters";

export default {
  title: "Funding Contract/SetMaciParametersForm",
  component: Web3Form.Form,
} as Meta;

const Template: Story<FormProps> = (args) => {
  return (
    <ThemeProvider>
      <Flex
        alignItems="center"
        justifyContent="center"
        minWidth={"screenWidth"}
        minHeight="screenHeight"
        mx={-2}
        bg="blueGrey.700">
        <SetMaciParametersForm />
      </Flex>
    </ThemeProvider>
  );
};

export const Form = Template.bind({});
