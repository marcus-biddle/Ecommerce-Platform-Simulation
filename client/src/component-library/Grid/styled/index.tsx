import styled from "styled-components";
import { Breakpoint } from "../../../helpers/media";

export const Grid = styled.div`
    position: relative;
    
    @media only ${Breakpoint.small} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3rem;
        box-sizing: border-box;
    }
    
`;