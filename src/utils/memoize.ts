export function memoize<T, U extends any[]> (fn: (...args: U) => T) {
  const cache = new Map()

  return function (...args: U): T {
    const key = JSON.stringify({ args })

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn(...args)
    cache.set(key, result)

    return result
  }
}
