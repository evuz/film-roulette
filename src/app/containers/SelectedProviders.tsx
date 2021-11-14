import { useCallback, useState } from 'preact/hooks'
import { arr2Obj } from '../../utils/arr2Obj'
import { Provider } from '../api/justwatch.types'
import { ProvidersGrid } from '../components/Providers/Grid'
import { ProviderImageButton } from '../components/Providers/ImageButton'
import { useStoreProviders } from '../hooks/useStoreProviders'
import { useStoreProvidersId } from '../hooks/useStoreProvidersId'

export function SelectedProviders () {
  const [providersId] = useStoreProvidersId()
  const [providers] = useStoreProviders()
  const [selected, setSelected] = useState(() =>
    arr2Obj(providersId)
  )

  const handleSelected = useCallback((provider: Provider) => {
    const { id } = provider
    setSelected((prev) => Object.assign({}, prev, { [id]: !prev[id] }))
  }, [])

  return (
    <ProvidersGrid>
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
    </ProvidersGrid>
  )
}
