import styled from "styled-components";
import { Breakpoint } from "../../../../helpers/media";

export const ItemOption = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin-left: 6px;
    color: blue;
    font-size: 12px;
`;

export const CartItemColumn = styled.div`
    display: flex;
    justify-content: space-between;

    @media only ${Breakpoint.small} {
        display: grid;
        grid-template-columns: 1fr .4fr;
        column-gap: 20px;
        p {
            line-height: 0px;
        };
    }
    
`;