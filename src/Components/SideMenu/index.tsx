import React from 'react';
import { LEGENDARIES, RegionType, STARTER_POKEMON } from '../../constants';
import { MenuItem, SideMenuWrapper, StyledMenuH4, StyledMenuLink } from './styled';
import { usePokemonContext } from '../../hooks';
import { showOnLoad } from '../../helpers/conditionals';

export interface RegionProps {
  region : RegionType;
}

const Starters = ({ pokemon, region }: any) => {
  return (
    <>
      <StyledMenuLink to={`/${region.path}/pokemon/${pokemon[STARTER_POKEMON[region.index].fire].id - 1}`}>{pokemon[STARTER_POKEMON[region.index].fire].name}</StyledMenuLink>
      <StyledMenuLink to={`/${region.path}/pokemon/${pokemon[STARTER_POKEMON[region.index].water].id - 1}`}>{pokemon[STARTER_POKEMON[region.index].water].name}</StyledMenuLink>
      <StyledMenuLink to={`/${region.path}/pokemon/${pokemon[STARTER_POKEMON[region.index].grass].id - 1}`}>{pokemon[STARTER_POKEMON[region.index].grass].name}</StyledMenuLink>
    </>
  )
}

const Legendaries = ({ pokemon, region }: any) => {
  return (
    <>
      <StyledMenuLink to={`/${region.path}/pokemon/${pokemon[LEGENDARIES[region.index].first].id - 1}`}>{pokemon[LEGENDARIES[region.index].first].name}</StyledMenuLink>
      <StyledMenuLink to={`/${region.path}/pokemon/${pokemon[LEGENDARIES[region.index].second].id - 1}`}>{pokemon[LEGENDARIES[region.index].second].name}</StyledMenuLink>
      <StyledMenuLink to={`/${region.path}/pokemon/${pokemon[LEGENDARIES[region.index].third].id - 1}`}>{pokemon[LEGENDARIES[region.index].third].name}</StyledMenuLink>
    </>
  )
}

export const SideMenu = ({ region }: RegionProps) => {
  const { pokemon, isLoading } = usePokemonContext();
  const props = { pokemon, region }
  const fallback = (<p >Loading...</p>)

  return (
    <SideMenuWrapper>
      <MenuItem>
        <StyledMenuH4>{STARTER_POKEMON[region.index].label}</StyledMenuH4>
        {showOnLoad(isLoading)(fallback)(
          <Starters {...props} />
        )}
      </MenuItem>
      
      <MenuItem>
        <StyledMenuH4>{LEGENDARIES[region.index].label}</StyledMenuH4>
        {showOnLoad(isLoading)(fallback)(
          <Legendaries {...props} />
        )}
      </MenuItem>
    </SideMenuWrapper>
  )
}