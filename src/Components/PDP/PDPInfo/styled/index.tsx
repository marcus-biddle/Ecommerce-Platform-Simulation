import styled, { css } from "styled-components";

export const ButtonGroup = styled.div`
    display: flex;
    padding-bottom: 12px;

    @media only screen and (min-width: 768px) {
        
    }
`;

export const ActiveTab = styled.button`
    text-transform: capitalize;
    padding: 10px 38px;
    font-size: 17px;
    background: white;
    opacity: 0.6;
    border: 0;
    outline: 0;
    border-bottom: 2px solid black;
    opacity: 1;

    @media only screen and (min-width: 768px) {
        font-size: 20px;
        padding: 10px 60px;
    }
`;

export const Tab = styled.button`
    text-transform: capitalize;
    padding: 10px 38px;
    font-size: 17px;
    cursor: pointer;
    background: white;
    opacity: 0.6;
    border: 0;
    outline: 0;

    @media only screen and (min-width: 768px) {
        font-size: 20px;
        padding: 10px 60px;
    }
`;

export const StyledLi = styled.div`
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 300;
`;

export const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr 60px;
    padding-right: 15px;
`;

export const StatValueStyle = styled.div`

`;