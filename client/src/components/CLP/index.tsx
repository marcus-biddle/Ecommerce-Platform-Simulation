import React, { useState } from 'react'
import { useParams } from 'react-router';
import { SideMenu } from '../../component-library/SideMenu';
import { getCurrentRegion } from '../../helpers/pokemon';
import { showIfOrElseWindow } from '../../helpers/media';
import { getPathname } from '../../helpers/navigation';
import { useWindowDemension } from '../../hooks/mobile';
import { BreadCrumb } from '../PDP/styled';
import { CardGrid } from '../../component-library/Grid';
import poke_throw from '../../assets/poke_throw.webp';
import { DropdownStyle, H1Style, Header, MainSection, SelectButton, SubSection } from './styled';
import { Dropdown } from '../../component-library/Dropdown';

const GridCoupon = () => {
  return (
    <>
      <div style={{ backgroundColor: '#141E42', width: '100%', borderRadius: '25px', position: 'relative', overflow: 'hidden'}}>
        <img src={poke_throw} alt='Pokemon Center Coupon' style={{ position: 'absolute', height: '100px', width: '450px', objectFit: 'cover', opacity: '.8'}}/>
        <div style={{ textAlign: 'center', paddingLeft: '5rem', lineHeight: '0'}}>
          <p style={{ color: 'red', opacity: '.6'}}>Limited Offer</p>
          <p style={{ color: 'silver', opacity: '.9', fontSize: '26px', paddingLeft: '15rem', lineHeight: '28px'}}>Get 15% off on select pokemon <br/> 'Til Midnight</p>
        </div>
      </div>
    </>
  )
}

export const CLP = () => {
  // TODO: add pagination
  const { region } = useParams();
  const currentRegion =  getCurrentRegion(region || '');
  const [activeFilter, setActiveFilter] = useState('Select Filter');
  const [open, setOpen] = useState(false);

  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter || filter === 'none') {
      setActiveFilter('Select Filter')
      console.log('No filter');
    } else {
      setActiveFilter(filter);
      console.log(filter);
    }

    setOpen(false);
  }

  return (
    <div style={{ marginBottom: '4rem'}}>
      <SubSection>
        {/* Header */}
        <Header>
          <H1Style>{currentRegion?.label}</H1Style>
          {showIfOrElseWindow(useWindowDemension())((<BreadCrumb>..{getPathname()}</BreadCrumb>))((''))}
        </Header>
        {/* Coupon */}
        {showIfOrElseWindow(useWindowDemension())((<GridCoupon />))((''))}
      </SubSection>
      <MainSection>
        {/* add dropdown menu */}
        {showIfOrElseWindow(useWindowDemension())
        ((<SideMenu 
            handleFilterClick={handleFilterClick} 
            activeFilter={activeFilter} 
          />
          ))
        ((<Dropdown 
            open={open} 
            handleFilterClick={handleFilterClick}
            trigger={
            <DropdownStyle onClick={() => setOpen(!open)}>
              { activeFilter !== 'Select Filter' ? activeFilter : 'Select Filter'}
              <SelectButton aria-pressed={open}/>
            </DropdownStyle>} 
          />
        ))}
        <CardGrid 
          currentRegion={''} 
          activeFilter={activeFilter}
        />
      </MainSection>
    </div>
  )
};