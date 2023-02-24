import React from 'react'
import { Link } from 'react-router-dom';
import { getPriceNum, numToUSD } from '../../helpers/currency';
import { CardHeader, CardInfoWrapper, CardName, CardStyle, ImageWrapper, StyledImg, StyledSpan } from './styled';

export const PokemonPrice = ({ pokemon }: any) => {
    const price = getPriceNum(pokemon);

    return (
        <div>
            { numToUSD(price) }
        </div>
    )
}

const PokemonTypes = ({ pokemon }: any) => {
    return (
        <div style={{ paddingLeft: '10px', paddingBottom: '3.5px'}}>
        {pokemon.types.map((types: any) => {
            return (
                <StyledSpan key={types.type.name} itemType={types.type.name}>{types.type.name}</StyledSpan>
            )
        })}
        </div>
    )
}

export const ProductCard = ({ pokemon, region }: any) => {
  return (
    <CardStyle>
        <Link to={`/${region.path}/pokemon/${pokemon.id - 1}`}>
        <ImageWrapper>
            <StyledImg src={pokemon.sprites.front_default} alt=''/>
        </ImageWrapper>
        <CardInfoWrapper>
            <CardHeader>
                <CardName>{ pokemon.name }</CardName>
                <PokemonPrice pokemon={pokemon} />
            </CardHeader>
            <PokemonTypes pokemon={pokemon} />
        </CardInfoWrapper>
        </Link>
        
    </CardStyle>
  )
}