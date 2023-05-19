import { REGIONS } from "../../constants/regions";

export const getCurrentRegion = (region: string) => REGIONS.find((option: any) => option.id === region);

export const getSelectedPokemon = (path: string, pokemon: any) => {
    const region = REGIONS.find((option: any) => option.path === path);

    return pokemon.filter(region?.filter);
}

export const getFilteredPokemon = (pokemon: any, activeFilter: string) => {
    if (activeFilter === 'grass_bug') {
        // return pokemon.filter((obj: any) => obj.types[0].type.name === 'grass' || obj.types[0].type.name === 'bug');
        return pokemon.map((el: any) => {
            return {...el, types: el.types.filter((types: any) => types.type.name === 'grass' || types.type.name === 'bug')}
        }).filter((pokemon: any) => pokemon.types.length > 0);
    } else if (activeFilter === 'poison_psychic_ghost') {
        return pokemon.map((el: any) => {
            return {...el, types: el.types.filter((types: any) => types.type.name === 'poison' || types.type.name === 'psychic' || types.type.name === 'ghost')}
        }).filter((pokemon: any) => pokemon.types.length > 0);
    } else if (activeFilter === 'fire') {
        return pokemon.map((el: any) => {
            return {...el, types: el.types.filter((types: any) => types.type.name === 'fire')}
        }).filter((pokemon: any) => pokemon.types.length > 0);
    } else if (activeFilter === 'water') {
        return pokemon.map((el: any) => {
            return {...el, types: el.types.filter((types: any) => types.type.name === 'water')}
        }).filter((pokemon: any) => pokemon.types.length > 0);
    } else if (activeFilter === 'flying_ground_fighting') {
        return pokemon.map((el: any) => {
            return {...el, types: el.types.filter((types: any) => types.type.name === 'flying' || types.type.name === 'ground' || types.type.name === 'fighting')}
        }).filter((pokemon: any) => pokemon.types.length > 0);
    } else if (activeFilter === 'ice') {
        return pokemon.map((el: any) => {
            return {...el, types: el.types.filter((types: any) => types.type.name === 'ice')}
        }).filter((pokemon: any) => pokemon.types.length > 0);
    } else if (activeFilter === 'fairy') {
        return pokemon.map((el: any) => {
            return {...el, types: el.types.filter((types: any) => types.type.name === 'fairy')}
        }).filter((pokemon: any) => pokemon.types.length > 0);
    } else if (activeFilter === 'electric') {
        return pokemon.map((el: any) => {
            return {...el, types: el.types.filter((types: any) => types.type.name === 'electric')}
        }).filter((pokemon: any) => pokemon.types.length > 0);
    } else if (activeFilter === 'dragon_dark') {
        return pokemon.map((el: any) => {
            return {...el, types: el.types.filter((types: any) => types.type.name === 'dark' || types.type.name === 'dragon')}
        }).filter((pokemon: any) => pokemon.types.length > 0);
    } else if (activeFilter === 'none') {
        return pokemon;
    }

    return pokemon;
};

export const getPokemonImages = (pokemon: any) => {
    return {front: pokemon.sprites.front_default, back: pokemon.sprites.back_default, main: pokemon.sprites.other.home.front_default};
};