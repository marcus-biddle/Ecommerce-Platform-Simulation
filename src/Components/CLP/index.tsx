import React from 'react'
import { useParams } from 'react-router';
import { REGIONS, RegionType } from '../../constants';
import { getCurrentRegion } from '../../helpers/clp';
import { getPathname } from '../../helpers/navigation';
import { Banner } from '../../pages/Home';
import { CLPGrid } from '../CLPGrid';
import { BreadCrumbWrapper } from '../PDP/styled';
import { SideMenu } from '../SideMenu';
import { CLPStyle, Column, H1Style } from './styled';

export const CLP = () => {
  // Need to add pagination next
  const { region } = useParams();
  const currentRegion =  getCurrentRegion(REGIONS, region || '')

  return (
    <CLPStyle>
      <H1Style>{currentRegion.label}</H1Style>
      <BreadCrumbWrapper>
          ..{getPathname()}
      </BreadCrumbWrapper>
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