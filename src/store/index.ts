import { models } from './models'
import { RootModel } from './models/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading'
import persistPlugin from '@rematch/persist'

type FullModel = ExtraModelsFromLoading<RootModel>

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app', 'auth'],
}

const middleware: any = []

if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middleware.push(createDebugger())
}

const store = init<RootModel, FullModel>({
  models,
  plugins: [persistPlugin(persistConfig), loadingPlugin()],
  redux: {
    rootReducers: { RESET_APP: () => undefined },
    middlewares: middleware,
  },
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

export default store
