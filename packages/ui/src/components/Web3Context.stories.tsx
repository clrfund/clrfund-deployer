// @ts-ignore.
import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Web3Form } from "./Web3Form";
import { ThemeProvider } from "./ThemeProvider.storybook";
import { Flex } from "./Flexbox";
import { FormProps } from "./types";
import "./tailwind.base.css";
import { useForm } from "react-hook-form";

export default {
  title: "Components/Web3Context",
  component: Web3Form.Form,
} as Meta;

const Template: Story<FormProps> = (args) => {
  const { register, errors } = useForm();
  return (
    <ThemeProvider>
      <Flex className="background" alignItems="center" justifyContent="center" minWidth={"screenWidth"} mx={-2}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Web3Form.Form pt="6" pb="5">
          <Web3Form.Title>Set Recipient Registry</Web3Form.Title>
          <Web3Form.Detail my="6">This function is used to set the Recipient Registry</Web3Form.Detail>
          <Web3Form.Input
            name="_recipientRegistry"
            label="_recipientRegistry"
            placeholder="address"
            ref={register(Web3Form.registerAddress)}
            errors={errors}
          />
          <Web3Form.Submit my="305" loading={false} />
          <Web3Form.Error my="305" error={""} />
          <Web3Form.ExplorerLink my="105" url={""} />
          <Web3Form.Receipt my="105" receipt={""} />
        </Web3Form.Form>
      </Flex>
    </ThemeProvider>
  );
};

export const Form = Template.bind({});
