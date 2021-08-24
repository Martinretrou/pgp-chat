import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, StyleSheet, Text, View } from 'react-native'
import OpenPGP from 'react-native-fast-openpgp'
import Colors from 'src/constants/colors'

function Home() {
  const { t } = useTranslation()
  const [keyPair, setKeyPair] = useState({ publicKey: '', privateKey: '' })

  useEffect(() => console.log({ keyPair }), [keyPair])

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('welcome')}</Text>
      <Button
        title={'Generate'}
        onPress={async () => {
          const output = await OpenPGP.generate({
            name: 'test',
            email: 'test@test.com',
            passphrase: 'test',
          })
          setKeyPair(output)
        }}
      />
      <View>
        <Text>PublicKey</Text>
        <Text selectable>{keyPair.publicKey}</Text>
        <Text>PrivateKey</Text>
        <Text selectable>{keyPair.privateKey}</Text>
      </View>
    </View>
  )
}

export default Home

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
