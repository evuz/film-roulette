import { useCallback, useState } from 'preact/hooks'

export function useRequest<T, U extends unknown[]> (request: (...args: U) => Promise<T>) {
  const [data, setData] = useState<T | undefined>()
  const fetch = useCallback((...args: U) => {
    request(...args).then(v => setData(v))
  }, [])

  return [fetch, data] as const
}
