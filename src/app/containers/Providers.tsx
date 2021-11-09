import { useCallback, useState } from 'preact/hooks'
import { Provider } from '../api/justwatch.types'
import { ProvidersContainer } from '../components/Providers/Container'
import { ProviderImageButton } from '../components/Providers/ImageButton'
import { useProviders } from '../hooks/useProviders'

export function Providers () {
  const { providers = [] } = useProviders()
  const [selected, setSelected] = useState<Record<Provider['id'], boolean>>({})

  const handleSelected = useCallback((provider: Provider) => {
    const { id } = provider
    setSelected((prev) => Object.assign({}, prev, { [id]: !prev[id] }))
  }, [])

  return (
    <ProvidersContainer>
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
