import { useMemo } from 'preact/hooks'
import { useProviders } from './useProviders'
import { useStoreProvidersId } from './useStoreProvidersId'

export function useStoreProviders () {
  const [storedIds, setStoreIds] = useStoreProvidersId()
  const { providers } = useProviders()

  const storedProviders = useMemo(() => {
    return providers.filter(p => storedIds.includes(p.id))
  }, [providers, storedIds])

  return [storedProviders, setStoreIds] as const
}
