import styled from "styled-components";

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