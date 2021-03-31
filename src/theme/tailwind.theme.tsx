import { baseColors } from './tailwind.colors'
import { tailwindMaxWidth, tailwindSpacing, tailwindWidth } from './tailwind.sizes'

export const breakpoints = ['640px', '768px', '1024px', '1280px', '1536px']

export const space = {
  px: '1px',
  '0': '0px',
  '005': '0.125rem',
  '1': '0.25rem',
  '105': '0.375rem',
  '2': '0.5rem',
  '205': '0.625rem',
  '3': '0.75rem',
  '305': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
}

export const sizes = {
  ...tailwindSpacing,
  ...tailwindMaxWidth,
  ...tailwindWidth,
  full: '100%',
  screenHeight: '100vh',
  screenWidth: '100vw',
}

export const baseFonts = {
  sans: {
    'ui-sans-serif': 'ui-sans-serif',
    'system-ui': 'system-ui',
    '-apple-system': '-apple-system',
    blinkmacsystemfont: 'BlinkMacSystemFont',
    '"segoe"': '"Segoe UI"',
    roboto: 'Roboto',
    '"helvetica"': '"Helvetica Neue"',
    arial: 'Arial',
    '"noto"': '"Noto Sans"',
    'sans-serif': 'sans-serif',
    '"apple-emoji"': '"Apple Color Emoji"',
    '"segoe-emoji"': '"Segoe UI Emoji"',
    '"segoe-symbol"': '"Segoe UI Symbol"',
    '"noto-emoji"': '"Noto Color Emoji"',
    safe: 'Inter, system-ui, sans-serif',
  },
  serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ],
}

export const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: 'Apex Mk3, Roboto, sans-serif',
  error: 'Helvetica Neue, sans-serif',
  detail: 'Helvetica Neue, sans-serif',
  paragraph: 'Apex Mk3, sans-serif',
  monospace: '"Roboto Mono", monospace',
  futura: 'Futura, Roboto Mono, monospace',
}

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
}
export const colors = {
  ...baseColors,
  transparent: 'transparent',
  grayDark: baseColors.gray[700],
  text: baseColors.black,
  background: baseColors.blueGray[100],
  primary: baseColors.blueGray[600],
  primaryHover: baseColors.blueGray[500],
  secondary: baseColors.gray[600],
  muted: baseColors.gray[300],
  success: baseColors.green[300],
  info: baseColors.blue[400],
  warning: baseColors.yellow[300],
  danger: baseColors.red[300],
  light: baseColors.gray[100],
  dark: baseColors.gray[800],
  textMuted: baseColors.gray[600],
}
export const borderWidths = {
  default: '1px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '8': '8px',
}

export const flex = {
  '1': '1 1 0%',
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
}

const commonButtonStyles = {
  py: 2,
  px: 3,
  cursor: `pointer`,
  fontSize: `100%`,
  lineHeight: `inherit`,
}

export const buttons = {
  simple: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    '&:hover': {
      backgroundColor: `primaryHover`,
    },
  },
  pill: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `full`,
    '&:hover': {
      backgroundColor: `primaryHover`,
    },
  },
  outline: {
    ...commonButtonStyles,
    backgroundColor: `transparent`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `primary`,
    color: `primary`,
    fontWeight: `semibold`,
    borderRadius: `default`,
    '&:hover': {
      backgroundColor: `primary`,
      color: `white`,
      borderColor: `transparent`,
    },
  },
  bordered: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `primaryHover`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    '&:hover': {
      backgroundColor: `primaryHover`,
    },
  },
  disabled: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    opacity: 0.5,
    cursor: `not-allowed`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
  },
  '3D': {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    borderBottomWidth: `4px`,
    borderBottomStyle: `solid`,
    borderBottomColor: `primaryHover`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    transition: `transform 0.3s ease-in-out`,
    '&:hover': {
      transform: `translateY(-1px)`,
    },
  },
  elevated: {
    ...commonButtonStyles,
    backgroundColor: `white`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `gray.4`,
    color: `text`,
    fontWeight: `bold`,
    borderRadius: `default`,
    boxShadow: `default`,
    '&:hover': {
      backgroundColor: `gray.100`,
    },
  },
}

export const baseFontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
}

export const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
}

const commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: `100%`,
  borderRadius: `default`,
  appearance: `none`,
  lineHeight: `tight`,
}

export const inputs = {
  shadow: {
    ...commonInputStyles,
    border: `none`,
    color: `gray.7`,
    boxShadow: `default`,
    '&:focus': {
      outline: `none`,
      boxShadow: `outline`,
    },
  },
  inline: {
    ...commonInputStyles,
    backgroundColor: `gray.2`,
    borderWidth: `2px`,
    borderStyle: `solid`,
    borderColor: `gray.2`,
    color: `gray.7`,
    '&:focus': {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
  underline: {
    ...commonInputStyles,
    backgroundColor: `transparent`,
    border: `none`,
    borderBottomWidth: `2px`,
    borderBottomStyle: `solid`,
    borderBottomColor: `primary`,
    borderRadius: `0px`,
    color: `gray.7`,
    '&:focus': {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
}

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

export const baseLineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  '3': '.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
}

export const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
}

export const radii = {
  none: '0px',
  sm: '0.125rem',
  default: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

export const shadows = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  none: 'none',
}

export const zIndices = {
  auto: 'auto',
  '0': '0',
  '10': '10',
  '20': '20',
  '30': '30',
  '40': '40',
  '50': '50',
}

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  m: 0,
  mb: 1,
}

export const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  h1: {
    ...heading,
    fontSize: 6,
    mt: 2,
  },
  h2: {
    ...heading,
    fontSize: 5,
    mt: 2,
  },
  h3: {
    ...heading,
    fontSize: 4,
    mt: 3,
  },
  h4: {
    ...heading,
    fontSize: 3,
  },
  h5: {
    ...heading,
    fontSize: 2,
  },
  h6: {
    ...heading,
    fontSize: 1,
    mb: 2,
  },
  code: {},
  pre: {},
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3,
  },
}

export const transforms = {
  transformOrigin: {
    center: 'center',
    top: 'top',
    'top-right': 'top right',
    right: 'right',
    'bottom-right': 'bottom right',
    bottom: 'bottom',
    'bottom-left': 'bottom left',
    left: 'left',
    'top-left': 'top left',
  },
  translate: {
    ...tailwindSpacing,
    '-full': '-100%',
    '-1/2': '-50%',
    '1/2': '50%',
    full: '100%',
  },
  scale: {
    '0': '0',
    '50': '.5',
    '75': '.75',
    '90': '.9',
    '95': '.95',
    '100': '1',
    '105': '1.05',
    '110': '1.1',
    '125': '1.25',
    '150': '1.5',
  },
  rotate: {
    '-180': '-180deg',
    '-90': '-90deg',
    '-45': '-45deg',
    '0': '0',
    '45': '45deg',
    '90': '90deg',
    '180': '180deg',
  },
  skew: {
    '-12': '-12deg',
    '-6': '-6deg',
    '-3': '-3deg',
    '0': '0',
    '3': '3deg',
    '6': '6deg',
    '12': '12deg',
  },
}

export const transitions = {
  property: {
    none: 'none',
    all: 'all',
    default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
  },
  timingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  duration: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms',
  },
}

export const tailwind = {
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  sizes,
  shadows,
  space,
  radii,
  zIndices,
  styles,
  buttons,
  inputs,
  transforms,
  transitions,
  googleFonts: 'https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,700&display=swap',
}

export default tailwind
