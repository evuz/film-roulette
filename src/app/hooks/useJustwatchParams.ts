import { useMemo } from 'preact/hooks'
import { useSearchParams } from './useSearchParams'

function toArray (str?: string): string[] {
  return (str || '').split(',')
}

export function useJustwatchParams () {
  const queryParams = useSearchParams()

  const params = useMemo(() => {
    return {
      providers: toArray(queryParams.providers),
      genres: toArray(queryParams.genres)
    }
  }, [])

  return params
}
