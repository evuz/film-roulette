import { capitalize } from '../../../utils/capitalize'
import { filterClassnames } from '../../../utils/filterClassnames'
import { Genre } from '../../api/justwatch.types'

import styles from './Button.module.css'

type GenreColor = 'light' | 'medium' | 'highlight'

type Props = {
  genre: Genre
  color: GenreColor
}

export function GenreButton ({ genre, color }: Props) {
  const classnames = filterClassnames([styles.button, styles[`is${capitalize(color)}`]])

  return <button className={classnames}>
      {genre.translation}
  </button>
}
