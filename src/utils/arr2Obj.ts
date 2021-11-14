export function arr2Obj (
  ids: Array<string | number>
): Record<string | number, boolean> {
  return ids.reduce((acc, id) => {
    acc[id] = true
    return acc
  }, {} as any)
}
