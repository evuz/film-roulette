import { useCallback } from 'preact/hooks'
import { Genre, Provider } from '../api/justwatch.types'
import { randomSearch } from '../services/randomSearch'
import { useRequest } from './useRequest'

type SearchParams = {
  genres: Genre['short_name'][]
  providers: Provider['short_name'][]
}

export function useRandomSearch () {
  const [fetch, movie] = useRequest(randomSearch)

  const search = useCallback(({ genres, providers }: SearchParams) => {
    fetch({
      genres,
      providers,
      content_types: ['movie']
    })
  }, [])

  return { movie, search }
}
