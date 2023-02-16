import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LEGENDARIES, RegionType, STARTER_POKEMON } from '../../constants';
import { MenuStyle, StyledMenuH1, StyledMenuH4, StyledMenuP } from './styled';

interface RegionProps {
  region : RegionType;
}

const Starters = ({ pokemonNames, region }: any) => {
  return (
    <div>
      <StyledMenuH4>{STARTER_POKEMON[region.index].label}</StyledMenuH4>
      <div>
        <StyledMenuP>{pokemonNames[STARTER_POKEMON[region.index].fire].name}</StyledMenuP>
        <StyledMenuP>{pokemonNames[STARTER_POKEMON[region.index].water].name}</StyledMenuP>
        <StyledMenuP>{pokemonNames[STARTER_POKEMON[region.index].grass].name}</StyledMenuP>
      </div>
    </div>
  )
}

const Legendaries = ({ pokemonNames, region }: any) => {
  return (
    <div>
        <StyledMenuH4>{LEGENDARIES[region.index].label}</StyledMenuH4>
        <div>
          <StyledMenuP>{pokemonNames[LEGENDARIES[region.index].first].name}</StyledMenuP>
          <StyledMenuP>{pokemonNames[LEGENDARIES[region.index].second].name}</StyledMenuP>
          <StyledMenuP>{pokemonNames[LEGENDARIES[region.index].third].name}</StyledMenuP>
        </div>
    </div>
  )
}

export const SideMenu = ({ region }: RegionProps) => {
  const [pokemonNames, setPokemonNames] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

    useEffect(() => {
// CHANGE: so when trying to make a hook it didn't work (probably because of useEffect not changing for the right things..) so the goal
// is to move this to context so it can be grab everywhere. 
// Starter Pokemon, Rare Pokemon, etc
// 
// Context for Pokemon names limit up to like 500
// then create axios hook that requires the url the user clicks and that will get the rest of the information
// once pokemon are grabbed each CLP I can tranform the data to get certain names
        const pokemonNamesClient = axios.create({
            baseURL: "https://pokeapi.co/api/v2/pokemon/"
        })
    
        const fetchPokemonNames = () => {
            pokemonNamesClient.get("?limit=491") // include limit and offset to get specific region
            .then(response => {
                setPokemonNames(response.data.results)
                setLoading(false);
            })}

        fetchPokemonNames();
    }, [])
    console.log(pokemonNames)

if (isLoading) {
  return (
    <div>Loading...</div>
  )
}
  return (
    <MenuStyle>
      <StyledMenuH1>{region.label}</StyledMenuH1>
      <Starters pokemonNames={pokemonNames} region={region} />
      <Legendaries pokemonNames={pokemonNames} region={region} />
    </MenuStyle>
  )
}