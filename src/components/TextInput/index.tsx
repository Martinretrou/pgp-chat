import React, { useState } from 'react'
import { TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native'
import TextInputMask from 'react-native-text-input-mask'
import HideIcon from 'src/assets/images/hide.svg'
import ShowIcon from 'src/assets/images/show.svg'

import Box from '../Box'
import Text from '../Text'

import composeStyles from './styles'

export interface Props extends TextInputProps {
  disabled?: boolean
  noFloatingPlaceholder?: boolean
  required?: boolean
  mask?: string
  type?: 'password' | 'email' | 'phone' | 'numeric'
  style?: ViewStyle | ViewStyle[]
  containerStyle?: ViewStyle | ViewStyle[]
  rightIcons?: React.ReactNode
}

enum textContentTypes {
  password = 'password',
  email = 'emailAddress',
  phone = 'telephoneNumber',
}

enum keyboardTypes {
  password = 'default',
  email = 'email-address',
  phone = 'phone-pad',
  numeric = 'numeric',
}

const TextInput = ({
  placeholder,
  noFloatingPlaceholder = false,
  disabled,
  required,
  mask,
  type,
  style,
  containerStyle,
  rightIcons,
  onFocus,
  onBlur,
  onChangeText,
  ...props
}: Props) => {
  const isSecured = type === 'password'

  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [hasValue, setHasValue] = useState<boolean>(!!props.value || !!props.defaultValue)
  const [secureText, setSecureText] = useState<boolean>(isSecured)

  const handleBlur = (e) => {
    setIsFocus(false)
    onBlur && onBlur(e)
  }

  const handleFocus = (e) => {
    setIsFocus(true)
    onFocus && onFocus(e)
  }

  const handleChangeText = (value: string) => {
    setHasValue(!!value)
    onChangeText && onChangeText(value)
  }

  const styles = composeStyles({
    disabled,
    isFocus,
    hasValue,
    hasPlaceholder: !!placeholder,
    hasSecureSwitch: isSecured,
  })

  return (
    <View style={[styles.container, containerStyle]}>
      {placeholder && !noFloatingPlaceholder && (
        <Text style={styles.placeholder}>
          {placeholder}{' '}
          {required && (
            <Text style={styles.sup} color="red">
              *
            </Text>
          )}
        </Text>
      )}
      <TextInputMask
        editable={!disabled}
        mask={mask}
        textContentType={textContentTypes[type] || 'none'}
        secureTextEntry={secureText}
        placeholder={noFloatingPlaceholder ? placeholder : ''}
        keyboardType={keyboardTypes[type] || 'default'}
        autoCapitalize={type === 'email' || type === 'password' ? 'none' : 'sentences'}
        {...props}
        style={[styles.input, style]}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChangeText={handleChangeText}
      />
      {isSecured && (
        <TouchableOpacity style={styles.secureSwitch} onPress={() => setSecureText(!secureText)}>
          {secureText ? <ShowIcon /> : <HideIcon />}
        </TouchableOpacity>
      )}
      {rightIcons && (
        <Box fd="row" style={styles.secureSwitch}>
          {rightIcons}
        </Box>
      )}
    </View>
  )
}
TextInput.defaultProps = {
  disabled: false,
  required: false,
  secured: false,
  onBlur: () => null,
  onFocus: () => null,
  onChangeText: () => null,
}

export default TextInput
