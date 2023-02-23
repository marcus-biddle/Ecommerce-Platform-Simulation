import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usePokemonContext, useShoppingCartContext } from '../../hooks';
import pic from '../../data/assets/pokeballs.gif';
import { BreadCrumbWrapper, CartButton, HeaderContainer, InfoContainer, PDPContainer, PDPStyling, PokemonContainer, PriceStyling, ProductHeader, ProductImg } from './styled';
import { PokeInfo } from '../../component-library/TabGroup';
import { PokemonPrice } from '../ProductCard';
import { showOnLoad } from '../../helpers/conditionals';
import { getPathname } from '../../helpers/navigation';

export const PDP = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { pokemon, isLoading } = usePokemonContext();
    const { increaseCartQuantity } = useShoppingCartContext();
    const pokeId = Number(id);
    const pokemonPDP = pokemon[pokeId || 0]
    const fallback = (<p>Loading...</p>);
    const props = {
      id,
      pokemonPDP
    }

  const handleClick = () => {
    const price = ((pokemonPDP.weight / pokemonPDP.id) + pokemonPDP.base_experience).toFixed(2);
    
    increaseCartQuantity(pokemonPDP.id, price);
    navigate('/cart');
  };

  return (
    <PDPStyling>
        <BreadCrumbWrapper>
          ..{getPathname()}
        </BreadCrumbWrapper>

        <PDPContainer>
          <ProductImg src={pic} alt='' />

          <PokemonContainer>
            <HeaderContainer>
              {showOnLoad(isLoading)(fallback)(
                <ProductHeader>{pokemonPDP.name}</ProductHeader>
              )}
              <PriceStyling>
                {showOnLoad(isLoading)(fallback)(
                  <PokemonPrice pokemon={pokemonPDP}/>
                )}
              </PriceStyling>
            </HeaderContainer>

            <InfoContainer>
              <PokeInfo {...props} />
            </InfoContainer>
            
            {showOnLoad(isLoading)(fallback)(
              <CartButton onClick={handleClick}>BUY {pokemonPDP.name}</CartButton>
            )}
          </PokemonContainer>
        </PDPContainer>
    </PDPStyling>
  )
}