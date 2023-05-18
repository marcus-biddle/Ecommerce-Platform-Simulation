import React, { useState } from 'react';
import { LEGENDARIES, STARTER_POKEMON } from '../../constants/pokemon';
import { MenuItem, SideMenuWrapper, StyledMenuH4, StyledMenuLink } from './styled';
import { usePokemonContext } from '../../hooks';
import { showOnLoad } from '../../helpers/conditionals';
import { RegionType } from '../../constants/regions';
import styled, { keyframes } from 'styled-components';

export interface RegionProps {
  region : RegionType;
}

const Starters = ({ pokemon, region }: any) => {
  return (
    <>
      <StyledMenuLink to={`${region.path}/${pokemon[STARTER_POKEMON[region.index].fire].id - 1}`}>{pokemon[STARTER_POKEMON[region.index].fire].name}</StyledMenuLink>
      <StyledMenuLink to={`${region.path}/${pokemon[STARTER_POKEMON[region.index].water].id - 1}`}>{pokemon[STARTER_POKEMON[region.index].water].name}</StyledMenuLink>
      <StyledMenuLink to={`${region.path}/${pokemon[STARTER_POKEMON[region.index].grass].id - 1}`}>{pokemon[STARTER_POKEMON[region.index].grass].name}</StyledMenuLink>
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

const FILTER_OPTIONS = [
  {
    id: 1,
    type: 'grass_bug',
  },
  {
    id: 2,
    type: 'poison_psychic_ghost',
  },
  {
    id: 3,
    type: 'fire',
  },
  {
    id: 4,
    type: 'water',
  },
  {
    id: 5,
    type: 'flying_ground_fighting',
  },
  {
    id: 6,
    type: 'ice',
  },
  {
    id: 7,
    type: 'fairy',
  },
  {
    id: 8,
    type: 'electric',
  },
  {
    id: 9,
    type: 'dragon_dark',
  },
  {
    id: 10,
    type: 'none'
  }
]

export const SideMenu = ({ handleFilterClick, activeFilter }: any) => {
  const { pokemon, isLoading } = usePokemonContext();
  const fallback = (<p >Loading...</p>)

  const FilterButton = styled.div.attrs(props => ({
    active: props.id === 'active' ? true : false
  }))`
    width: 100%;
    font-size: 18px;
    color: ${ props => props.active ? 'black' : 'black'};
    background-color: ${ props => props.active ? 'rgb(105, 103, 103, .25)': ''};
    border-radius: 6px;
    padding: 10px;
  `;

  return (
    <SideMenuWrapper>
      <StyledMenuH4>Filter By Type</StyledMenuH4>
      <div style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', gap: '10px'}}>
      {FILTER_OPTIONS.map((filter) => {
        return (
          <div key={filter.type} onClick={() => handleFilterClick(filter.type)}>
            <FilterButton id={filter.type === activeFilter ? 'active' : 'passive'}>{filter.type}</FilterButton>
          </div>
        )
      })}
      </div>
    </SideMenuWrapper>
  )};