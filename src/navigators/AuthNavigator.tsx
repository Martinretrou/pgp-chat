import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from 'src/screens/Login'
import PreLogin from 'src/screens/PreLogin'
import SignUp from 'src/screens/SignUp'

export type AuthNavigatorParamList = {
  PreLogin: undefined
  Login: undefined
  SignUp: undefined
}

const Stack = createStackNavigator<AuthNavigatorParamList>()

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PreLogin" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PreLogin" component={PreLogin} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
