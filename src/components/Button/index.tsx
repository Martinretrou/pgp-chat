import Box from '../Box'
import Text from '../Text'
import React from 'react'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native'
import { getTextFontFamily, normalize } from 'src/helpers'
import { colors, fonts, radius } from 'src/theme'

export interface Props extends TouchableOpacityProps {
  children?: React.ReactNode
  alt?: boolean
  loading?: number /* 0..1 */
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle
  disabled: boolean
  onPress: () => any
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  size?: 's' | 'm'
  bg?: keyof typeof colors
  color?: keyof typeof colors
  borderColor?: keyof typeof colors
  font?: keyof typeof fonts
}

interface StyleProps {
  alt: boolean
  loading: number /* 0..1 */
  disabled: boolean
  size: 's' | 'm'
  bg: keyof typeof colors
  color: keyof typeof colors
  hasRightIcon: boolean
  borderColor: keyof typeof colors
  font?: keyof typeof fonts
}

const composeStyle = ({
  alt,
  disabled,
  loading,
  size,
  bg,
  color,
  hasRightIcon,
  borderColor,
  font,
}: StyleProps) =>
  StyleSheet.create({
    touchable: {
      position: 'relative',
      backgroundColor: disabled ? colors.greyIcons : alt ? colors.white : colors[bg],
      borderColor: colors[borderColor],
      borderWidth: borderColor && 1,
      borderRadius: radius.m,
    },
    loader: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: `${loading * 100}%`,
      backgroundColor: alt ? colors.black : colors.white,
      opacity: 0.5,
    },
    wrapper: {
      justifyContent: 'center',
      paddingTop: size === 's' ? normalize(8) : normalize(14),
      paddingBottom: size === 's' ? normalize(8) : normalize(12),
      paddingHorizontal: size === 's' ? normalize(12) : normalize(16),
    },
    text: {
      paddingHorizontal: normalize(8),
      textAlign: 'center',
      color: alt ? colors.primary : colors[color],
      marginRight: hasRightIcon ? normalize(32) : 0,
      fontFamily: getTextFontFamily(font),
    },
    icon: {
      color: alt ? colors.primary : colors[color],
    },
    iconRight: {
      marginLeft: 'auto',
    },
  })

const Button = ({
  children,
  alt,
  loading,
  style,
  textStyle,
  onPress,
  disabled,
  leftIcon,
  rightIcon,
  size,
  bg,
  color,
  borderColor,
  font,
}: Props) => {
  const styles = composeStyle({
    alt,
    loading,
    disabled,
    size,
    color,
    bg,
    borderColor,
    font,
    hasRightIcon: React.isValidElement(rightIcon),
  })

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.touchable, style]}>
      <View>
        <Box fd="row" ai="center" style={styles.wrapper}>
          {React.isValidElement(leftIcon) &&
            React.cloneElement(leftIcon, { ...styles.icon, ...leftIcon.props })}
          <Text size={size} style={[styles.text, textStyle]} numberOfLines={1}>
            {children}
          </Text>
          {React.isValidElement(rightIcon) &&
            React.cloneElement(rightIcon, {
              ...styles.icon,
              ...rightIcon.props,
              style: [styles.iconRight, rightIcon.props.style],
            })}
        </Box>
        <View style={styles.loader}></View>
      </View>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  color: 'white',
  bg: 'primary',
  size: 'm',
  leftIcon: null,
  rightIcon: null,
  alt: false,
  disabled: false,
  loading: 0,
  onPress: () => null,
}

export default Button
