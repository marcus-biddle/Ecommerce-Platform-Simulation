import styled from "styled-components";

export const Grid = styled.div`
    position: relative;
    
    @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3rem;
        box-sizing: border-box;
    }
    
`;