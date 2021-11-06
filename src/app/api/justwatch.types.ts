/* eslint-disable camelcase */
export type SearchParams = {
  content_types?: ContentType[];
  genres?: string[];
  page_size?: number;
  page?: number;
  providers?: ProviderID[];
  release_year_from?: unknown;
  release_year_until?: unknown;
  scoring_filter_types?: unknown;
}

export type ContentType = 'movie'| 'show'

export type MonetizationType = 'buy' | 'rent' | 'flatrate'

export type ProviderID = number;
export type Provider = {
  id: ProviderID;
  technical_name: string;
  short_name: string;
  clear_name: string;
  display_priority: number;
  priority: number;
  monetization_types: MonetizationType[];
  icon_url: string;
  icon_blur_hash: string;
  slug: string;
  data: ProviderData;
  addon_packages?: unknown;
  parent_packages?: unknown;
}

export type Genre = {
  id: number;
  short_name: string;
  technical_name: string;
  translation: string;
  slug: string;
}

export type ProviderData ={
  deeplinkData: unknown[];
  packages: Packages;
}

export type Packages = {
  android_tv: string;
  fire_tv: string;
  tvos: string;
  tizenos: string;
  webos: string;
  xbox: string;
}

export type SearchResults = {
  page: number;
  page_size: number;
  total_pages: number;
  total_results: number;
  items: Title[];
}

export type TitleID = number;
export type Title = {
  id: TitleID;
  jw_entity_id: string;
  title: string;
  full_path: string;
  full_paths: Fullpaths;
  poster: string;
  poster_blur_hash: string;
  backdrops: Backdrop[];
  short_description: string;
  original_release_year: number;
  object_type: string;
  original_title: string;
  localized_release_date: string;
  offers: Offer[];
  clips: Clip[];
  scoring: Scoring[];
  credits: Credit[];
  external_ids: Externalid[];
  genre_ids: number[];
  age_certification: string;
  runtime: number;
  production_countries: string[];
  cinema_release_date: string;
  permanent_audiences: string[];
}

export type Fullpaths = {
  SEASON_DETAIL_OVERVIEW?: string;
  MOVIE_DETAIL_OVERVIEW?: string;
}

export type Backdrop = {
  backdrop_url: string;
  backdrop_blur_hash: string;
}

export type Offer = {
  country: string;
  currency: string;
  element_count?: number;
  jw_entity_id: string;
  last_change_date_provider_id?: string;
  last_change_date?: string;
  last_change_difference?: number;
  last_change_percent?: number;
  last_change_retail_price?: number;
  monetization_type: MonetizationType;
  new_element_count: number;
  presentation_type: string;
  provider_id: number;
  retail_price?: number;
  type?: string;
  urls: Urls;
}

export type Externalid = {
  provider: string;
  external_id: string;
}

export type Credit = {
  role: string;
  character_name?: string;
  person_id: number;
  name: string;
}

export type Scoring = {
  provider_type: string;
  value: number;
}

export type Clip = {
  type: string;
  provider: string;
  external_id: string;
  name: string;
}

export type Urls = {
  standard_web: string;
  deeplink_web?: string;
}
