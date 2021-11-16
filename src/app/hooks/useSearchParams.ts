import { useMemo } from 'preact/hooks'

export function useSearchParams () {
  const qs = document.location.search
  const queryParams = useMemo(() => {
    const searchParams = new URLSearchParams(qs)
    return Object.fromEntries(searchParams.entries())
  }, [qs])

  return queryParams
}
