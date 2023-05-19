import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usePokemonContext, useShoppingCartContext } from '../../hooks';
import { ProductImg } from './styled';
import { showSale } from '../../helpers/conditionals';
import { getDiscount, getPriceNum } from '../../helpers/currency';
import { getPokemonImages } from '../../helpers/pokemon';
import background from '../../assets/bg.jpeg'
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
    <>
    <div style={{ backgroundImage: `url(${background})`, height: '400px', marginLeft: '2rem', marginRight: '2rem', marginTop: '2rem', borderRadius: '25px', overflow: 'hidden'}}>
    {showSale(pokemon.height, pokemon.id)
      (
        <div style={{ position: 'absolute', left: '3.5rem', top: '7.5rem', fontSize: '24px', backgroundColor: 'red', paddingLeft: '5px', paddingRight: '5px', borderRadius: '8px'}}>SALE</div>
      )()
    }
    <img src={mainImage} alt='' style={{ height: '400px', width: '100%'}} />
    </div>
    <div style={{ textAlign: 'center', marginTop: '5px', marginLeft: '2rem', marginRight: '2rem', display: 'flex', justifyContent: 'space-evenly'}}>
      <ProductImg src={pokeImages.front} alt='' style={{ height: '100px'}} onClick={() => handleClick(pokeImages.front)} />
      <ProductImg src={pokeImages.back} alt='' style={{ height: '100px'}} onClick={() => handleClick(pokeImages.back)}/>
      <ProductImg src={pokeImages.main} alt='' style={{ height: '100px'}} onClick={() => handleClick(pokeImages.main)}/>
    </div>
    </>
    
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

const PriceSection = ({ pokemon }: any) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem', fontSize: '24px'}}>
      <div style={{ fontSize: '32px', letterSpacing: '1.2px'}}>
        {pokemon.name}
        <StarRating pokemon={pokemon}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {showSale(pokemon.height, pokemon.id)
                (
                    <>
                      <div style={{ textDecorationLine: 'line-through', opacity: '.5', fontSize: '20px', textAlign: 'right'}}>{`${numToUSD(getPriceNum(pokemon))}`}</div>
                      <div style={{ fontSize: '32px'}}>{`${numToUSD(getDiscount(getPriceNum(pokemon), .15))}`}</div>
                    </>
                )(
                    <div style={{ fontSize: '32px'}}>{`${numToUSD(getPriceNum(pokemon))}`}</div>
                )
            }
      </div>
    </div>
  )
}

export const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { pokemon, isLoading } = usePokemonContext();
    const { increaseCartQuantity } = useShoppingCartContext();
    const pokeId = Number(id);
    const pokemonPDP = pokemon[pokeId || 0]
    const fallback = (<p>Loading...</p>);
    const [amount, setAmount] = useState(0);

  const handleCTA = () => {
    increaseCartQuantity(pokemonPDP.id, getPriceNum(pokemonPDP), pokemonPDP.name);
    navigate('/cart');
  };

  const handleVolume = (direction: string) => {
    if (direction === 'decrease') {
      if (amount === 0) {
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
    <>
    <ProductImages pokemon={pokemonPDP}/>
    <PriceSection pokemon={pokemonPDP}/>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginLeft: '5rem', marginRight: '5rem', marginTop: '.5rem'}}>
      <div style={{ height: '40px', width: '40px', borderRadius: '12px', backgroundColor: 'rgb(105, 103, 103, .25)', display: 'flex', justifyContent: 'center'}} onClick={() => handleVolume('decrease')}>
        <div style={{ paddingTop: '4px', fontSize: '28px'}}>-</div>
      </div>
      <div style={{ fontSize: '30px', height: '40px', width: '40px', textAlign: 'center'}}>{amount}</div>
      <div style={{ height: '40px', width: '40px', borderRadius: '12px', backgroundColor: 'rgb(105, 103, 103, .25)', display: 'flex', justifyContent: 'center'}} onClick={() => handleVolume('increase')}>
        <div style={{ paddingTop: '4px', fontSize: '28px'}}>+</div>
      </div>
    </div>
    </>
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