
// ****************** Regions ************************

export type PokedexRegion = { first: number, last: number }
export type RegionType = { region: string, value: PokedexRegion, label: string, index: number}

export enum RegionOptions {
    KANTO = 'kanto-region',
    JOHTO = 'johto-region',
    SINNOH = 'sinnoh-region'
}

export enum PokedexOptions {
    // Need to look up pokemon placement on api
    KANTO_FIRST = 0,
    KANTO_LAST = 151,
    JOHTO_FIRST = 152,
    JOHTO_LAST = 303,
    SINNOH_FIRST = 304,
    SINNOH_LAST = 0,
}

export const REGIONS: RegionType[] = [
    { region: RegionOptions.KANTO, value: { first: PokedexOptions.KANTO_FIRST, last: PokedexOptions.KANTO_LAST }, label: 'Kanto Region', index: 0 },
    { region: RegionOptions.JOHTO, value: { first: PokedexOptions.JOHTO_FIRST, last: PokedexOptions.JOHTO_LAST }, label: 'Johto Region', index: 1 },
    { region: RegionOptions.SINNOH, value: { first: PokedexOptions.SINNOH_FIRST, last: PokedexOptions.SINNOH_LAST }, label: 'Sinnoh Region', index: 2 },
]

// ****************** Starters ************************

export enum StarterOptions {
    // values are index of api
    KANTO_FIRE = 3,
    KANTO_WATER = 6,
    KANTO_GRASS = 0,
    JOHTO_FIRE = 154,
    JOHTO_WATER = 157,
    JOHTO_GRASS = 151,
    SINNOH_FIRE = 389,
    SINNOH_WATER = 392,
    SINNOH_GRASS = 386,
}

export type StarterType = { region: string, fire: number, water: number, grass: number, label: string }

export const STARTER_POKEMON: StarterType[] = [
    { region: RegionOptions.KANTO, fire: StarterOptions.KANTO_FIRE, water: StarterOptions.KANTO_WATER, grass: StarterOptions.KANTO_GRASS, label: 'Kanto Starter Pokemon' },
    { region: RegionOptions.JOHTO, fire: StarterOptions.JOHTO_FIRE, water: StarterOptions.JOHTO_WATER, grass: StarterOptions.JOHTO_GRASS, label: 'Johto Starter Pokemon' },
    { region: RegionOptions.SINNOH, fire: StarterOptions.SINNOH_FIRE, water: StarterOptions.SINNOH_WATER, grass: StarterOptions.SINNOH_GRASS, label: 'Sinnoh Starter Pokemon' },
]

// ****************** Lengendaries ************************

export enum LegendaryOptions {
    MEWTWO_KANTO = 149,
    KABUTOPS_KANTO = 140,
    OMASTAR_KANTO = 138,
    LUGIA_JOHTO = 248,
    HOOH_JOHTO = 249,
    ENTEI_JOHTO = 243,
    DARKRAI_SINNOH = 490,
    DIALGA_SINNOH = 482,
    MANAPHY_SINNOH = 489
}

export type LegendaryType = { region: string, first: number, second: number, third: number, label: string }

export const LEGENDARIES: LegendaryType[] = [
    { region: RegionOptions.KANTO, first: LegendaryOptions.MEWTWO_KANTO, second: LegendaryOptions.KABUTOPS_KANTO, third: LegendaryOptions.OMASTAR_KANTO, label: 'Kanto Legendaries' },
    { region: RegionOptions.JOHTO, first: LegendaryOptions.ENTEI_JOHTO, second: LegendaryOptions.HOOH_JOHTO, third: LegendaryOptions.LUGIA_JOHTO, label: 'Johto Legendaries' },
    { region: RegionOptions.SINNOH, first: LegendaryOptions.DARKRAI_SINNOH, second: LegendaryOptions.DIALGA_SINNOH, third: LegendaryOptions.MANAPHY_SINNOH, label: 'Sinnoh Legendaries' },
]

// ****************** Routes ************************

export enum RouteOptions {
    KANTO_ROUTE = '/kanto',
    JOHTO_ROUTE = '/johto',
    SINNOH_ROUTE = '/sinnoh'
}

export type RouteType = { location: string }

export const ROUTES: RouteType[] = [
    { location: RouteOptions.KANTO_ROUTE },
    { location: RouteOptions.JOHTO_ROUTE },
    { location: RouteOptions.SINNOH_ROUTE },
]