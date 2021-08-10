import { StyleSheet } from 'react-native'
import { normalize } from 'src/helpers'

import { colors, fonts } from '../../theme'

export interface Props {
  disabled: boolean
  isFocus: boolean
  hasValue: boolean
  hasPlaceholder: boolean
  hasSecureSwitch: boolean
}

export default ({ disabled, isFocus, hasValue, hasPlaceholder, hasSecureSwitch }: Props) =>
  StyleSheet.create({
    container: {
      backgroundColor: disabled ? colors.background : colors.white,
    },
    input: {
      paddingTop: (isFocus || hasValue) && hasPlaceholder ? normalize(20) : normalize(16),
      paddingBottom: (isFocus || hasValue) && hasPlaceholder ? normalize(8) : normalize(12),
      paddingLeft: normalize(12),
      paddingRight: hasSecureSwitch ? normalize(46) : normalize(12),
      color: colors.black,
      backgroundColor: 'transparent',
      borderColor: colors.greyIcons,
      borderWidth: 1,
      fontFamily: fonts.default,
      fontSize: normalize(15),
    },
    placeholder: {
      position: 'absolute',
      top: isFocus || hasValue ? normalize(8) : normalize(16),
      left: normalize(12),
      color: colors.grey,
      fontSize: isFocus || hasValue ? normalize(9) : normalize(15),
    },
    sup: {
      fontSize: isFocus || hasValue ? normalize(9) : normalize(15),
    },
    secureSwitch: {
      position: 'absolute',
      top: normalize(14),
      right: normalize(14),
    },
  })
