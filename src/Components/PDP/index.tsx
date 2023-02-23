import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { usePokemonContext, useShoppingCartContext } from '../../hooks';
import pic from '../../data/assets/pokeballs.gif';
import { BreadCrumbStyling, CartButton, HeaderContainer, InfoContainer, PDPContainer, PDPStyling, PokemonContainer, PriceStyling, ProductHeader, ProductImg } from './styled';
import axios from 'axios';
import { PokeInfo } from '../../component-library/TabGroup';
import { PokemonPrice } from '../ProductCard';
import { Cart } from '../../pages';

export const PDP = () => {
    const { id, region } = useParams();
    const navigate = useNavigate();
    const { pokemon, isLoading } = usePokemonContext();
    const { increaseCartQuantity } = useShoppingCartContext();
    const pokeId = Number(id);
    const pokemonPDP = pokemon[pokeId || 0]
    const props = {
      id,
      pokemonPDP
    }
    console.log(pokemonPDP)
    

  const handleClick = () => {
    const price = ((pokemonPDP.weight / pokemonPDP.id) + pokemonPDP.base_experience).toFixed(2);
    
    increaseCartQuantity(pokemonPDP.id, price);
    navigate('/cart');
  }

  if (isLoading === true) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <PDPStyling>
        <BreadCrumbStyling>
          ../{region}/pokemon/{id}
        </BreadCrumbStyling>
        <PDPContainer>
          <ProductImg src={pic} alt='' />
          <PokemonContainer>
            <HeaderContainer>
              <ProductHeader>{pokemonPDP.name}</ProductHeader>
              <PriceStyling>
                <PokemonPrice pokemon={pokemonPDP}/>
              </PriceStyling>
            </HeaderContainer>
            <InfoContainer>
              <PokeInfo {...props} />
            </InfoContainer>
            <CartButton onClick={handleClick}>BUY {pokemonPDP.name}</CartButton>
          </PokemonContainer>
        </PDPContainer>
        
    </PDPStyling>
  )
}