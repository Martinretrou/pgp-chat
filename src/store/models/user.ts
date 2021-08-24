import { RootModel } from './types'
import { createModel } from '@rematch/core'

type UserState = any

const INITIAL_STATE = {}

const user = createModel<RootModel>()({
  state: INITIAL_STATE as UserState,
  reducers: {
    set: (state: UserState, payload: UserState) => ({ ...state, ...payload }),
  },
  effects: () => ({}),
})

export type UserModelType = typeof user
export default user
