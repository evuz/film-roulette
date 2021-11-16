import { Genre } from '../api/justwatch.types'
import { GenreButton } from '../components/Genres/Button'
import { GenresGrid } from '../components/Genres/Grid'
import { useGenres } from '../hooks/useGenres'

const colors = ['light', 'medium', 'highlight'] as const

type Props = {
  onClick: (genre: Genre) => void;
};

export function Genres ({ onClick }: Props) {
  const { genres } = useGenres()

  return (
    <GenresGrid>
      {genres.map((g, index) => {
        return (
          <GenreButton
            key={g.id}
            onClick={onClick}
            color={colors[index % 3]}
            genre={g}
          />
        )
      })}
    </GenresGrid>
  )
}
