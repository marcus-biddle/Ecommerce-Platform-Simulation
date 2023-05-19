import styled from "styled-components";
import { Breakpoint } from "../../../helpers/media";

export const CartColumn = styled.div`

    @media only ${Breakpoint.small} {
        display: grid;
        grid-template-columns: 1fr .4fr;
        column-gap: 20px;
        p {
            line-height: 0px;
        };
    }
    
`;

export const CartWrapper = styled.div`
    
    @media only ${Breakpoint.small} {
        margin-right: 10rem;
        margin-left: 10rem;
        min-height: 96vh;
    }
`;