import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemonContext } from '../../hooks';

export const PDP = () => {
    const { id } = useParams();
    const { pokemon } = usePokemonContext();
    const pokemonPDP = pokemon[id? id : -1]

    console.log(pokemonPDP);
  return (
    <div>
        {pokemonPDP.name}
    </div>
  )
}