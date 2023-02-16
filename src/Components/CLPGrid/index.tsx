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
                .then(response => {
                    setPokemonNames(response.data.results)
                    setLoading(false);
                })}

            fetchPokemonNames();
        }, [])

        useEffect(() => {
            pokemonNames.forEach(() => {
                
            })
            const pokemonClient = axios.create({
                baseURL: ``
            })
        })

    return (
    <div>
        {pokemonNames.map(item => item.name)}
    </div>
    )
}