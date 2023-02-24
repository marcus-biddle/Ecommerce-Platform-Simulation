import styled from "styled-components";

export const ProductImg = styled.img`
    height: 25rem;
    width: 30rem;
    object-fit: contain;
    border: solid black;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    border-bottom: thin solid grey;
    line-height: 3rem;
`;

export const ProductHeader = styled.div`
    font-size: 2.7rem;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 1.233px;
`;

export const PriceStyling = styled.div`
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
`;

export const PDPStyling = styled.div`
    padding-top: 3rem;
    padding-left: 11rem;
    padding-right: 11rem;
    min-height: 90vh;
`;

export const PDPContainer = styled.div`
    display: flex;
    padding-top: 1rem;
`;

export const PokemonContainer = styled.div`
    margin-left: 3.4rem;
    max-width: 35.75rem;
`;

export const InfoContainer = styled.div`
    padding-top: 2.75rem;
    height: 20rem;
`;

export const BreadCrumbWrapper = styled.div`
    font-family: "Lucida Console", "Courier New", monospace;
    padding: 15px;
    font-size: 1.05rem;
    font-weight: 300;
    opacity: 0.7
`;

export const CartButton = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 20px;
    margin-top: 2.5rem;
    cursor: pointer;
`;