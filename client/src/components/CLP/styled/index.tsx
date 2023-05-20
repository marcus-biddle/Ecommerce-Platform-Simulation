import styled from 'styled-components';
import { Breakpoint } from '../../../helpers/media';
import { GoTriangleDown } from 'react-icons/go';


export const CLPStyle = styled.div`
    
    @media only ${Breakpoint.small} {
        margin-left: 10rem;
        margin-right: 10rem;
    }
`;

export const Row = styled.div`
    

    @media only ${Breakpoint.small} {
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
    font-family: 'Abel', sans-serif;
    font-size: 2.5rem;
    letter-spacing: .05px;
    text-align: center;

    @media only ${Breakpoint.small} {
        font-size: 1.97rem;
    }
`;

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 4rem;
    margin-left: 4rem;

    @media only ${Breakpoint.small} {
        flex-direction: row;
        margin-right: 10rem;
        margin-left: 10rem;
    }
`;

export const Header = styled.div`
    width: 18rem;
    display: flex;
    flex-direction: column;
    

    @media only ${Breakpoint.small} {
        margin-right: 2rem;
        gap: 26px;
    }
`;

export const SubSection = styled.div`
    display: flex;
    margin-right: 4rem;
    margin-left: 4rem;
    height: 100px;
    flex-direction: column;

    @media only ${Breakpoint.small} {
        margin-bottom: 4rem;
        margin-right: 10rem;
        margin-left: 10rem;
        flex-direction: row;
    }
`;

export const DropdownStyle = styled.div`
    border: 1px solid grey;
    width: 144px;
    padding-left: 6px;
    padding-right: 6px;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

export const SelectButton = styled(GoTriangleDown).attrs(props => ({
    open: props['aria-pressed']
  }))`
    padding-top: 2px;
    color: ${props => props.open ? 'red' : 'black'};
`;