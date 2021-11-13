import { StoreProvider } from './store/store'
import { Router } from './router'

export function App () {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  )
}
