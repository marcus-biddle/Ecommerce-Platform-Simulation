import styled from 'styled-components';

export const CLPStyle = styled.div`
    
    @media only screen and (min-width: 768px) {
        margin-left: 10rem;
        margin-right: 10rem;
    }
`;

export const Row = styled.div`
    

    @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-rows: 200px;
        grid-template-columns: 925px;
        gap: 2rem;
    }
`;

export const Column = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin: auto;
    justify-content: center;
    
`;

export const BannerStyle = styled.div`
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-bottom: 1.99rem;
    margin-top: 1.45rem;
`;

export const H1Style = styled.h1`
    font-family: "Lucida Console", "Courier New", monospace;
    font-weight: 900;
    font-size: 2.02rem;
    letter-spacing: .05px;
    padding-left: 14.5px;
`;