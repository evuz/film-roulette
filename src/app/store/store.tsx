import { ComponentChildren } from 'preact'
import { createStoreon } from 'storeon'
import { StoreContext } from 'storeon/preact'

import { providers } from './providers'

export const store = createStoreon([providers])

type Props = {
    children: ComponentChildren
}

export function StoreProvider ({ children }: Props) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
