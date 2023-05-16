import React from 'react'
import styled from 'styled-components';

export const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 10rem;
    margin-left: 10rem;
    padding-bottom: 1.34rem;
    a:hover {
        color: rgba(205, 77, 8, 0.885);
    }
`;

export const StyledNavUL = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
`;

export const NavbarCategoryWrapper = styled.div`
    display: inline-flex

`;

export const UserWrapper = styled.div`

`;

export const NavbarHeaderWrapper = styled.div`
    width: 80px;
    text-align: center;
    line-height: 16px;
`;

export const Popup = styled.div`
    background-color: rgba(205, 8, 8, 0.9) !important;
    color: black !important;
    position: absolute;
    top: .5rem;
    border-radius: 25px;
    margin-left: 10px;
    width: .8rem;
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    transform: scale(1.1);

    @media only screen and (min-width: 768px) {
        top: 1.10rem;
    }
`;

export const CouponStyle = styled.div`
    position: relative;
    text-align: center;
    font-size: 16px;
    letter-spacing: 0.5px;
    color: white;
    background-color: black;
    font-family: 'Abel', sans-serif;
    font-weight: light;
    padding-top: 3.3px;
    padding-bottom: 3.3px;
`;