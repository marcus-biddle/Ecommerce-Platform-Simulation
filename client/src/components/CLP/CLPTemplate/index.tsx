import React from 'react'
import { REGIONS } from '../../../constants/regions';
import { showOnLoad } from '../../../helpers/conditionals';
import { usePokemonContext } from '../../../hooks';
import { ProductCard } from '../CLPCard';
import { Grid } from './styled';
import { getPathname } from '../../../helpers/navigation';
import { getFilteredPokemon, getSelectedPokemon } from '../../../helpers/pokemon';

export const CLPTemplate = ({ currentRegion, activeFilter }: any) => {
    const { pokemon, isLoading } = usePokemonContext();
    const fallback = (<p>Loading...</p>)

    const path = getPathname();
    const regional_pokemon = getSelectedPokemon(path, pokemon);
    const filtered_pokemon = getFilteredPokemon(regional_pokemon, activeFilter);
   
    return (
            <Grid>
                {showOnLoad(isLoading)(fallback)(
                    REGIONS.map((region) => {
                        return (
                            <>
                            { region.path === path ?
                            filtered_pokemon.slice(0,18).map((pokemon: any) => {
                                return (
                                    <React.Fragment key={pokemon.id}>
                                        <ProductCard pokemon={pokemon} region={currentRegion} />
                                    </React.Fragment>
                                )
                            })
                            :
                            ''}
                            </>
                        )
                    })
                )}
            </Grid>
    )
}