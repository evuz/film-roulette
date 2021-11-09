import { ComponentChildren, JSX } from 'preact'

import { filterClassnames } from '../../../utils/filterClassnames'

import styles from './Button.module.css'

type Props = {
  children: ComponentChildren
  active?: boolean
  onClick: JSX.MouseEventHandler<HTMLButtonElement>
}

export function ProviderButton ({ children, active = true, onClick }: Props) {
  const classnames = filterClassnames({
    [styles.button]: true,
    [styles.isActive]: active
  })

  return (
    <button onClick={onClick} className={classnames}>{children}</button>
  )
}
