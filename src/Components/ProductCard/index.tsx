import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { CardHeader, CardInfoWrapper, CardName, CardStyle, ImageWrapper, StyledImg, StyledSpan } from './styled';

const PokemonPrice = ({ pokemon }: any) => {
    const price = ((pokemon.weight / pokemon.id) + pokemon.base_experience).toFixed(2);

    return (
        <div>
            ${ price }
        </div>
    )
}

const PokemonTypes = ({ pokemon }: any) => {
    return (
        <div style={{ paddingLeft: '10px', paddingBottom: '3.5px'}}>
        {pokemon.types.map((types: any) => {
            return (
                <StyledSpan itemType={types.type.name}>{types.type.name}</StyledSpan>
            )
        })}
        </div>
    )
}

export const ProductCard = ({ pokemon, region }: any) => {
  return (
    <CardStyle>
        <Link to={`${ROUTES[region.index].location}/${pokemon.id - 1}`}>
        <ImageWrapper>
            <StyledImg src={pokemon.sprites.front_default} alt=''/>
        </ImageWrapper>
        <CardInfoWrapper>
            <CardHeader>
                <CardName>
                    { pokemon.name }
                </CardName>
                <PokemonPrice pokemon={pokemon} />
            </CardHeader>
            <PokemonTypes pokemon={pokemon} />
        </CardInfoWrapper>
        </Link>
        
    </CardStyle>
  )
}