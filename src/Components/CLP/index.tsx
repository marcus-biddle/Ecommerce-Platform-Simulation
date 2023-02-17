import React from 'react'
import { REGIONS } from '../../constants';
import { CLPGrid } from '../CLPGrid';
import { RegionProps, SideMenu } from '../SideMenu';
import { CLPStyle } from './styled';

export const CLP = ({ region }: RegionProps) => {
  return (
    <CLPStyle>
        {/* SideMenu */}
        <SideMenu region={region} />
        {/* Banner */}
        {/* Grid */}
        <CLPGrid region={region}/>
    </CLPStyle>
  )
};