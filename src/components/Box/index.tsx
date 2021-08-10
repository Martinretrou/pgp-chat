import { get } from 'lodash'
import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

const align = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
}

const alignSelf = {
  auto: 'auto',
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
}

const direction = {
  column: 'column',
  columnReverse: 'column-reverse',
  row: 'row',
  rowReverse: 'row-reverse',
}

const justify = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start',
}
const wrap = {
  noWrap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse',
}

interface Props {
  style?: ViewStyle | ViewStyle[]
  children?: React.ReactNode
  jc?: keyof typeof justify
  fd?: keyof typeof direction
  ai?: keyof typeof align
  fw?: keyof typeof wrap
  aself?: keyof typeof alignSelf
  fill?: boolean
}

const composeStyles = (props) =>
  StyleSheet.create({
    box: {
      alignItems: get(align, props.ai, 'stretch'),
      alignSelf: get(alignSelf, props.aself, 'auto'),
      flexDirection: get(direction, props.fd, 'column'),
      flexWrap: get(wrap, props.fw, 'nowrap'),
      justifyContent: get(justify, props.jc, 'flex-start'),
    },
  })

const Box = ({ style, children, ...props }: Props) => (
  <View style={[get(composeStyles(props), 'box'), style]}>{children}</View>
)

export default Box
