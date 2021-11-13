import { useEffect } from 'preact/hooks'
import { getProviders } from '../api/justwatch'
import { useRequest } from './useRequest'

export function useProviders () {
  const [fetchProviders, providers = []] = useRequest(getProviders)

  useEffect(() => {
    fetchProviders()
  }, [])

  return { providers }
}
