import React from 'react'
import styled from 'styled-components';

export const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 10rem;
    margin-left: 10rem;
    padding-top: 1.56rem;
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
    
`;

export const Popup = styled.div`
    background-color: rgba(205, 8, 8, 0.9) !important;
    color: black !important;
    position: absolute;
    top: 1.10rem;
    border-radius: 25px;
    margin-left: 10px;
    width: .8rem;
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    transform: scale(1.1);


`;