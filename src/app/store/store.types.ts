import { StoreonStore } from 'storeon'

import { Provider } from '../api/justwatch.types'

export type StoreState = { providers: Provider['id'][] }
export type StoreEvents = {
  '@providers/set': Provider['id'][]
}

export type Store = StoreonStore<StoreState, StoreEvents>
