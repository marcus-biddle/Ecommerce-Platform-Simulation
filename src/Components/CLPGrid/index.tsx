import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { REGIONS } from '../../constants';

export const CLPGrid = () => {
   // We can move the api call to context to save the state then be able to use the data anywhere
    const [pokemonNames, setPokemonNames] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(true);

    const pokemonNamesClient = axios.create({
        baseURL: "https://pokeapi.co/api/v2/pokemon/"
    })

    const fetchPokemonNames = async() => {
        pokemonNamesClient.get(`?limit=${REGIONS[0].value.last}&offset=${REGIONS[0].value.first}`) // include limit and offset to get specific region
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
            setPokemonNames(dataList)
            setLoading(false);

        })
    }
        useEffect(() => {
            fetchPokemonNames();
        }, [])

        console.log(pokemonNames);


    return (
    <div>
        {pokemonNames.map(item => item.name)}
    </div>
    )
}