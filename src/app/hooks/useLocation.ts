import { useCallback } from 'preact/hooks'
import { useLocation as useWouterLocation } from 'wouter-preact'

import { Routes } from '../router'

type SearchParams = Record<string, string>

export function useLocation () {
  const [location, setLocation] = useWouterLocation()

  const push = useCallback((to: Routes, params?: SearchParams) => {
    if (params) {
      const paramsStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
      to = `${to}?${paramsStr}` as any
    }
    setLocation(to)
  }, [setLocation])

  const replace = useCallback(
    (to: Routes) => setLocation(to, { replace: true }),
    [setLocation]
  )

  return { location, push, replace }
}
