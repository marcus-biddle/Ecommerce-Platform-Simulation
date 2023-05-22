import React from 'react'
import { Link } from 'react-router-dom';
import { getDiscount, getPriceNum, numToUSD } from '../../helpers/currency';
import { BsCartPlusFill } from 'react-icons/bs';
import './styled/style.css';
import { CardHeader, CardInfoWrapper, CardPrice, CardStyle, DiscountedPrice, ImageWrapper, SaleSticker, StyledImg, StyledSpan } from './styled';
import { useShoppingCartContext } from '../../hooks';
import { showSale } from '../../helpers/conditionals'

export const ProductCard = ({ pokemon, region }: any) => {
    const { updateCart } = useShoppingCartContext();
    const price = getPriceNum(pokemon);

  return (
    <CardStyle>
        <Link to={`${pokemon.id - 1}`}>
            {showSale(pokemon.height, pokemon.id)
                (
                    <SaleSticker>SALE</SaleSticker>
                )()
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

                {showSale(pokemon.height, pokemon.id)
                    (
                        <>
                            <CardPrice>{`${numToUSD(getDiscount(price, .15))}`}</CardPrice>
                            <DiscountedPrice>{`${numToUSD(price)}`}</DiscountedPrice>
                        </>
                    )(
                        <CardPrice>{`${numToUSD(price)}`}</CardPrice>
                    )
                }
            </div>
            <Link to={'/cart'} onClick={() => updateCart(pokemon.id, showSale(pokemon.height, pokemon.id)(getDiscount(price, .15))(price), showSale(pokemon.height, pokemon.id)(getDiscount(price, .15))(price), pokemon.name, 1, 1, true)}>
                <div className='grid-cta-wrapper'>
                    <BsCartPlusFill className='icon-CTA-grid'/>
                </div>
            </Link>
        </CardInfoWrapper>
    </CardStyle>
  )
}