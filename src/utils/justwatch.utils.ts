import { Provider } from '../app/api/justwatch.types'

const BASE_IMAGES = 'https://images.justwatch.com'

type SizeIcon = 50 | 100
export function createProviderIconUrl (provider: Provider, size: SizeIcon = 100) {
  return `${BASE_IMAGES}${provider.icon_url}`.replace('{profile}', `s${size}`)
}
