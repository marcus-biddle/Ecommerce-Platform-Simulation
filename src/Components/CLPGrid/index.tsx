import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { POKEMONFILTER, REGIONS } from '../../constants';
import { usePokemonContext } from '../../hooks';
import { ProductCard } from '../ProductCard';
import { RegionProps } from '../SideMenu';
import { Grid, GridWrapper } from './styled';

export const CLPGrid = ({ region }: RegionProps) => {
   const { kantoPokemon, johtoPokemon, sinnohPokemon } = usePokemonContext();
   const [pokemonRegion, setPokemonRegion] = useState([]);

   const PokemonCard = () => {
        region.index === 0 ? setPokemonRegion(kantoPokemon) 
        : 
        region.index === 1 ? setPokemonRegion(johtoPokemon)
        : setPokemonRegion(sinnohPokemon); 
        return (
            <>
            {pokemonRegion.slice(0, 18).map((pokemon: any) => {
                return (
                    <ProductCard pokemon={pokemon} region={region} />
                )
            })}
            </>
        )
    }
   
    return (
        <GridWrapper>
            <Grid>
                <PokemonCard />
            </Grid>
        </GridWrapper>
    
    )
}