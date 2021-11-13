import { ComponentChildren } from 'preact'

import { Button } from '../Button/Button'

import styles from './Container.module.css'

type Props = {
  children: ComponentChildren;
  onSubmit: () => void
  disabled?: boolean
};

export function ProvidersContainer ({ children, onSubmit, disabled = false }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.grid}>{children}</div>
      </div>
      <Button color="dark" disabled={disabled} onClick={onSubmit}>
        Aceptar
      </Button>
    </div>
  )
}
