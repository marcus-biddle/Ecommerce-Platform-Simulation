import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { usePokemon } from '../../data';
// import { Data } from '../../sub-components/Trending/Trending';

interface SideMenuProps {
  region: string;
}

export const SideMenu = ({ region }: SideMenuProps) => {
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
            pokemonNamesClient.get("?limit=10") // include limit and offset to get specific region
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
      {pokemonNames.map((item: any, index: number) => {
        return (
          <div key={index}>
            {item.name}
          </div>
        )
      })}
    </div>
  )
}