import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LEGENDARIES, STARTER_POKEMON } from '../../constants';
// import { usePokemon } from '../../data';
// import { Data } from '../../sub-components/Trending/Trending';

interface SideMenuProps {
  region: string;
}

export const SideMenu = ({ region }: any) => {
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

// change to list type
if (isLoading) {
  return (
    <div>Loading...</div>
  )
}
  return (
    <div>
      <div>
        <h1>{region.label}</h1>
        <div>
          <h4>{STARTER_POKEMON[region.index].label}</h4>
          <div>
            <p>{pokemonNames[STARTER_POKEMON[region.index].fire].name}</p>
            <p>{pokemonNames[STARTER_POKEMON[region.index].water].name}</p>
            <p>{pokemonNames[STARTER_POKEMON[region.index].grass].name}</p>
          </div>
        </div>
        <div>
          <h4>{LEGENDARIES[region.index].label}</h4>
          <div>
            <p>{pokemonNames[LEGENDARIES[region.index].first].name}</p>
            <p>{pokemonNames[LEGENDARIES[region.index].second].name}</p>
            <p>{pokemonNames[LEGENDARIES[region.index].third].name}</p>
          </div>
        </div>
      </div>
      <div>

      </div>
      
    </div>
  )
}