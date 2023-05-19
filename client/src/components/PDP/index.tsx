import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { usePokemonContext, useShoppingCartContext } from '../../hooks';
import { CTAButtonWrapper, CTAStyle, CTAText, CartButton, ImageGallery, MainImg, MainImgSection, PriceSectionWrapper, ProductImagesWrapper, ProductImg, ProductInfo, ProductWrapper, SaleSticker, VolumeButton, VolumeButtonText, VolumeStyle, VolumeWrapper } from './styled';
import { showSale } from '../../helpers/conditionals';
import { getDiscount, getPriceNum } from '../../helpers/currency';
import { getPokemonImages } from '../../helpers/pokemon';

import { numToUSD } from '../../helpers/currency';
import { AiFillStar } from 'react-icons/ai';
import { PokeInfo } from './ProductInfo';

const ProductImages = ({ pokemon }: any) => {
  const pokeImages = getPokemonImages(pokemon);
  const [mainImage, setMainImage] = useState<string>(pokeImages.main);
  
  const handleClick = (image: string) => {
    setMainImage(image);
  }

  return (
    <ProductImagesWrapper>
    <MainImgSection>
    {showSale(pokemon.height, pokemon.id)
      (
        <SaleSticker>SALE</SaleSticker>
      )()
    }
    <MainImg src={mainImage} alt='' />
    </MainImgSection>
    <ImageGallery>
      <ProductImg src={pokeImages.front} alt='' style={{ height: '100px', width: '100px'}} onClick={() => handleClick(pokeImages.front)} />
      <ProductImg src={pokeImages.back} alt='' style={{ height: '100px', width: '100px'}} onClick={() => handleClick(pokeImages.back)}/>
      <ProductImg src={pokeImages.main} alt='' style={{ height: '100px', width: '100px'}} onClick={() => handleClick(pokeImages.main)}/>
    </ImageGallery>
    </ProductImagesWrapper>
    
  )
}

const StarRating = ({ pokemon }: any) => {
  const AMOUNT_OF_STARS = Math.round((pokemon.weight * pokemon.height) / (pokemon.base_experience * 5) < 1 ? 1 : (pokemon.weight * pokemon.height) / (pokemon.base_experience * 5) > 5 ? 5 : (pokemon.weight * pokemon.height) / (pokemon.base_experience * 5));
  const stars = Array.from({ length: AMOUNT_OF_STARS});
  const blackStars = Array.from({ length: 5 - AMOUNT_OF_STARS});

  return (
    <div>
      {stars.map(() => {
        return (
          <AiFillStar style={{ color: 'gold'}}/>
        )
      })}
      {blackStars.map(() => {
        return (
          <AiFillStar />
        )
      })}
    </div>
  )
}

const PriceSection = ({ pokemon, amount }: any) => {
  return (
    <PriceSectionWrapper>
      <div style={{ fontSize: '32px', letterSpacing: '1.2px'}}>
        {pokemon.name}
        <StarRating pokemon={pokemon}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {showSale(pokemon.height, pokemon.id)
                (
                    <>
                      <div style={{ textDecorationLine: 'line-through', opacity: '.5', fontSize: '20px', textAlign: 'right'}}>{`${numToUSD(amount > 1 ? getPriceNum(pokemon) * amount : getPriceNum(pokemon))}`}</div>
                      <div style={{ fontSize: '32px'}}>{`${numToUSD(amount > 1 ? getDiscount(getPriceNum(pokemon), .15) * amount :  getDiscount(getPriceNum(pokemon), .15))}`}</div>
                    </>
                )(
                    <div style={{ fontSize: '32px'}}>{`${numToUSD(amount > 1 ? getPriceNum(pokemon) * amount : getPriceNum(pokemon))}`}</div>
                )
            }
      </div>
    </PriceSectionWrapper>
  )
}

export const Product = () => {
    const { id } = useParams();
    const { pokemon, isLoading } = usePokemonContext();
    const { increaseCartQuantity } = useShoppingCartContext();
    const pokeId = Number(id);
    const pokemonPDP = pokemon[pokeId || 0]
    const fallback = (<p>Loading...</p>);
    const [amount, setAmount] = useState(1);

  const handleCTA = () => {
    increaseCartQuantity(pokemonPDP.id, getPriceNum(pokemonPDP), pokemonPDP.name, amount);
  };

  const handleVolume = (direction: string) => {
    if (direction === 'decrease') {
      if (amount === 1) {
        //
      } else {
        setAmount(amount - 1)
      }
    } else if (direction === 'increase') {
      setAmount(amount + 1)
    };
  };

  if (isLoading) {
    return (
      <>{fallback}</>
    )
  }

  console.log(pokemonPDP);

  return (
    <ProductWrapper>
      <ProductImages pokemon={pokemonPDP}/>
      <ProductInfo>
        <PriceSection pokemon={pokemonPDP} amount={amount}/>
        <div>
          <VolumeWrapper>
            <VolumeButton onClick={() => handleVolume('decrease')}>
              <VolumeButtonText>-</VolumeButtonText>
            </VolumeButton>
            <VolumeStyle>{amount}</VolumeStyle>
            <VolumeButton onClick={() => handleVolume('increase')}>
              <VolumeButtonText>+</VolumeButtonText>
            </VolumeButton>
          </VolumeWrapper>
          <CTAButtonWrapper>
            <CTAStyle>
              <Link to='/cart' onClick={() => handleCTA()}>
              <CTAText>Add To Cart</CTAText>
              </Link>
            </CTAStyle>
          </CTAButtonWrapper>
        </div>
      </ProductInfo>
    </ProductWrapper>
    // <PDPStyling>
    //     <BreadCrumb>
    //       ..{getPathname()}
    //     </BreadCrumb>

    //     <PDPContainer>
    //       {/* <ProductImg src={pic} alt='' /> */}

    //       <PokemonContainer>
    //         <HeaderContainer>
    //           {showOnLoad(isLoading)(fallback)(
    //             <ProductHeader>{pokemonPDP.name}</ProductHeader>
    //           )}
    //           <PriceStyling>
    //             {showOnLoad(isLoading)(fallback)(
    //               // <PokemonPrice pokemon={pokemonPDP}/>
    //               <>FIXED $$</>
    //             )}
    //           </PriceStyling>
    //         </HeaderContainer>

    //         <InfoContainer>
    //           {showOnLoad(isLoading)(fallback)(
    //             <PokeInfo {...props} />
    //           )}
    //         </InfoContainer>
            
    //         {showOnLoad(isLoading)(fallback)(
    //           <CartButton onClick={handleClick}>BUY {pokemonPDP.name}</CartButton>
    //         )}
    //       </PokemonContainer>
    //     </PDPContainer>
    // </PDPStyling>
  )
}