import auth from '@react-native-firebase/auth'
import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'src/components'
import Colors from 'src/constants/colors'

function SignUp() {
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('User account created & signed in!', { value })
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
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('signUp.title')}</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" type="password" onChangeText={setPassword} />
      <Button onPress={handleSignUp} title="Signup"></Button>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.aliceBlue,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
