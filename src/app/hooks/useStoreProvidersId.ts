import { useCallback } from 'preact/hooks'
import { Provider } from '../api/justwatch.types'
import { useStore } from './useStore'

export function useStoreProvidersId () {
  const { dispatch, providers } = useStore('providers')

  const setProviders = useCallback((providers: Provider[]) => {
    dispatch('@providers/set', providers.map(p => p.id))
  }, [])

  return [providers, setProviders] as const
}
