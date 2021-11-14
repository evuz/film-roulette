import { GenreButton } from '../components/Genres/Button'
import { GenresGrid } from '../components/Genres/Grid'
import { useGenres } from '../hooks/useGenres'

const colors = ['light', 'medium', 'highlight'] as const

export function Genres () {
  const { genres } = useGenres()

  return (
    <GenresGrid>
      {genres.map((g, index) => {
        return <GenreButton key={g.id} color={colors[index % 3]} genre={g} />
      })}
    </GenresGrid>
  )
}
