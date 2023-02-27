import styled from "styled-components";

export const CartColumn = styled.div`

    @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr .4fr;
        column-gap: 20px;
        p {
            line-height: 0px;
        };
    }
    
`;

export const CartWrapper = styled.div`
    
    @media only screen and (min-width: 768px) {
        margin-right: 10rem;
        margin-left: 10rem;
        min-height: 96vh;
    }
`;