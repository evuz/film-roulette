import { createProviderIconUrl } from '../../../utils/justwatch.utils'
import { Provider } from '../../api/justwatch.types'
import { ProviderButton } from './Button'

import styles from './ImageButton.module.css'

type Props = {
  provider: Provider
  active?: boolean
  onClick: (provider: Provider) => void
}

export function ProviderImageButton ({ provider, active = true, onClick }: Props) {
  function handleOnClick () {
    onClick(provider)
  }

  return (
    <ProviderButton onClick={handleOnClick} active={active} >
      <img
        className={styles.image}
        src={createProviderIconUrl(provider)}
        alt={provider.clear_name}
      />
    </ProviderButton>
  )
}
