import { ComponentChildren, JSX } from 'preact'
import { capitalize } from '../../../utils/capitalize'

import { filterClassnames } from '../../../utils/filterClassnames'

import styles from './Button.module.css'

type ButtonEvent = JSX.TargetedMouseEvent<HTMLButtonElement>
type ButtonColor = 'primary' | 'dark'
type ButtonType = 'button' | 'submit'

type Props = {
  children: ComponentChildren
  disabled?: boolean
  color?: ButtonColor
  type?: ButtonType
  noBorder?: boolean
  square?: boolean
  rounded?: boolean
  onClick: (ev: ButtonEvent) => void
}

export function Button ({
  children,
  disabled = false,
  color = 'primary',
  type = 'button',
  noBorder = false,
  square = false,
  rounded = false,
  onClick
}: Props) {
  console.log(styles)
  const colorClass = disabled ? 'isDisabled' : `is${capitalize(color)}`
  const classNames = filterClassnames({
    [styles.button]: true,
    [styles.isBorder]: !noBorder,
    [styles.isRounded]: rounded,
    [styles.isSquare]: rounded || square,
    [styles[colorClass]]: true
  })

  function click (ev: ButtonEvent) {
    if (disabled) return

    onClick(ev)
  }

  return (
    <button
      className={classNames}
      disabled={disabled}
      type={type}
      onClick={click}
    >
      {children}
    </button>
  )
}
