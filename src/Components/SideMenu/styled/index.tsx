import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuStyle = styled.div`
    text-align: left;
    padding-left: 14.5px;
    width: 20rem;
    max-width: 20rem;
`;

export const StyledMenuH1 = styled.h1`
    font-family: "Lucida Console", "Courier New", monospace;
    font-weight: 900;
    font-size: 2.02rem;
    letter-spacing: .05px;
    padding-left: 14.5px;
`;

export const StyledMenuH4 = styled.h4`
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 0.8555rem;
    line-height: 1.35rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 500;
`;

export const StyledMenuLink = styled(Link)`
    display: block;
    padding-bottom: 10px;
    line-height: 1.05rem;
    font-weight: 300;
    text-transform: capitalize;
    &:hover {
        cursor: pointer;
        color: rgba(205, 77, 8, 0.885);
    };
`;

export const MenuHeader = styled.div`
    font-size: 0.866rem;
    line-height: 2rem;
    letter-spacing: .5px;
    text-transform: capitalize;
    font-weight: bold
`;

export const MenuOptionWrapper = styled.div`

`;

export const MenuUL = styled.div`
    font-weight: lighter;
    padding: 1rem;
`;