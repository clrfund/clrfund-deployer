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
  title: "Components/Web3Form",
  component: Web3Form.Form,
} as Meta;

const Template: Story<FormProps> = (args) => {
  const { register, errors } = useForm();
  return (
    <ThemeProvider>
      <Flex
        alignItems="center"
        justifyContent="center"
        minWidth={"screenWidth"}
        minHeight="screenHeight"
        mx={-2}
        bg="blueGrey.700">
        <Web3Form.Form pt="6" pb="5">
          <Web3Form.Title>SetMaciParameters</Web3Form.Title>
          <Web3Form.Detail>This function is used to set Maci parameters</Web3Form.Detail>
          <Web3Form.Input
            name="_stateTreeDepth"
            label="_stateTreeDepth"
            placeholder="uint8"
            ref={register(Web3Form.registerUint8)}
            errors={errors}
          />
          <Web3Form.Input
            name="_messageTreeDepth"
            label="_messageTreeDepth"
            placeholder="uint8"
            ref={register(Web3Form.registerUint8)}
            errors={errors}
          />
          <Web3Form.Input
            name="_voteOptionTreeDepth"
            label="_voteOptionTreeDepth"
            placeholder="uint8"
            ref={register(Web3Form.registerUint8)}
            errors={errors}
          />
          <Web3Form.Input
            name="_tallyBatchSize"
            label="_tallyBatchSize"
            placeholder="uint8"
            ref={register(Web3Form.registerUint8)}
            errors={errors}
          />
          <Web3Form.Input
            name="_messageBatchSize"
            label="_messageBatchSize"
            placeholder="uint8"
            ref={register(Web3Form.registerUint8)}
            errors={errors}
          />
          <Web3Form.Input
            name="_batchUstVerifier"
            label="_batchUstVerifier"
            placeholder="address"
            ref={register(Web3Form.registerAddress)}
            errors={errors}
          />
          <Web3Form.Input
            name="_qvtVerifier"
            label="_qvtVerifier"
            placeholder="address"
            ref={register(Web3Form.registerAddress)}
            errors={errors}
          />
          <Web3Form.Input
            name="_signUpDuration"
            label="_signUpDuration"
            placeholder="uint256"
            ref={register(Web3Form.registerUint256)}
            errors={errors}
          />
          <Web3Form.Input
            name="_votingDuration"
            label="_votingDuration"
            placeholder="uint256"
            ref={register(Web3Form.registerUint256)}
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
