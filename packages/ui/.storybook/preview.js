import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./configs/contexts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(withContexts(contexts));
