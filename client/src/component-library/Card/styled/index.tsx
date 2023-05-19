import styled, { keyframes } from "styled-components";
import { Breakpoint } from "../../../helpers/media";

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const CardStyle = styled.div`
    animation: ${fadeIn} .25s linear;
`;

export const CardHeader = styled.div`
    padding-top: 10px;
    letter-spacing: 1.2px;
    opacity: .75;
    font-size: 26px;

    @media only ${Breakpoint.small} {
        font-size: 20px;
    }
`;

export const CardName = styled.div`
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: 1.05px;
    font-size: 1.189rem;
`;

export const StyledSpan = styled.span`
    font-family: "Lucida Console", "Courier New", monospace;
    text-transform: uppercase;
    font-size: 12.4px;
    margin-right: 5px;
    border-radius: 3px;
    padding: 2px;
    background-color: ${props => 
        props.itemType === 'grass' || props.itemType === 'bug' ? 'rgba(32, 238, 32, 0.4)' 
        : props.itemType === 'poison' || props.itemType === 'psychic' || props.itemType === 'ghost' ? 'rgba(183, 32, 238, 0.4)'
        : props.itemType === 'fire' ? 'rgba(249, 26, 29, 0.65)'
        : props.itemType === 'water' ? 'rgba(32, 87, 238, 0.4)'
        : props.itemType === 'flying' || props.itemType === 'ground' || props.itemType === 'fighting' ? 'rgba(165,42,42, 0.7)'
        : props.itemType === 'normal' || props.itemType === 'rock' || props.itemType === 'steel' ? 'rgba(0, 0, 0, 0.4)'
        : props.itemType === 'ice' ? 'rgba(32, 227, 238, 0.4)'
        : props.itemType === 'fairy' ? 'pink'
        : props.itemType === 'electric' ? 'rgba(227, 238, 32, 0.4)'
        : props.itemType === 'dragon' || props.itemType === 'dark' ? 'black'
        : 'white'
    };
    color: ${props => 
        props.itemType === 'dragon' || props.itemType === 'dark' ? 'white' : 'black'};
`;

export const ImageWrapper = styled.div`
    text-align: center;
    background-color: wheat;
    width: 275px;
    height: 200px;
    border-radius: 16px;

    &:hover {
        opacity: .75;
        cursor: pointer;
    }
`;

export const StyledImg = styled.img`
    background-color: wheat;
    height: 130px;
    width: 130px;
    padding-top: 2rem;
`;

export const CardInfoWrapper = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: .5rem;
    margin-left: 5px;
    margin-right: 5px;

    @media only ${Breakpoint.small} {
        margin-left: 16px;
        margin-top: 16px;
        margin-top: 0;
    }
`;

export const DiscountedPrice = styled.span`
    padding-left: 5px;
    font-size: 20px;
    text-decoration-line: line-through;
    opacity: .5;
`;

export const CardPrice = styled.span`
    font-size: 28px;

    @media only ${Breakpoint.small} {
        font-size: 20px;
    }
`;

export const SaleSticker = styled.div`
    position: absolute;
    font-size: 20px;
    color: white;
    letter-spacing: 2px;
    background-color: red;
    margin-left: 45px;
    margin-top: 45px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 6px;

    @media only ${Breakpoint.small} {
        margin-left: 16px;
        margin-top: 16px;
    }
`;