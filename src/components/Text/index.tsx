import React from 'react'
import { Text as RNText, StyleSheet, TextProps, TextStyle } from 'react-native'
import { getTextColor, getTextFontFamily, getTextFontSize, normalize } from 'src/helpers'
import { colors, fonts, sizes } from 'src/theme'

/*
Props available: see theme
*/

export interface Props extends TextProps {
  children?: React.ReactNode
  color?: keyof typeof colors
  font?: keyof typeof fonts
  size?: keyof typeof sizes
  center?: boolean
  uppercase?: boolean
  capitalize?: boolean
  italic?: boolean
  style?: TextStyle | TextStyle[]
  underline?: boolean
  lineHeight?: number
}

const composeStyle = ({
  font,
  color,
  size,
  uppercase,
  capitalize,
  center,
  underline,
  italic,
  lineHeight,
}: Partial<Props>) =>
  StyleSheet.create({
    text: {
      textTransform: capitalize ? 'capitalize' : uppercase ? 'uppercase' : 'none',
      textAlign: center ? 'center' : 'auto',
      color: getTextColor(color),
      fontFamily: getTextFontFamily(font),
      fontSize: getTextFontSize(size),
      textDecorationLine: underline ? 'underline' : 'none',
      lineHeight: lineHeight ? normalize(lineHeight) : undefined,
      fontStyle: italic ? 'italic' : 'normal',
    },
  })

const Text = ({
  font,
  color,
  size,
  underline,
  children,
  uppercase,
  capitalize,
  center,
  italic,
  lineHeight,
  style,
  ...props
}: Props) => (
  <RNText
    style={[
      composeStyle({
        font,
        color,
        size,
        uppercase,
        capitalize,
        center,
        italic,
        underline,
        lineHeight,
      }).text,
      style,
    ]}
    {...props}
  >
    {children}
  </RNText>
)

export default Text
