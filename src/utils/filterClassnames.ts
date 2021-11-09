type Classnames = Record<string, boolean>
type ClassnamesArgs = Classnames | Array<string | null>

export function filterClassnames (classnames: ClassnamesArgs) {
  if (!classnames || typeof classnames !== 'object') {
    throw Error('classnames must be an object')
  }

  if (Array.isArray(classnames)) {
    return classnames
      .reduce(
        (acc, classname) => (classname ? acc.concat(classname) : acc),
          [] as string[]
      )
      .join(' ')
  }

  return Object.keys(classnames)
    .filter((key) => classnames[key])
    .join(' ')
}
