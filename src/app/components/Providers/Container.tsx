import { ComponentChildren } from 'preact'

import styles from './Container.module.css'

type Props = {
  children: ComponentChildren;
};

export function ProvidersContainer ({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>{children}</div>
    </div>
  )
}
