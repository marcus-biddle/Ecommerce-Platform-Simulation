import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LEGENDARIES, RegionType, ROUTES, STARTER_POKEMON } from '../../constants';
import { MenuStyle, StyledMenuH1, StyledMenuH4, StyledMenuLink } from './styled';
import { usePokemonContext } from '../../hooks';
import { Link } from 'react-router-dom';

export interface RegionProps {
  region : RegionType;
}

const Starters = ({ pokemon, region }: any) => {
  return (
    <div>
      <StyledMenuH4>{STARTER_POKEMON[region.index].label}</StyledMenuH4>
      <div>
        <StyledMenuLink to={`${ROUTES[region.index].location}/${pokemon[STARTER_POKEMON[region.index].fire].id - 1}`}>{pokemon[STARTER_POKEMON[region.index].fire].name}</StyledMenuLink>
        <StyledMenuLink to={`${ROUTES[region.index].location}/${pokemon[STARTER_POKEMON[region.index].water].id - 1}`}>{pokemon[STARTER_POKEMON[region.index].water].name}</StyledMenuLink>
        <StyledMenuLink to={`${ROUTES[region.index].location}/${pokemon[STARTER_POKEMON[region.index].grass].id - 1}`}>{pokemon[STARTER_POKEMON[region.index].grass].name}</StyledMenuLink>
      </div>
    </div>
  )
}

const Legendaries = ({ pokemon, region }: any) => {
  return (
    <div>
        <StyledMenuH4>{LEGENDARIES[region.index].label}</StyledMenuH4>
        <div>
          <StyledMenuLink to={`${ROUTES[region.index].location}/${pokemon[LEGENDARIES[region.index].first].id - 1}`}>{pokemon[LEGENDARIES[region.index].first].name}</StyledMenuLink>
          <StyledMenuLink to={`${ROUTES[region.index].location}/${pokemon[LEGENDARIES[region.index].second].id - 1}`}>{pokemon[LEGENDARIES[region.index].second].name}</StyledMenuLink>
          <StyledMenuLink to={`${ROUTES[region.index].location}/${pokemon[LEGENDARIES[region.index].third].id - 1}`}>{pokemon[LEGENDARIES[region.index].third].name}</StyledMenuLink>
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
      <Starters pokemon={pokemon} region={region} />
      <Legendaries pokemon={pokemon} region={region} />
    </MenuStyle>
  )
}