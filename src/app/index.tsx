import { useEffect } from 'preact/hooks'
import { getGenres, getProviders } from './api/justwatch'
import { useRequest } from './hooks/useRequest'
import { randomSearch } from './services/randomSearch'

export function App () {
  const [fetchProviders, providers] = useRequest(getProviders)
  const [fetchGenres, genres] = useRequest(getGenres)
  const [fetchRandom, randomResult] = useRequest(randomSearch)

  useEffect(() => {
    fetchProviders()
    fetchGenres()
  }, [])

  console.log({ providers, genres: providers, randomResult })

  function handleSubmit (ev: Event) {
    ev.preventDefault()
    const target = ev.target as HTMLFormElement

    const values = ['genre', 'provider'].reduce((acc, name) => {
      const item = target.elements.namedItem(name) as HTMLSelectElement
      acc[item.name] = item.value
      return acc
    }, {} as any)

    fetchRandom({
      genres: [values.genre],
      providers: [values.provider],
      page_size: 1,
      content_types: ['movie']
    })
  }

  return (
    <div>
      <h1>Film Roulette</h1>
      <form onSubmit={handleSubmit}>
        <select name="provider">
          {providers?.map((provider) => (
            <option key={provider.id} value={provider.id}>
              {provider.clear_name}
            </option>
          ))}
        </select>
        <select name="genre">
          {genres?.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.translation}
            </option>
          ))}
        </select>
        <button type="submit">Go it!</button>
      </form>

      {randomResult && <h1>{randomResult.items[0]?.title}</h1>}
    </div>
  )
}
