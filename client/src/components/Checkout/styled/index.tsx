import styled from "styled-components";
import { Breakpoint } from "../../../helpers/media";

export const PaymentStyle = styled.p`
    margin-right: 4rem;
    margin-left: 4rem; 

    @media only ${Breakpoint.small} {
        margin-right: 10rem;
        margin-left: 10rem;
    }
`;