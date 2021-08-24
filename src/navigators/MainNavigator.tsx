import AuthNavigator from './AuthNavigator'
import TabsNavigator from './TabsNavigator'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type MainNavigatorParamList = {
  Tabs: undefined
  Auth: undefined
}

const Stack = createStackNavigator<MainNavigatorParamList>()

const MainNavigator = () => {
  const isLoggedIn = false

  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? 'Tabs' : 'Auth'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MainNavigator
