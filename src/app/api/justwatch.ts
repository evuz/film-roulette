import { Genre, Provider, SearchParams, SearchResults } from './justwatch.types'

const baseUrl = 'https://apis.justwatch.com'
const locale = encodeURIComponent(navigator.language.replace('-', '_'))

function getUrl (path: string, addLocale = true) {
  let url = `${baseUrl}/content/${path}`

  if (addLocale) {
    url = `${url}/locale/${locale}`
  }

  return url
}

export function getProviders (): Promise<Provider[]> {
  return fetch(getUrl('providers')).then(res => res.json())
}

export function getGenres (): Promise<Genre[]> {
  return fetch(getUrl('genres')).then(res => res.json())
}

export function search (searchParams: SearchParams): Promise<SearchResults> {
  const defaultParams = {
    content_types: null,
    presentation_types: null,
    providers: null,
    genres: null,
    languages: null,
    release_year_from: null,
    release_year_until: null,
    monetization_types: null,
    min_price: null,
    max_price: null,
    scoring_filter_types: null,
    cinema_release: null,
    query: null,
    page: null,
    page_size: null
  }
  const params = Object.assign(defaultParams, searchParams)
  const body = JSON.stringify(params)

  return fetch(getUrl(`titles/${locale}/popular`, false), {
    body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
