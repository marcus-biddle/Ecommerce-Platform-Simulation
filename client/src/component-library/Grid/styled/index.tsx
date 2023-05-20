import styled from "styled-components";
import { Breakpoint } from "../../../helpers/media";

export const Grid = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    z-index: 10;
    
    @media only ${Breakpoint.small} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3rem;
        box-sizing: border-box;
    }
    
`;