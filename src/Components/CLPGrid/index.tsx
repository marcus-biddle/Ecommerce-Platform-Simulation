import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { REGIONS } from '../../constants';

export const CLPGrid = () => {
    // Will need to grab regional pokemon and their images. As well as figure out pricing
    const [pokemonNames, setPokemonNames] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(true);

        useEffect(() => {
            const pokemonNamesClient = axios.create({
                baseURL: "https://pokeapi.co/api/v2/pokemon/"
            })
        
            const fetchPokemonNames = () => {
                pokemonNamesClient.get(`?limit=${REGIONS[0].value.last}&offset=${REGIONS[0].value.first}`) // include limit and offset to get specific region
                .then((response) => {
                    const requestPokemon = [];

                    for (let pokemon of response.data.results) {
                        const url = pokemon.url;
                        requestPokemon.push(axios.get(`${url}`));
                    }

                    return Promise.all(requestPokemon);
                    // setPokemonNames(response.data.results)
                    // setLoading(false);
                })
                .then((responseList) => {
                    for (let response of responseList) {
                        setPokemonNames((curr) => [...curr, response.data])
                    }
                })
            }

            fetchPokemonNames();
        }, [])

        // useEffect(() => {
        //     pokemonNames.forEach((pokemon) => {

        //         const pokemonClient = axios.create({
        //             baseURL: ``
        //         })
        //     })
            
        // })

    return (
    <div>
        {pokemonNames.map(item => item.name)}
    </div>
    )
}