export type PokedexRegion = { first: number, last: number }
export type RegionType = { label: string, path: string, filter: (pokemon: any) => boolean, index: number}

export enum RegionOptions {
    KANTO = 'KANTO',
    JOHTO = 'JOHTO',
    SINNOH = 'SINNOH'
}

export enum PokedexOptions {
    // Need to look up pokemon placement on api
    KANTO_FIRST = 0,
    KANTO_LAST = 151,
    JOHTO_FIRST = 152,
    JOHTO_LAST = 303,
    SINNOH_FIRST = 387,
    SINNOH_LAST = 491,
}

export type FilterType = { ALL: () => boolean, KANTO: (pokemon: any) => boolean, JOHTO: (pokemon: any) => boolean, SINNOH: (pokemon: any) => boolean}

export const POKEMONFILTER: FilterType = {
    'ALL': () => true,
    'KANTO': (pokemon: any) => pokemon.id <= PokedexOptions.KANTO_LAST,
    'JOHTO': (pokemon: any) => pokemon.id > PokedexOptions.KANTO_LAST && pokemon.id <= PokedexOptions.JOHTO_LAST,
    'SINNOH': (pokemon: any) => pokemon.id >= PokedexOptions.SINNOH_FIRST
}

export enum RouteOptions {
    KANTO_ROUTE = 'kanto',
    JOHTO_ROUTE = 'johto',
    SINNOH_ROUTE = 'sinnoh'
}

export const REGIONS: RegionType[] = [
    { label: 'Kanto Region', path: RouteOptions.KANTO_ROUTE, filter: POKEMONFILTER[RegionOptions.KANTO], index: 0 },
    { label: 'Johto Region', path: RouteOptions.JOHTO_ROUTE, filter: POKEMONFILTER[RegionOptions.JOHTO], index: 1 },
    { label: 'Sinnoh Region', path: RouteOptions.SINNOH_ROUTE, filter: POKEMONFILTER[RegionOptions.SINNOH], index: 2 },
]