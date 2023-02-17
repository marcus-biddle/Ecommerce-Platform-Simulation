import styled from "styled-components";

export const CardStyle = styled.div`
    padding: 3rem;
    box-sizing: border-box;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: transform .3s ease-in;
    }
`;

export const CardHeader = styled.div`
    font-size: 1.189rem;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 3.85rem;
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
    width: 100%;
    text-align: center;
`;

export const StyledImg = styled.img`
    transform: scale(1.3);
`;

export const CardInfoWrapper = styled.div`
    border-style: double;
    margin-top: 10px;
    
`;