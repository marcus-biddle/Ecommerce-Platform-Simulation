
// ADD CONSTANTS FOR ALL REGIONS/ TYPES / ANYTHING ELSE
export type PokedexRegion = { first: number, last: number }
export type RegionType = { region: string, value: PokedexRegion, label: string}

export enum RegionOptions {
    KANTO = 'kanto-region',
    JOHTO = 'johto-region',
    SINNOH = 'sinnoh-region',
    UNOVA = 'unova-region'
}

export enum PokedexOptions {
    // Need to look up pokemon placement on api
    KANTO_FIRST = 0,
    KANTO_LAST = 151,
    JOHTO_FIRST = 152,
    JOHTO_LAST = 303,
    SINNOH_FIRST = 304,
    SINNOH_LAST = 0,
    UNOVA_FIRST = 0,
    UNOVA_LAST = 0,
}

export const REGIONS: RegionType[] = [
    { region: RegionOptions.KANTO, value: { first: PokedexOptions.KANTO_FIRST, last: PokedexOptions.KANTO_LAST }, label: 'Kanto'},
    { region: RegionOptions.JOHTO, value: { first: PokedexOptions.JOHTO_FIRST, last: PokedexOptions.JOHTO_LAST }, label: 'Johto'},
    { region: RegionOptions.SINNOH, value: { first: PokedexOptions.SINNOH_FIRST, last: PokedexOptions.SINNOH_LAST }, label: 'Sinnoh'},
    { region: RegionOptions.UNOVA, value: { first: PokedexOptions.UNOVA_FIRST, last: PokedexOptions.UNOVA_LAST }, label: 'Unova'},
]