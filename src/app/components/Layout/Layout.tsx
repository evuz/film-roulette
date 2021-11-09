import { ComponentChildren } from 'preact'

import styles from './Layout.module.css'

type Props = {
  title?: string;
  children: ComponentChildren;
};

const defaultTitle = 'Film Roulette'

export function Layout ({ title = defaultTitle, children }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <main className={styles.content}>{children}</main>
    </div>
  )
}
