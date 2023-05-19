import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usePokemonContext, useShoppingCartContext } from '../../hooks';
import pic from '../../assets/pokeballs.gif';
import { BreadCrumb, CartButton, HeaderContainer, InfoContainer, PDPContainer, PDPStyling, PokemonContainer, PriceStyling, ProductHeader, ProductImg } from './styled';
import { showOnLoad, showSale } from '../../helpers/conditionals';
import { getPathname } from '../../helpers/navigation';
import { getDiscount, getPriceNum } from '../../helpers/currency';
import { PokeInfo } from './ProductInfo';
import { getPokemonImages } from '../../helpers/pokemon';
import background from '../../assets/bg.jpeg'
import { numToUSD } from '../../helpers/currency';
import { AiFillStar } from 'react-icons/ai';

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

export const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { pokemon, isLoading } = usePokemonContext();
    const { increaseCartQuantity } = useShoppingCartContext();
    const pokeId = Number(id);
    const pokemonPDP = pokemon[pokeId || 0]
    const fallback = (<p>Loading...</p>);

  const handleClick = () => {
    
    
    increaseCartQuantity(pokemonPDP.id, getPriceNum(pokemonPDP), pokemonPDP.name);
    navigate('/cart');
  };

  const AMOUNT_OF_STARS = Math.floor(Math.random() * 4);
  const stars = Array.from({ length: AMOUNT_OF_STARS});
  const blackStars = Array.from({ length: 4 - AMOUNT_OF_STARS});

  if (isLoading) {
    return (
      <>
      {fallback}
      </>
    )
  }

  return (
    <>
    <ProductImages pokemon={pokemonPDP}/>
    
    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '2rem', marginRight: '2rem', marginTop: '1rem', fontSize: '24px'}}>
      <div style={{ fontSize: '32px'}}>
        {pokemonPDP.name}
        <div>
          <AiFillStar style={{ color: 'gold'}}/>
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
          {/* {pokemonPDP.abilities.length >= 2 
            ?
            count += 1
            : pokemonPDP.stats[1].base_stat >= 64
            ?
            count += 1
            : pokemonPDP.stats[2].base_stat >= 64
            ?
            count += 1
            :
            pokemonPDP.stats[3].base_stat >= 100 ?
            count += 1
            : ''
          } */}
          
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {/* {numToUSD(price)} */}
        {showSale(pokemonPDP.height, pokemonPDP.id)
                (
                    <>
                      <div style={{ textDecorationLine: 'line-through', opacity: '.5', fontSize: '20px', textAlign: 'right'}}>{`${numToUSD(getPriceNum(pokemonPDP))}`}</div>
                      <div style={{ fontSize: '32px'}}>{`${numToUSD(getDiscount(getPriceNum(pokemonPDP), .15))}`}</div>
                    </>
                )(
                    <div style={{ fontSize: '32px'}}>{`${numToUSD(getPriceNum(pokemonPDP))}`}</div>
                )
            }
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