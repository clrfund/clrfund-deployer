// @ts-ignore.
import React from "react";
import styled, { CSSObject } from "@emotion/styled";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  // AnimatePresenceProps,
  // MotionProps,
  // SharedLayoutProps,
  // VisualElement,
} from "framer-motion";
import { compose, space, layout, typography, color, flexbox, border, position, shadow } from "styled-system";
import css, { get } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { BoxProps } from "./types";
import { StyledComponent } from "@emotion/styled";

export interface ThemeBoxProps extends BoxProps {
  theme?: any;
}
const sx: (props: ThemeBoxProps) => CSSObject = (props) => css(props.sx)(props.theme);

const variant: ({ theme, variant, tx }: { theme?: any; variant?: any; tx?: string | undefined }) => CSSObject = ({
  theme,
  variant,
  tx = "variants",
}) => css(get(theme, tx + "." + variant, get(theme, variant)))(theme);

// const variant = ({ theme, variant, tx = "variants" }) =>
//   css(get(theme, tx + "." + variant, get(theme, variant)))(theme);

export const Box: StyledComponent<ThemeBoxProps> = styled("div", {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },

  variant,
  sx,
  compose(space, layout, typography, color, flexbox, border, position, shadow)
);

export const Flex: StyledComponent<ThemeBoxProps> = styled("div", {
  shouldForwardProp,
})(
  {
    display: "flex",
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },

  variant,
  sx,
  compose(space, layout, typography, color, flexbox, border, position, shadow)
);

export const Motion: StyledComponent<any> = styled(motion.div, {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },

  variant,
  sx,
  compose(space, layout, typography, color, flexbox, border, position, shadow)
);

export const Animate: StyledComponent<any> = styled(AnimatePresence, {
  shouldForwardProp,
})(
  {
    display: "flex",
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },

  variant,
  sx,
  compose(space, layout, typography, color, flexbox, border, position, shadow)
);

export const Layout: StyledComponent<any> = styled(AnimateSharedLayout, {
  shouldForwardProp,
})(
  {
    display: "flex",
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },

  variant,
  sx,
  compose(space, layout, typography, color, flexbox, border, position, shadow)
);
