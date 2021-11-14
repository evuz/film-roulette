import { useEffect } from 'preact/hooks'
import { getGenres } from '../api/justwatch'
import { useRequest } from './useRequest'

export function useGenres () {
  const [fetchGenres, genres = []] = useRequest(getGenres)

  useEffect(() => {
    fetchGenres()
  }, [])

  return { genres }
}
