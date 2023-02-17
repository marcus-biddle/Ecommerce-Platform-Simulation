import styled from 'styled-components';


export const MenuStyle = styled.div`
    text-align: left;
    padding-left: 14.5px;
    width: 100%;
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

export const StyledMenuP = styled.p`
    text-transform: capitalize;
    line-height: 1.05rem;
    font-weight: 300;
    letter-spacing: 1.05px;
    &:hover {
        cursor: pointer;
        color: blue;
    }
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