import styled from 'styled-components';

export const FooterStyle = styled.div`
    display: flex;
    margin: 2rem auto 0;
    max-width: 100%;
    width: 100%;
    background-color: #4c4c4c32;
    align-items: center;
`;

export const FooterNavWrapper = styled.div`
    display: flex;
    margin: 4rem;
    padding-left: 8rem;
    
`;

export const StyledUL = styled.div`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 7rem;
`;

export const NavHeader  = styled.p`
    font-size: 0.6875rem;
    line-height: 1.35rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold
`;

export const FooterNavLink = styled.a`
    font-size: 14px;
    text-transform: initial;
    margin: 5px 0;
    letter-spacing: 0;
    cursor: pointer;
`;

export const ColumnFooter = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    flex-grow: 1;
    flex-basis: 0;
    min-width: 0;
    max-width: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
`;