import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonContext } from "./context"

export const PokemonProvider = ({ children }: any) => {
    const [pokemon, setPokemon] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(true);

    const pokemonClient = axios.create({
        baseURL: "https://pokeapi.co/api/v2/pokemon/"
    })

    const fetchPokemonNames = async() => {
        pokemonClient.get(`?limit=491&offset=0`) // include limit and offset to get specific region
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
    }
        useEffect(() => {
            fetchPokemonNames();
        }, [])

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