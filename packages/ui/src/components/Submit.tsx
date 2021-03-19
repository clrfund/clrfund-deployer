import styled, { CSSObject } from "@emotion/styled";
import { compose, space, layout, typography, color, flexbox, border, position, shadow } from "styled-system";
import css, { get } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { InputProps } from "./types";
import { StyledComponent } from "@emotion/styled";

export interface InputThemeProps extends InputProps {
  theme?: any;
}
const sx: (props: InputThemeProps) => CSSObject = (props) => css(props.sx)(props.theme);

const variant: ({ theme, variant, tx }: { theme?: any; variant?: any; tx?: string | undefined }) => CSSObject = ({
  theme,
  variant,
  tx = "submit",
}) => css(get(theme, tx + "." + variant, get(theme, variant)))(theme);

export const Submit: StyledComponent<any> = styled("input", {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
  },

  variant,
  sx,
  compose(space, layout, typography, color, flexbox, border, position, shadow)
);
