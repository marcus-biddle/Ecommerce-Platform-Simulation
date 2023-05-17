import React from 'react'
import { Link } from 'react-router-dom';
import { getPriceNum, numToUSD } from '../../../helpers/currency';
import { BsCartPlusFill } from 'react-icons/bs';
import './styled/style.css';
import { CardHeader, CardInfoWrapper, CardName, CardPrice, CardStyle, DiscountedPrice, ImageWrapper, SaleSticker, StyledImg, StyledSpan } from './styled';
import { DiscountPrice, PokeName, PokePrice } from '../../../pages/Home/styled';

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
    const price = getPriceNum(pokemon);
    const discountPrice = price - price * .15;

  return (
    <CardStyle>
        <Link to={`/${region.path}/pokemon/${pokemon.id - 1}`}>
            {pokemon.height < 11 && pokemon.id % 2 === 0 
            ? 
            <SaleSticker>
                SALE
            </SaleSticker>
            :
            ''
            }
            <ImageWrapper>
                <StyledImg src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </ImageWrapper>
        </Link>
        <CardInfoWrapper>
            <div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <CardHeader>{pokemon.name}</CardHeader>
                <div style={{ paddingLeft: '10px', paddingTop: '5px'}}>
                    {pokemon.types.map((types: any) => {
                        return (
                            <StyledSpan key={types.type.name} itemType={types.type.name}>{types.type.name}</StyledSpan>
                        )
                    })}
                </div>
            </div>

            {pokemon.height < 11 && pokemon.id % 2 === 0
            ?
            <>
            <CardPrice>{`${numToUSD(discountPrice)}`}</CardPrice>
            <DiscountedPrice>{`${numToUSD(price)}`}</DiscountedPrice>
            </>
            :
            <CardPrice>{`${numToUSD(price)}`}</CardPrice>
            }
            </div>
            <Link to={'/cart'}>
                {/* Need to add onclick functionality */}
                <div className='grid-cta-wrapper'>
                    <BsCartPlusFill className='icon-CTA-grid'/>
                </div>
            </Link>
            
        </CardInfoWrapper>
    </CardStyle>
    // <CardStyle>
    //     <Link to={`/${region.path}/pokemon/${pokemon.id - 1}`}>
    //     <ImageWrapper>
    //         <StyledImg src={pokemon.sprites.front_default} alt=''/>
    //     </ImageWrapper>
    //     <CardInfoWrapper>
    //         <CardHeader>
    //             <CardName>{ pokemon.name }</CardName>
                // <PokemonPrice pokemon={pokemon} />
    //         </CardHeader>
            // <PokemonTypes pokemon={pokemon} />
    //     </CardInfoWrapper>
    //     </Link>
        
    // </CardStyle>
  )
}