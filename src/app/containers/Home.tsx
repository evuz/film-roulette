import { Genre } from '../api/justwatch.types'
import { useLocation } from '../hooks/useLocation'
import { useSelectedProviders } from '../hooks/useSelectedProviders'
import { useStoreProviders } from '../hooks/useStoreProviders'
import { Routes } from '../router'
import { Genres } from './Genres'
import { SelectedProviders } from './SelectedProviders'

export function Home () {
  const [providers] = useStoreProviders()
  const { providersSelected, toggle } = useSelectedProviders()
  const { push } = useLocation()

  function submit (genre: Genre) {
    const providersSymbol = providers
      .filter(p => providersSelected[p.id])
      .map(p => p.short_name)
      .join()

    push(Routes.SurpriseMe, {
      providers: providersSymbol,
      genres: genre.short_name
    })
  }

  return (
    <>
      <SelectedProviders
        providersSelected={providersSelected}
        onClick={toggle}
      />
      <Genres onClick={submit} />
    </>
  )
}
