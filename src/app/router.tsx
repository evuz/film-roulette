import { Route, Switch } from 'wouter-preact'

import { HomePage } from './pages/Home'
import { ProvidersPage } from './pages/Providers'
import { SurpriseMePage } from './pages/SurpriseMe'

export enum Routes {
  Home = '/',
  SurpriseMe = '/surprise-me',
  Providers = '/providers'
}

export const routes = [
  {
    path: Routes.Home,
    component: HomePage
  },
  {
    path: Routes.SurpriseMe,
    component: SurpriseMePage
  },
  {
    path: Routes.Providers,
    component: ProvidersPage
  }
]

export function Router () {
  return (
    <Switch>
      {routes.map(({ path, component }) => {
        return <Route key={path} component={component} path={path} />
      })}
    </Switch>
  )
}
