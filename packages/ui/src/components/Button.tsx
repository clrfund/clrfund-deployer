// @ts-ignore.
import React from "react";
import styled, { CSSObject } from "@emotion/styled";
import { compose, space, layout, typography, color, flexbox, border, position, shadow } from "styled-system";
import css, { get } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { ButtonProps } from "./types";
import { StyledComponent } from "@emotion/styled";

const sx: (props: any) => CSSObject = (props) => css(props.sx)(props.theme);
const base: (props: any) => CSSObject = (props) => css(props.__css)(props.theme);
const buttonVariant: ({ theme, variant, tx }: { theme?: any; variant?: any; tx?: string | undefined }) => CSSObject = ({
  theme,
  variant,
  tx = "buttons",
}) => css(get(theme, tx + "." + variant, get(theme, variant)))(theme);

export const Button: StyledComponent<ButtonProps> = styled("button", {
  shouldForwardProp,
})(
  {
    textAlign: "center",
    fontSize: "inherit",
    lineHeight: "inherit",
    textDecoration: "none",
    boxSizing: "border-box",
    display: "inline-block",
  },
  base,
  buttonVariant,
  sx,
  compose(space, layout, typography, color, flexbox, border, position, shadow)
);
