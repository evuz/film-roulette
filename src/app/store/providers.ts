import { Store } from './store.types'

export function providers (store: Store) {
  store.on('@init', () => ({ providers: [] }))

  store.on('@providers/set', (_, providers) => {
    return { providers }
  })
}
