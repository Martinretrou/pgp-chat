import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-easy-icon'
import { Home, Settings } from 'src/screens'

export type MainNavigationParamList = {
  Home: undefined
  Settings: undefined
}

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  const { t } = useTranslation()

  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: t('home'),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              type="material-community"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: t('settings'),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'cog' : 'cog-outline'}
              type="material-community"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
