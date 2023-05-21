import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { REGIONS } from '../../../constants/regions';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { StyledLi } from './styled';
import { NavCart } from '../Desktop';
import { StyledMenuH4 } from '../../../component-library/SideMenu/styled';

export const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (region: number) => {
        navigate(`${REGIONS[region].path}`);
        setIsOpen(false);
    }

  return (
    <>
        {isOpen 
        ? 
            <div style={{ position: 'fixed', zIndex: '100', backgroundColor: 'rgba(0, 0, 0, 0.92)', color: 'white', width: '100%', height: '100%'}}>
                <div style={{ paddingLeft: '8px', textAlign: 'center'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '12px'}}>
                    <h3>Menu</h3>
                    <h3 style={{ cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineDoubleLeft style={{ transform: 'scale(1.15)'}} />
                    </h3>
                    </div>
                    
                    <StyledMenuH4>Main</StyledMenuH4>
                    <StyledLi onClick={() => {navigate('/'); setIsOpen(false)}}>Home</StyledLi>
                    
                    <StyledMenuH4>Regions</StyledMenuH4>
                    <StyledLi onClick={() => handleClick(0)}>Kanto Region</StyledLi>
                    <StyledLi onClick={() => handleClick(1)}>Johto Region</StyledLi>
                    <StyledLi onClick={() => handleClick(2)}>Sinnoh Region</StyledLi>

                    <StyledMenuH4>Account</StyledMenuH4>
                    <StyledLi onClick={() => {navigate('/cart'); setIsOpen(false)}}>Cart</StyledLi>
                    <StyledLi >Settings</StyledLi>
                </div>
            </div>
        :
            ''
        }
        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', paddingTop: '20px', marginLeft: '2rem', marginRight: '2rem'}}>
            <div style={{ }}>
                <GiHamburgerMenu style={{ height: '25px', width: '30px', cursor: 'pointer', paddingTop: '8px'}} onClick={() => setIsOpen(!isOpen)}/>
            </div>
            <div style={{ fontFamily: 'Abel', fontSize: '30px', fontWeight: 'bold', paddingTop: '4px'}} onClick={() => navigate('/')}>Poke Store</div>
            <div style={{ }}>
                <NavCart />
            </div>
        </div>
    </>
  )
}