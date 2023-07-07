import styled from "styled-components";
import { css,keyframes } from 'styled-components'


const hoverAnimation = keyframes`
    0% { border-image-source: linear-gradient(to left, #01F3FD , #FF6DC1 );}
    25% { border-image-source: linear-gradient(to top, #01F3FD , #FF6DC1 );}
    50% { border-image-source: linear-gradient(to right, #01F3FD , #FF6DC1 );}
    75% { border-image-source: linear-gradient(to bottom, #01F3FD , #FF6DC1 );}
    100% { border-image-source: linear-gradient(to left, #01F3FD , #FF6DC1 );}
`
export const Button = styled.button`
    background: none;
    color: white;
    border: 2px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(to left, #01F3FD , #FF6DC1 );
    width: 10rem;
    height: 3.5rem;
    /* animation-name: ${hoverAnimation}; */
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transition: 2s;
    animation-timing-function: linear;

    ${ css`
      &:hover {
        animation-name: ${hoverAnimation};
      }
   `}

  
`;
