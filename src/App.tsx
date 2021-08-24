import './i18n'
import MainNavigator from './navigators/MainNavigator'
import store from './store'
import { NavigationContainer } from '@react-navigation/native'
import { getPersistor } from '@rematch/persist'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

const persistor = getPersistor()

export type AppTabParamList = {
  Home: undefined
  Settings: { userID?: string }
}

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 }) // fade animation
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  )
}

export default App
