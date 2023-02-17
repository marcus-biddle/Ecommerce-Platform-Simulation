import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { POKEMONFILTER, REGIONS } from '../../constants';
import { usePokemonContext } from '../../hooks';
import { ProductCard } from '../ProductCard';
import { RegionProps } from '../SideMenu';
import { Grid, GridWrapper } from './styled';

export const CLPGrid = ({ region }: RegionProps) => {
   const { pokemon } = usePokemonContext();
   const regional_pokemon = pokemon.filter(region.filter).slice(0,18);
    return (
        <GridWrapper>
            <Grid>
                {regional_pokemon.map((pokemon: any) => {
                    return (
                        <ProductCard pokemon={pokemon} />
                    )
                })}
            </Grid>
        </GridWrapper>
    
    )
}