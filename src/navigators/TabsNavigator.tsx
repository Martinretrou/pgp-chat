import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-easy-icon'
import Home from 'src/screens/Home'
import Settings from 'src/screens/Settings'

export type TabNavigationParamList = {
  Home: undefined
  Settings: undefined
}

const Tab = createBottomTabNavigator<TabNavigationParamList>()

const TabsNavigator = () => {
  const { t } = useTranslation()

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
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
        name="Settings"
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

export default TabsNavigator
