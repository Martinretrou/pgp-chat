import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Box, TextInput, Button } from 'src/components'
import { normalize } from 'src/helpers'
import { navigationRef } from 'src/lib/NavigationService'
import { Dispatch } from 'src/store'
import { colors, radius, sizes } from 'src/theme'

function Login() {
  const navigation = useNavigation()
  const dispatch = useDispatch<Dispatch>()
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('User account created & signed in!', { value })
        dispatch.user.set(value)
        navigation.navigate('Tabs')
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!')
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!')
        }

        console.error(error)
      })
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.welcome}>{t('login.title')}</Text>
      <Box style={styles.card}>
        <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          type="password"
          onChangeText={setPassword}
        />
        <Button font="primarySemiBold" onPress={handleLogin}>
          Log in
        </Button>
      </Box>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  card: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: radius.m,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 8,
    padding: normalize(20),
  },
  input: {
    marginBottom: normalize(sizes.m),
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
