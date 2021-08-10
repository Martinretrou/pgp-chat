import * as React from 'react'
import RNBootSplash from 'react-native-bootsplash'

import MainNavigator from './navigators/MainNavigator'
import { sleep } from './utils/async'

export type AppTabParamList = {
  Home: undefined
  Settings: { userID?: string }
}

const App = () => {
  const init = async () => {
    await sleep(1000)
    // …do multiple async tasks
  }

  React.useEffect(() => {
    init().finally(() => {
      RNBootSplash.hide({ duration: 250 }) // fade animation
    })
  }, [])

  return <MainNavigator />
}

export default App
