import { icons, IconNames } from './icons'

type IconSizes = number;
type IconColors = 'white' | 'light' | 'medium' | 'highlight' | 'dark';

type Props = {
  name: IconNames;
  size?: IconSizes;
  color?: IconColors;
};

function getStyle (size: number, color: IconColors) {
  return {
    color: color ? `var(--${color})` : undefined,
    fontSize: `${size}rem`,
    width: `${size}rem`,
    height: `${size}rem`
  }
}

export function Icon ({ name, size = 1.5, color = 'light' }: Props) {
  const SvgIcon = icons[name]

  return (
    <i style={getStyle(size, color)}>
      <SvgIcon />
    </i>
  )
}
