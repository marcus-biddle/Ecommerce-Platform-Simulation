import styled from "styled-components";
import { Breakpoint } from "../../../helpers/media";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export const CartColumn = styled.div`

    @media only ${Breakpoint.small} {
        display: grid;
        grid-template-columns: 1fr .4fr;
        column-gap: 20px;
        p {
            line-height: 0px;
        };
    }
    
`;

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
    gap: 15px;    

    @media only ${Breakpoint.small} {
        flex-direction: row;
        justify-content: space-between;
        margin-left: 10rem;
        margin-right: 10rem;
        margin-bottom: 10rem;
    }
`;

export const CartSectionText = styled.p`
    letter-spacing: 1px;
    font-family: Bebas Neue, sans-serif;

    @media only ${Breakpoint.small} {
        font-size: 24px;
    }
`;

export const CartItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media only ${Breakpoint.small} {
        gap: 10px;
        width: 50rem;
    }
`;

export const LevelText = styled.div`
    color: grey;
    font-family: Abel, monospace;
    font-size: 12px;

    @media only ${Breakpoint.small} {
        font-size: 14px;
    }
`;

export const HeaderText = styled.div`
    font-family: Abel;

    @media only ${Breakpoint.small} {
        font-size: 20px;
    }
`;

export const LeftArrow = styled(BiLeftArrow)`
    padding-top: 2px;
    cursor: pointer;

    &:active {
        color: blue;
    }
`;

export const RightArrow = styled(BiRightArrow)`
    padding-top: 2px;
    cursor: pointer;

    &:active {
        color: blue;
    }
`;

export const CartSummary = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Abel;
    border-top: .5px solid grey;
    border-bottom: .5px solid grey;
    padding-top: 12px;
    padding-bottom: 12px;
    gap: 10px;

    @media only ${Breakpoint.small} {
        border-top: none;
        width: 18rem;
    }
`;

export const PaymentButtonText = styled.div`
    position: absolute;
    left: 5.5rem;
    top: .9rem;
    font-size: 18px;

    @media only ${Breakpoint.small} {
        left: 4.25rem;
    }
`;

export const DeleteText = styled.div`
    text-align: end;
    color: grey;
    width: 20px;
    font-family: Abel, monospace;

    @media only ${Breakpoint.small} {
        margin-right: 2rem;
    }

    &:hover {
        color: blue;
    }

    &:active {
        opacity: .5;
    }
`;

export const SideMenuSection = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media only ${Breakpoint.small} {
        flex-direction: column;
    }
`;

export const DiscountSection = styled.div`
    margin-bottom: 2rem;

    @media only ${Breakpoint.small} {
        margin-top: 4rem;
    }
`;
