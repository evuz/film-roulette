import { useEffect } from 'preact/hooks'
import { useJustwatchParams } from '../hooks/useJustwatchParams'
import { useRandomSearch } from '../hooks/useRandomSearch'

export function SurpriseMePage () {
  const params = useJustwatchParams()
  const { movie, search } = useRandomSearch()

  useEffect(() => {
    search(params)
  }, [])

  console.log(movie)

  return <div>
    <h1>Surprise me!</h1>
    {movie && <h2>{movie.title}</h2>}
  </div>
}
