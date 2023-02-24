import React from 'react';
import styled from 'styled-components';


export const CLPStyle = styled.div`
    margin-left: 10rem;
    margin-right: 10rem;
`;

export const Row = styled.div`
    display: grid;
    gap: 2rem;
    background-color: yellow;
    margin-right: 10rem;
`;

export const Column = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    background-color: black
    width: fit-content;
`;

export const BannerStyle = styled.div`
    background-color: grey;
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-bottom: 1.99rem;
    margin-top: 1.45rem;
`;

export const H1Style = styled.h1`
    font-family: "Lucida Console", "Courier New", monospace;
    font-weight: 900;
    font-size: 2.02rem;
    letter-spacing: .05px;
    padding-left: 14.5px;
`;