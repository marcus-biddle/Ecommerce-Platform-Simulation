import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface AxiosResponseType {
    name: string;
    id: number;
}

export const usePokemonData = () => {
    
    const [allPokemons, setAllPokemons] = useState([]);
    const [loadPoke, setLoadPoke] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    const getAllPokemons = async () => {
        const res = await fetch(loadPoke);
        const data = await res.json();
        setLoadPoke(data.next);
    
        function createPokemonObject(result) {
        result.forEach(async (pokemon) => {
            const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            const data = await res.json();
            setAllPokemons((currentList) => [...currentList, data]);
        });
        }
        createPokemonObject(data.results);
        await console.log(allPokemons);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

    return data;
} 


// export const getPokemonStats = (id) => {


    
// }