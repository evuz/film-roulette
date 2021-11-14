import { useCallback, useState } from 'preact/hooks'

import { Provider } from '../api/justwatch.types'
import { ProvidersContainer } from '../components/Providers/Container'
import { ProviderImageButton } from '../components/Providers/ImageButton'
import { useLocation } from '../hooks/useLocation'
import { useProviders } from '../hooks/useProviders'
import { useStoreProvidersId } from '../hooks/useStoreProvidersId'
import { Routes } from '../router'
import { arr2Obj } from '../../utils/arr2Obj'

export function Providers () {
  const [storeProvidersId, setStoreProviders] = useStoreProvidersId()
  const { push } = useLocation()
  const { providers } = useProviders()
  const [selected, setSelected] = useState(() =>
    arr2Obj(storeProvidersId)
  )

  const handleSelected = useCallback((provider: Provider) => {
    const { id } = provider
    setSelected((prev) => Object.assign({}, prev, { [id]: !prev[id] }))
  }, [])

  function handleSubmit () {
    const providersSelected = providers.filter((p) => selected[p.id])
    setStoreProviders(providersSelected)
    push(Routes.Home)
  }

  const isSubmitDisabled = !Object.values(selected).includes(true)

  return (
    <ProvidersContainer disabled={isSubmitDisabled} onSubmit={handleSubmit}>
      {providers?.map((provider) => {
        return (
          <ProviderImageButton
            onClick={handleSelected}
            key={provider.id}
            active={Boolean(selected[provider.id])}
            provider={provider}
          />
        )
      })}
    </ProvidersContainer>
  )
}
