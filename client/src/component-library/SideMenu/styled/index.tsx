import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SideMenuWrapper = styled.div`
    text-align: left;
    width: 14rem;
    height: 100%;
    margin-right: 3rem;
`;

export const MenuItem = styled.div``;

export const StyledMenuH4 = styled.h4`
    font-family: Abel, monospace;
    font-size: 1.1rem;
    line-height: 1.35rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold;
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

export const FilterButton = styled.div.attrs(props => ({
    active: props.id === 'active' ? true : false
  }))`
    width: 100%;
    font-size: 18px;
    color: ${ props => props.active ? 'black' : 'black'};
    background-color: ${ props => props.active ? 'rgb(105, 103, 103, .25)': ''};
    border-radius: 6px;
    padding: 10px;
    font-family: Abel;
    cursor: pointer;
  `;