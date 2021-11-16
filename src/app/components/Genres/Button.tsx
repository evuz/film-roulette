import { capitalize } from '../../../utils/capitalize'
import { filterClassnames } from '../../../utils/filterClassnames'
import { Genre } from '../../api/justwatch.types'

import styles from './Button.module.css'

type GenreColor = 'light' | 'medium' | 'highlight'

type Props = {
  genre: Genre
  color: GenreColor
  onClick: (genre: Genre) => void
}

export function GenreButton ({ genre, color, onClick }: Props) {
  const classnames = filterClassnames([styles.button, styles[`is${capitalize(color)}`]])

  return <button onClick={() => onClick(genre)} className={classnames}>
      {genre.translation}
  </button>
}
