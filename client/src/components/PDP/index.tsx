import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePokemonContext, useShoppingCartContext } from '../../hooks';
import { CTAButtonWrapper, CTAStyle, CTAText, ImageGallery, MainImg, MainImgSection, OptionsWrapper, PriceSectionWrapper, ProductImagesWrapper, ProductImg, ProductInfo, ProductWrapper, SaleSticker, VolumeButton, VolumeButtonText, VolumeStyle, VolumeWrapper } from './styled';
import { showSale } from '../../helpers/conditionals';
import { getDiscount, getLevelPrice, getPriceNum } from '../../helpers/currency';
import { capitlizeText, getPokemonImages } from '../../helpers/pokemon';

import { numToUSD } from '../../helpers/currency';
import { AiFillStar } from 'react-icons/ai';
import { LEVEL_OPTIONS, Levels } from '../../constants/content';

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

const PriceSection = ({ pokemon, price, discountPrice }: any) => {
  console.log(discountPrice);
  return (
    <PriceSectionWrapper>
      <div style={{ fontSize: '32px', letterSpacing: '1.2px', fontFamily: 'Abel'}}>
        {capitlizeText(pokemon.name)}
        <StarRating pokemon={pokemon}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {showSale(pokemon.height, pokemon.id)
                (
                    <>
                      <div style={{ textDecorationLine: 'line-through', opacity: '.5', fontSize: '20px', textAlign: 'right', fontFamily: 'Abel'}}>{price}</div>
                      <div style={{ fontSize: '32px', fontFamily: 'Abel'}}>{discountPrice}</div>
                    </>
                )(
                    <div style={{ fontSize: '32px', fontFamily: 'Abel'}}>{price}</div>
                )
            }
      </div>
    </PriceSectionWrapper>
  )
}

const LevelSelection = ({level, setLevel}: any) => {
  return (
        <div style={{ marginTop: '1.5rem'}}>
          <div style={{ display: 'flex', marginLeft: '3rem', fontSize: '20px', fontFamily: 'Abel', fontWeight: 'bolder', marginBottom: '1rem'}}>
            <span>Level:</span>
            <span style={{ paddingLeft: '5px', color: 'grey', textDecorationLine: 'underline', fontFamily: 'Abel', fontWeight: 'bolder'}}>{level}</span>
          </div>
          <OptionsWrapper>
            {LEVEL_OPTIONS.map((option) => {
                const isActive = level === option.level;
                return (
                  <div onClick={() => setLevel(option.level)}
                  style={{ backgroundColor: 'rgba(2,0,36,.8)', color: 'white',height: '40px', width: '40px', borderRadius: '50%', border: `${isActive ? '3px solid orange' : '3px solid transparent'}`}}>
                    <div style={{ textAlign: 'center', paddingTop: '10px'}}>
                      {option.level}
                    </div>
                  </div>
                )
              })}
          </OptionsWrapper>
        </div>
  )
}

export const Product = () => {
    const { id } = useParams();
    const { pokemon, isLoading } = usePokemonContext();
    const { increaseCartQuantity } = useShoppingCartContext();
    const pokeId = Number(id);
    const pokemonPDP = pokemon[pokeId || 0];
    const [amount, setAmount] = useState(1);
    const [level, setLevel] = useState<1 | 25 | 50 | 99>(1);
    

  const handleCTA = () => {
    increaseCartQuantity(
      pokemonPDP.id, 
      showSale(pokemonPDP.height, pokemonPDP.id)(discountPrice)(price),
      showSale(pokemonPDP.height, pokemonPDP.id)(discountPrice)(price),
      pokemonPDP.name, 
      amount, 
      level,
      true);
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
      <p>Loading...</p>
    )
  }

  const price = (amount > 1 ? getPriceNum(pokemonPDP) * amount : getPriceNum(pokemonPDP)) + getLevelPrice(level);
    const discountPrice = (amount > 1 ? getDiscount(getPriceNum(pokemonPDP), .15) * amount :  getDiscount(getPriceNum(pokemonPDP), .15)) + getLevelPrice(level);

  return (
    <ProductWrapper>
      <ProductImages pokemon={pokemonPDP}/>
      <ProductInfo>
        <PriceSection 
          pokemon={pokemonPDP} 
          price={numToUSD(price)}
          discountPrice={numToUSD(discountPrice)}
        />
        <LevelSelection level={level} setLevel={setLevel} />
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
  )
}