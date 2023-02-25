import React from 'react'
import { useParams } from 'react-router';
import { REGIONS } from '../../constants/regions';
import { getCurrentRegion } from '../../helpers/clp';
import { getPathname } from '../../helpers/navigation';
import { Banner } from '../../pages/Home';
import { BreadCrumbWrapper } from '../PDP/styled';
import { SideMenu } from '../SideMenu';
import { CLPTemplate } from './CLPTemplate';
import { CLPStyle, Column, H1Style, Row } from './styled';

export const CLP = () => {
  // Need to add pagination
  const { region } = useParams();
  const currentRegion =  getCurrentRegion(REGIONS, region || '')

  return (
    <CLPStyle>
      <H1Style>{currentRegion.label}</H1Style>
      <BreadCrumbWrapper>
          ..{getPathname()}
      </BreadCrumbWrapper>
      <Column>
        <SideMenu region={currentRegion} />
        <Row>
          <Banner />
          <CLPTemplate currentRegion={currentRegion}/>
        </Row>
      </Column>
    </CLPStyle>
  )
};