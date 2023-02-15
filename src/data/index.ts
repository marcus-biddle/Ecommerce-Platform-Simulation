import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const usePokemon = () => {
    const [pokemonNames, setPokemonNames] = useState<any[]>([]);
    const [pokemon, setPokemon] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(true);

    
    const x = ['two', 'three'];

    useEffect(() => {

        const pokemonNamesClient = axios.create({
            baseURL: "https://pokeapi.co/api/v2/pokemon/"
        })
    
        const fetchPokemonNames = async () => {
            let response = await pokemonNamesClient.get("?limit=151")
            setPokemonNames(response.data.results)
        }

        const fetchPokemon = async() => {
            await fetchPokemonNames();

            let pokemonList: any = [{}];

            // console.log('names', pokemonNames)

            pokemonNames.map(async (pokemon) => {
                const url = pokemon.url;
            
                const client = axios.create({
                    baseURL: `${url}`
                });
                
    
                let response = await client.get("");
                // console.log('test', response.data)
                pokemonList.push(response.data);
                setLoading(false);
            })

            // console.log('list',pokemonList)

            setPokemon(pokemonList);
        }
        fetchPokemon();

    }, [])

    console.log('pokemon',pokemon);

    return {pokemon: pokemon, loading: isLoading};
}

// export const TranslateData = () => {
//     const data = useData();
//     const [poke, setPoke] = useState<any[]>([]);

//     useEffect(() => {

//         data.map(async (pokemon) => {
            
            
//         })
        
//     }, [])

//     console.log('test21', poke)
//     return poke;
// }