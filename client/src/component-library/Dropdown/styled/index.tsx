import React from "react";
import styled, { keyframes } from "styled-components";

const show = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: 350px;
    };
`;

const showText = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
};
`;

export const DropdownList = styled.ul.attrs(props => ({
    open: props['aria-pressed']
  }))`
    position: absolute;
    background-color: white;
    list-style-type: none;
    margin: 5px;
    margin-top: -14px;
    padding: 0;
    border: 1px solid grey;
    width: 156px;
    left: 5.3rem;
    height: 350px;
    animation: ${ show } .5s linear;
`;

export const DropdownItem = styled.li`
  margin: 0;
  background-color: white;
  height: 35px;
  animation: ${ showText } 2s linear;
`;

