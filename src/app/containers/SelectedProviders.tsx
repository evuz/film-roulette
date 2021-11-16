import { Provider } from '../api/justwatch.types'
import { ProvidersGrid } from '../components/Providers/Grid'
import { ProviderImageButton } from '../components/Providers/ImageButton'
import { useStoreProviders } from '../hooks/useStoreProviders'

type Props = {
  onClick: (provider: Provider) => void
  providersSelected: Record<Provider['id'], boolean>
}

export function SelectedProviders ({ onClick, providersSelected }: Props) {
  const [providers] = useStoreProviders()

  return (
    <ProvidersGrid>
      {providers?.map((provider) => {
        return (
          <ProviderImageButton
            onClick={onClick}
            key={provider.id}
            active={Boolean(providersSelected[provider.id])}
            provider={provider}
          />
        )
      })}
    </ProvidersGrid>
  )
}
