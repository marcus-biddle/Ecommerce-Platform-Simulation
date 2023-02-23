import React from 'react'
import { useParams } from 'react-router';
import { REGIONS, RegionType } from '../../constants';
import { Banner } from '../../pages/Home';
import { CLPGrid } from '../CLPGrid';
import { RegionProps, SideMenu } from '../SideMenu';
import { StyledMenuH1 } from '../SideMenu/styled';
import { BannerStyle, CLPStyle, Column } from './styled';

export const CLPBanner = () => {
  return (
    <BannerStyle>
        BUY ONE GET ONE POKEMON FOR FREE
    </BannerStyle>
  )
}

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
          <Banner />
          <CLPGrid currentRegion={currentRegion}/>
        </Column>
      </div>
    </CLPStyle>
  )
};