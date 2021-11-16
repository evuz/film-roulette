import { useCallback, useState } from 'preact/hooks'
import { arr2Obj } from '../../utils/arr2Obj'
import { Provider } from '../api/justwatch.types'
import { useStoreProvidersId } from './useStoreProvidersId'

export function useSelectedProviders () {
  const [providersId] = useStoreProvidersId()
  const [selected, setSelected] = useState(() =>
    arr2Obj(providersId)
  )

  const toggle = useCallback((provider: Provider) => {
    const { id } = provider
    setSelected((prev) => Object.assign({}, prev, { [id]: !prev[id] }))
  }, [])

  return { providersSelected: selected, toggle }
}
