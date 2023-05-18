import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usePokemonContext, useShoppingCartContext } from '../../hooks';
import pic from '../../assets/pokeballs.gif';
import { BreadCrumb, CartButton, HeaderContainer, InfoContainer, PDPContainer, PDPStyling, PokemonContainer, PriceStyling, ProductHeader, ProductImg } from './styled';
import { showOnLoad } from '../../helpers/conditionals';
import { getPathname } from '../../helpers/navigation';
import { getPriceNum } from '../../helpers/currency';
import { PokeInfo } from './ProductInfo';

export const Product = () => {
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
    const price = getPriceNum(pokemonPDP);
    
    increaseCartQuantity(pokemonPDP.id, price, pokemonPDP.name);
    navigate('/cart');
  };

  return (
    <PDPStyling>
        <BreadCrumb>
          ..{getPathname()}
        </BreadCrumb>

        <PDPContainer>
          <ProductImg src={pic} alt='' />

          <PokemonContainer>
            <HeaderContainer>
              {showOnLoad(isLoading)(fallback)(
                <ProductHeader>{pokemonPDP.name}</ProductHeader>
              )}
              <PriceStyling>
                {showOnLoad(isLoading)(fallback)(
                  // <PokemonPrice pokemon={pokemonPDP}/>
                  <>FIXED $$</>
                )}
              </PriceStyling>
            </HeaderContainer>

            <InfoContainer>
              {showOnLoad(isLoading)(fallback)(
                <PokeInfo {...props} />
              )}
            </InfoContainer>
            
            {showOnLoad(isLoading)(fallback)(
              <CartButton onClick={handleClick}>BUY {pokemonPDP.name}</CartButton>
            )}
          </PokemonContainer>
        </PDPContainer>
    </PDPStyling>
  )
}