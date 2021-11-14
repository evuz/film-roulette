import { Layout } from '../components/Layout/Layout'
import { Home } from '../containers/Home'
import { useHomeRedirect } from '../hooks/useHomeRedirect'

export function HomePage () {
  useHomeRedirect()

  return <Layout>
    <Home />
  </Layout>
}
