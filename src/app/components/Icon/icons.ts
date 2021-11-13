import { CheckIcon } from './Icons/Check.icon'
import { PlusIcon } from './Icons/Plus.icon'

export const icons = {
  check: CheckIcon,
  plus: PlusIcon
}

export type IconNames = keyof typeof icons;
