// @ts-ignore.
import React from "react";
import styled, { CSSObject } from "@emotion/styled";
import { compose, space, layout, color, flexbox, border, position, shadow } from "styled-system";
import css, { get } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { FormProps } from "./types";
import { StyledComponent } from "@emotion/styled";

export interface ThemeFormProps extends FormProps {
  theme?: any;
}
const sx: (props: ThemeFormProps) => CSSObject = (props) => css(props.sx)(props.theme);

const variant: ({ theme, variant, tx }: { theme?: any; variant?: any; tx?: string | undefined }) => CSSObject = ({
  theme,
  variant,
  tx = "form",
}) => css(get(theme, tx + "." + variant, get(theme, variant)))(theme);

// /////////////FORM COMPONENTS////////////////
export const FormComponent: StyledComponent<FormProps> = styled("form", {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
    margin: 0,
  },

  variant,
  sx,
  compose(space, layout, color, flexbox, border, position, shadow)
);
