
import styled from 'styled-components';
import { Breakpoint } from '../../../../helpers/media';
import { RiShoppingCartLine } from 'react-icons/ri';

export const Cart = styled(RiShoppingCartLine)`
    height: 25px;
    width: 30px;
    cursor: pointer;
    padding-top: 8px;
  `;

export const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-right: 10rem;
    margin-left: 10rem;
    padding-bottom: 10px;
    a:hover {
        color: rgba(205, 77, 8, 0.885);
    }
`;

export const StyledNavUL = styled.div`
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: .75rem;
    height: 100%;
`;

export const NavbarCategoryWrapper = styled.div`
    display: flex;
`;

export const NavbarHeaderWrapper = styled.div`
    width: 80px;
    text-align: center;
    line-height: 16px;
    padding-top: 5px
`;

export const Popup = styled.div`
    background-color: rgba(205, 8, 8, 0.9) !important;
    color: black !important;
    position: absolute;
    border-radius: 25px;
    top: 22px;
    right: 27px;
    width: .8rem;
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    transform: scale(1.1);

    @media only ${Breakpoint.small} {
        right: 9.8rem;
        top: 1.75rem;
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