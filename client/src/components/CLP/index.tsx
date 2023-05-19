import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Banner } from '../../component-library/Banner';
import { SideMenu } from '../../component-library/SideMenu';
import { bannerHeader, bannerSubheader } from '../../constants/info';
import { REGIONS } from '../../constants/regions';
import { getCurrentRegion } from '../../helpers/pokemon';
import { showIfOrElseWindow } from '../../helpers/media';
import { getPathname } from '../../helpers/navigation';
import { useWindowDemension } from '../../hooks/mobile';
import { BreadCrumb } from '../PDP/styled';
import { CLPTemplate } from './CLPTemplate';
import poke_throw from '../../assets/poke_throw.webp';
import { CLPStyle, Column, H1Style, Row } from './styled';

export const CLP = () => {
  // TODO: add pagination
  const { region } = useParams();
  const currentRegion =  getCurrentRegion(region || '');
  const bannerProps = { header: bannerHeader, subheader: bannerSubheader }
  const [activeFilter, setActiveFilter] = useState('none');

  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter('None')
      console.log('No filter');
    } else {
      setActiveFilter(filter);
      console.log(filter);
    }
  }

  return (
    <div style={{ marginBottom: '4rem'}}>
      <div style={{ display: 'flex', marginRight: '10rem', marginLeft: '10rem', height: '125px', marginBottom: '4rem'}}>
        <div style={{ width: '18rem', display: 'flex', flexDirection: 'column', gap: '26px', marginRight: '2rem' }}>
          <H1Style>{currentRegion?.label}</H1Style>
          <BreadCrumb>
            ..{getPathname()}
          </BreadCrumb>
        </div>
        <div style={{ backgroundColor: '#141E42', width: '100%', borderRadius: '25px', position: 'relative', overflow: 'hidden'}}>
          <img src={poke_throw} alt='Pokemon Center Coupon' style={{ position: 'absolute', height: '150px', width: '450px', objectFit: 'cover', opacity: '.8'}}/>
          <div style={{ textAlign: 'center', paddingLeft: '5rem'}}>
            <p style={{ color: 'red', opacity: '.6', lineHeight: '5px'}}>Limited Offer</p>
            <p style={{ color: 'silver', opacity: '.9', fontSize: '30px', paddingLeft: '15rem', lineHeight: '28px'}}>Get 15% off on select pokemon <br/> 'Til Midnight</p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', marginRight: '10rem', marginLeft: '10rem'}}>
        {showIfOrElseWindow(useWindowDemension())((<SideMenu handleFilterClick={handleFilterClick} activeFilter={activeFilter} />))((''))}
        <CLPTemplate currentRegion={''} activeFilter={activeFilter}/>
      </div>
    </div>
    
    // <CLPStyle>
    //   <H1Style>{currentRegion.label}</H1Style>
    //   <BreadCrumbWrapper>
    //       ..{getPathname()}
    //   </BreadCrumbWrapper>
    //   <Column>
    //     {showIfOrElseWindow(useWindowDemension())((<SideMenu region={currentRegion} />))((''))}
    //     <Row>
    //       <Banner {...bannerProps}/>
    //       <CLPTemplate currentRegion={currentRegion}/>
    //     </Row>
    //   </Column>
    // </CLPStyle>
  )
};