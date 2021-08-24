import { UserModelType } from './user'
import { Models } from '@rematch/core'

export interface RootModel extends Models<RootModel> {
  user: UserModelType
}
