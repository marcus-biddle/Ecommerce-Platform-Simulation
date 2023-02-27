import React from 'react'
import { useParams } from 'react-router';
import { Banner } from '../../component-library/Banner';
import { bannerHeader, bannerSubheader } from '../../constants/info';
import { REGIONS } from '../../constants/regions';
import { getCurrentRegion } from '../../helpers/clp';
import { showIfOrElseWindow } from '../../helpers/media';
import { getPathname } from '../../helpers/navigation';
import { useWindowDemension } from '../../hooks/mobile';
import { BreadCrumbWrapper } from '../Pdp/styled';
import { SideMenu } from '../SideMenu';
import { CLPTemplate } from './CLPTemplate';
import { CLPStyle, Column, H1Style, Row } from './styled';

export const CLP = () => {
  // Need to add pagination
  const { region } = useParams();
  const currentRegion =  getCurrentRegion(REGIONS, region || '')
  const bannerProps = { header: bannerHeader, subheader: bannerSubheader }

  return (
    <CLPStyle>
      <H1Style>{currentRegion.label}</H1Style>
      <BreadCrumbWrapper>
          ..{getPathname()}
      </BreadCrumbWrapper>
      <Column>
        {showIfOrElseWindow(useWindowDemension())((<SideMenu region={currentRegion} />))((''))}
        <Row>
          <Banner {...bannerProps}/>
          <CLPTemplate currentRegion={currentRegion}/>
        </Row>
      </Column>
    </CLPStyle>
  )
};