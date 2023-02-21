import React from 'react'
import { useNavigate } from 'react-router'
import pic from '../../assets/traveler.jpg'
import pic2 from '../../assets/pball.jpeg'
import { BannerButton, BannerWrapper, HeroImage, HeroImageWrapper, HeroInfo, HeroWrapper, HomeButton, HomeStyle, ImgContainer, ImgCover, PokeImg, StyledImg, TrendingWrapper } from './styled'
import { usePokemonContext } from '../../hooks'


const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/kanto/pokemon');   
    }

    return (
        <>
            <HeroImageWrapper>
                <HeroImage src={pic} alt={''} />
            </HeroImageWrapper>
            <HeroInfo>
                <h2>Start Your <span>Adventure</span> Here</h2>
                <p>Gear up & choose your pokemon!</p>
                <HomeButton onClick={handleClick}>BUY</HomeButton>
            </HeroInfo>
        </>
            
    )
}

const Banner = () => {
    return (
        <BannerButton onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
            <h2 >Free Standard Shipping Over $30 for Members</h2>
            <span>Not a member? Join Today!</span>
        </BannerButton>
        // <button className='small-banner' onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
        //     
        // </button>
    )
};

const PokeBall = ({ index }: any) => {
    const { pokemon, isLoading } = usePokemonContext();
    // This doesn't work because pokeimg is all stacked over one position.
    return (
        <>
            <ImgCover src={pic2} alt='' />
            <PokeImg>
                <StyledImg src={ pokemon[index].sprites.front_default} alt='' />
            </PokeImg>
            
        </>
    )
}

const Trending = () => {
    const { pokemon, isLoading } = usePokemonContext();
    return (
        <ImgContainer>
         {isLoading === false? 
         <>
            <PokeBall index={Math.floor(pokemon.length * Math.random())}/>
            <PokeBall index={Math.floor(pokemon.length * Math.random())}/>
            <PokeBall index={Math.floor(pokemon.length * Math.random())}/>
         </>
         :
         'Loading...'
         }
            
        </ImgContainer>
    )
}

export const Home = () => {
  return (
    <HomeStyle>
        <HeroWrapper>
            <Hero />
        </HeroWrapper>

        <TrendingWrapper>
            <h2 style={{ paddingLeft: '18px'}}>Trending Pokemon</h2>
            <Trending />
        </TrendingWrapper>
        
        <BannerWrapper>
            <Banner />
        </BannerWrapper>
    </HomeStyle>
  )
}