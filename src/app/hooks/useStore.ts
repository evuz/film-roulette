import { useStoreon } from 'storeon/preact'
import { StoreEvents, StoreState } from '../store/store.types'

type Key = keyof StoreState

export function useStore (keys: Key | Key[]) {
  const arr = Array.isArray(keys) ? keys : [keys]
  return useStoreon<StoreState, StoreEvents>(...arr)
}
