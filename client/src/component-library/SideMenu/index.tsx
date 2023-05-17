import React, { useState } from 'react';
import { LEGENDARIES, STARTER_POKEMON } from '../../constants/pokemon';
import { MenuItem, SideMenuWrapper, StyledMenuH4, StyledMenuLink } from './styled';
import { usePokemonContext } from '../../hooks';
import { showOnLoad } from '../../helpers/conditionals';
import { RegionType } from '../../constants/regions';

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

const filterTypes = [
  {
    type: 'grass_bug',
    checked: false
  },
  {
    type: 'poison_psychic_ghost',
    checked: false
  },
  {
    type: 'fire',
    checked: false
  },
  {
    type: 'water',
    checked: false
  },
  {
    type: 'flying_ground_fighting',
    checked: false
  },
  {
    type: 'ice',
    checked: false
  },
  {
    type: 'fairy',
    checked: false
  },
  {
    type: 'electric',
    checked: false
  },
  {
    type: 'dragon_dark',
    checked: false
  },
]

export const SideMenu = ({ region }: RegionProps) => {
  const { pokemon, isLoading } = usePokemonContext();
  const props = { pokemon, region }
  const fallback = (<p >Loading...</p>)
  const [filters, setFilters] = useState<any[]>(filterTypes);

  // const handleToggle = ({ target }: any) =>
  //   setFilters((s:any) => ({ ...s, [target.name]: !s[target.name] }));

  // REDO WHOLE THING https://blog.logrocket.com/building-custom-checkbox-react/

  return (
    <SideMenuWrapper>
      <StyledMenuH4>Filter By Type</StyledMenuH4>
      {/* <div>
      {/* {Object.keys(filters).map(key => (
        <input
          type="checkbox"
          onChange={handleToggle}
          key={key}
          name={key}
          checked={filters[key]}
        />
      ))} */}
      {/* {filters.map((filter) => {
        return (
          <>
          <div>{filter.type} {`${filter.checked}`}</div>
          <input 
          type="checkbox"
          onChange={handleChange}
          key={filter.type}
          name={filter.type}
          checked={filters[filter.checked]}
          />
          </>
        )
      })} */}
      {/* <MenuItem>
        <StyledMenuH4>{STARTER_POKEMON[region.index].label}</StyledMenuH4>
        {showOnLoad(isLoading)(fallback)(
          <Starters {...props} />
        )}
      </MenuItem> */}
      
      {/* <MenuItem>
        <StyledMenuH4>{LEGENDARIES[region.index].label}</StyledMenuH4>
        {showOnLoad(isLoading)(fallback)(
          <Legendaries {...props} />
        )}
      </MenuItem> */}
    </SideMenuWrapper>
  )};