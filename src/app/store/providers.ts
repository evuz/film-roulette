import { Provider } from '../api/justwatch.types'
import { Store } from './store.types'

const initialValue: Provider['id'][] = []

export function providers (store: Store) {
  store.on('@init', () => ({ providers: initialValue }))

  store.on('@providers/set', (_, providers) => {
    return { providers }
  })
}
