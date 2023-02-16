import React from 'react'
import { SideMenu } from '../SideMenu';
import { CLPStyle } from './styled';

export const CLP = ({ category }: any) => {
  return (
    <CLPStyle>
        {/* SideMenu */}
        <SideMenu category={category} />
        TEST
        {/* Banner */}
        {/* Grid */}
    </CLPStyle>
  )
};