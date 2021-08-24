import TabsNavigator from './TabsNavigator'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type RootNavigatorParamList = {
  Auth: undefined
  Main: undefined
  Tabs: undefined
}

const Stack = createStackNavigator<RootNavigatorParamList>()

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Tabs" component={TabsNavigator} />
    </Stack.Navigator>
  )
}

export default RootNavigator
