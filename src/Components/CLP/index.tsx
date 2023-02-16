import React from 'react'
import { REGIONS } from '../../constants';
import { SideMenu } from '../SideMenu';
import { CLPStyle } from './styled';

export const CLP = ({ region }: any) => {
  return (
    <CLPStyle>
        {/* SideMenu */}
        <SideMenu region={region} />
        TEST
        {/* Banner */}
        {/* Grid */}
    </CLPStyle>
  )
};