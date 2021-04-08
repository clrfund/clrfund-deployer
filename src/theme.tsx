// theme.js

// 1. import `extendTheme` function
import { ColorMode, extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const mode: ColorMode | undefined = "dark";
const config = {
  initialColorMode: mode,
  useSystemColorMode: false,
};

// 3. extend the theme
export const theme = extendTheme({ config });

export default theme;
