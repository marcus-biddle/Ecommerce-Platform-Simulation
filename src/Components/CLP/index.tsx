import React from 'react'
import { REGIONS } from '../../constants';
import { CLPGrid } from '../CLPGrid';
import { RegionProps, SideMenu } from '../SideMenu';
import { StyledMenuH1 } from '../SideMenu/styled';
import { CLPBanner } from './CLPBanner';
import { CLPStyle, Column } from './styled';

export const CLP = ({ region }: RegionProps) => {
  // Need to add pagination next
  return (
    <CLPStyle>
      <StyledMenuH1>{region.label}</StyledMenuH1>
      <div style={{ display: 'flex'}}>
      <SideMenu region={region} />

      <Column>
      <CLPBanner />
      <CLPGrid region={region}/>
      </Column>
      </div>
      
        
    </CLPStyle>
  )
};