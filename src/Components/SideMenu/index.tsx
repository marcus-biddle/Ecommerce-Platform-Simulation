import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LEGENDARIES, RegionType, STARTER_POKEMON } from '../../constants';
import { MenuStyle, StyledMenuH1, StyledMenuH4, StyledMenuP } from './styled';
import { usePokemonContext } from '../../hooks';

export interface RegionProps {
  region : RegionType;
}

const Starters = ({ pokemon, region }: any) => {
  return (
    <div>
      <StyledMenuH4>{STARTER_POKEMON[region.index].label}</StyledMenuH4>
      <div>
        <StyledMenuP>{pokemon[STARTER_POKEMON[region.index].fire].name}</StyledMenuP>
        <StyledMenuP>{pokemon[STARTER_POKEMON[region.index].water].name}</StyledMenuP>
        <StyledMenuP>{pokemon[STARTER_POKEMON[region.index].grass].name}</StyledMenuP>
      </div>
    </div>
  )
}

const Legendaries = ({ pokemon, region }: any) => {
  return (
    <div>
        <StyledMenuH4>{LEGENDARIES[region.index].label}</StyledMenuH4>
        <div>
          <StyledMenuP>{pokemon[LEGENDARIES[region.index].first].name}</StyledMenuP>
          <StyledMenuP>{pokemon[LEGENDARIES[region.index].second].name}</StyledMenuP>
          <StyledMenuP>{pokemon[LEGENDARIES[region.index].third].name}</StyledMenuP>
        </div>
    </div>
  )
}

export const SideMenu = ({ region }: RegionProps) => {
  const { pokemon, isLoading } = usePokemonContext();


  if (isLoading) {
  return (
    <div>Loading...</div>
  )
  }
  return (
    <MenuStyle>
      <StyledMenuH1>{region.label}</StyledMenuH1>
      <Starters pokemon={pokemon} region={region} />
      <Legendaries pokemon={pokemon} region={region} />
    </MenuStyle>
  )
}