import { random } from '../../utils/random'
import { search } from '../api/justwatch'
import { SearchParams } from '../api/justwatch.types'

export async function randomSearch (params: SearchParams) {
  const calculateSearch = await search(params)
  const max = Math.min(
    calculateSearch.total_results,
    calculateSearch.total_pages * calculateSearch.page_size
  )

  const randomPosition = random(max)

  params.page_size = 1
  params.page = randomPosition

  return search(params)
}
