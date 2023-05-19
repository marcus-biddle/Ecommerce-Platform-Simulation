import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { PokemonContext } from "./context"

export const PokemonProvider = ({ children }: any) => {
    const [pokemon, setPokemon] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(true);

    const pokemonClient = axios.create({
        baseURL: "https://pokeapi.co/api/v2/pokemon/"
    });

    const fetchPokemonNames = useCallback((async() => {
        pokemonClient.get(`?limit=491&offset=0`)
        .then((response) => {

            const requestPokemon = [];

            for (let pokemon of response.data.results) {
                const url = pokemon.url;
                requestPokemon.push(axios.get(`${url}`));
            }
            return Promise.all(requestPokemon);
        })
        .then((responseList) => {

            const dataList = [];
            
            for (let response of responseList) {
                dataList.push(response.data);
            }
            setPokemon(dataList)
            setLoading(false);

        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [])

        useEffect(() => {
            fetchPokemonNames();
        }, [fetchPokemonNames])


        const value = {
            pokemon,
            isLoading
        }
    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
}