import React from 'react'
import { useParams } from 'react-router';
import { REGIONS, RegionType } from '../../constants';
import { CLPGrid } from '../CLPGrid';
import { RegionProps, SideMenu } from '../SideMenu';
import { StyledMenuH1 } from '../SideMenu/styled';
import { CLPBanner } from './CLPBanner';
import { CLPStyle, Column } from './styled';

export const CLP = () => {
  // Need to add pagination next
  const { region } = useParams();
  const currentRegion: RegionType = REGIONS.find(pokeRegion => pokeRegion.path === region) || REGIONS[2];

  return (
    <CLPStyle>
      <StyledMenuH1>{currentRegion.label}</StyledMenuH1>
      <div style={{ display: 'flex'}}>
        <SideMenu region={currentRegion} />
        <Column>
          <CLPBanner />
          <CLPGrid currentRegion={currentRegion}/>
        </Column>
      </div>
    </CLPStyle>
  )
};