import { normalize } from 'src/helpers/device'

export const colors = {
  background: '#F7F7F8',
  primary: '#6333FF',
  black: '#0D0C18',
  dark: '#0D0C18',
  green: '#2AA773',
  greenLighter: '#2AA77322',
  greyLighter: '#EEEEEE',
  grey: '#83838F',
  greyTitle: '#424242',
  greyIcons: '#AEAEAE',
  greyTag: '#C8C8CB',
  greyBorder: '#ECECEC',
  transparent: '#FFFFFF00',
  white: '#FFF',
  whitesmoke: '#F7F7F8',
  red: '#F72E56',
}

export const fonts = {
  default: 'LFTEtica',
  primaryBook: 'LFTEticaBk',
  primarySemiBold: 'LFTEticaSB',
  primaryBold: 'LFTEtica-Bold',
  secondary: 'TiemposHeadline-Regular',
}

// if you need to add sizes, set a meaningful name instead of adding "x"
export const sizes = {
  xs: normalize(12),
  s: normalize(14),
  m: normalize(16),
  l: normalize(18),
  xl: normalize(20),
  xxl: normalize(22),
  xxxl: normalize(24),
}

export const radius = {
  xs: 4,
  s: 8,
  m: 16,
  l: 40,
}
