import { useEffect } from 'preact/hooks'
import { Routes } from '../router'
import { useLocation } from './useLocation'
import { useStoreProvidersId } from './useStoreProvidersId'

export function useHomeRedirect () {
  const [ids] = useStoreProvidersId()
  const { replace } = useLocation()

  useEffect(() => {
    if (ids.length === 0) {
      replace(Routes.Providers)
    }
  }, [ids])
}
