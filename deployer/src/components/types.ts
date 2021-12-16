// Type definitions for Rebass 4.0
// Project: https://github.com/rebassjs/rebass
// Definitions by: rhysd <https://github.com/rhysd>
//                 ryee-dev <https://github.com/ryee-dev>
//                 jamesmckenzie <https://github.com/jamesmckenzie>
//                 sara f-p <https://github.com/gretzky>
//                 angusfretwell <https://github.com/angusfretwell>
//                 orzarchi <https://github.com/orzarchi>
//                 ilaiwi <https://github.com/ilaiwi>
//                 mrkosima <https://github.com/mrkosima>
//                 rafaelalmeidatk <https://github.com/rafaelalmeidatk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ResponsiveStyleValue, SystemStyleObject } from "@styled-system/css";
import * as React from "react";
import * as StyledComponents from "styled-components";
import * as StyledSystem from "styled-system";
import { ChakraProps } from "@chakra-ui/react";
export {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps extends React.RefAttributes<any> {
  as?: React.ElementType;
  css?: StyledComponents.CSSObject | string;
}

//StyledComponents.FlattenSimpleInterpolation | <-- do we need this in the css object?
/**
 * The `SxStyleProp` extension `SystemStyleObject` and `Emotion` [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type SxStyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
    >;

export interface SxProps {
  /**
   * The sx prop lets you style elements inline, using values from your theme.
   */
  sx?: SxStyleProp;
}

export interface StyledSystemProps
  extends StyledSystem.SpaceProps,
    StyledSystem.LayoutProps,
    StyledSystem.TypographyProps,
    StyledSystem.ColorProps,
    StyledSystem.FlexboxProps,
    StyledSystem.BorderProps,
    StyledSystem.PositionProps,
    StyledSystem.ShadowProps {}

export interface BoxKnownProps
  extends BaseProps,
    StyledSystem.SpaceProps,
    StyledSystem.LayoutProps,
    StyledSystem.TypographyProps,
    StyledSystem.ColorProps,
    StyledSystem.FlexboxProps,
    StyledSystem.BorderProps,
    StyledSystem.PositionProps,
    StyledSystem.ShadowProps,
    SxProps {
  variant?: StyledSystem.ResponsiveValue<string>;
  tx?: string;
}
export interface BoxProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}

export interface ButtonKnownProps extends BoxKnownProps, StyledSystem.FontWeightProps, StyledSystem.ButtonStyleProps {}
export interface ButtonProps
  extends ButtonKnownProps,
    Omit<React.HTMLProps<HTMLButtonElement>, keyof ButtonKnownProps> {}

export interface InputKnownProps extends BoxKnownProps, StyledSystem.FontWeightProps {}
export interface InputProps extends ButtonKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof InputKnownProps> {}

export interface FormKnownProps extends BoxKnownProps, StyledSystem.FontWeightProps {}
export interface FormProps extends ChakraProps, Omit<React.HTMLProps<HTMLFormElement>, keyof ChakraProps> {}

export interface CardProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}

// tslint:disable-next-line no-empty-interface
interface FlexKnownProps extends BoxKnownProps {}
export interface FlexProps extends FlexKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof FlexKnownProps> {}

export interface ImageProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLImageElement>, keyof BoxKnownProps> {}

// tslint:disable-next-line no-empty-interface
interface LinkKnownProps extends BoxKnownProps {}
export interface LinkProps extends LinkKnownProps, Omit<React.HTMLProps<HTMLAnchorElement>, keyof LinkKnownProps> {}

// tslint:disable-next-line no-empty-interface
interface TextKnownProps extends BoxKnownProps {}
export interface TextProps extends TextKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof TextKnownProps> {}

export interface HeadingProps extends TextKnownProps, Omit<React.HTMLProps<HTMLHeadingElement>, keyof TextKnownProps> {}
