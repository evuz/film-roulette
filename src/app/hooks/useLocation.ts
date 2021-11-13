import { useCallback } from 'preact/hooks'
import { useLocation as useWouterLocation } from 'wouter-preact'

import { Routes } from '../router'

export function useLocation () {
  const [location, setLocation] = useWouterLocation()

  const push = useCallback((to: Routes) => setLocation(to), [setLocation])
  const replace = useCallback(
    (to: Routes) => setLocation(to, { replace: true }),
    [setLocation]
  )

  return { location, push, replace }
}
