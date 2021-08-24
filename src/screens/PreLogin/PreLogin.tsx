import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
import { Box, Button } from 'src/components'
import Colors from 'src/constants/colors'
import { normalize } from 'src/helpers'
import { colors, radius, sizes } from 'src/theme'

function PreLogin() {
  const navigation = useNavigation()
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('preLogin.title')}</Text>
      <Box style={styles.card}>
        <Button
          alt
          borderColor="primary"
          color="primary"
          style={{ marginBottom: sizes.xl }}
          font="primarySemiBold"
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign up
        </Button>
        <Button font="primarySemiBold" onPress={() => navigation.navigate('Login')}>
          Log in
        </Button>
      </Box>
    </View>
  )
}

export default PreLogin

const styles = StyleSheet.create({
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
