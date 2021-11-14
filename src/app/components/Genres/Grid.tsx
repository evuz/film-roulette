import { ComponentChildren } from 'preact'

import styles from './Grid.module.css'

type Props = {
    children: ComponentChildren
}
export function GenresGrid ({ children }: Props) {
  return <div className={styles.grid}>{children}</div>
}
