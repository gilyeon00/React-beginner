import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {margin: 0; padding:0;}
    ul li{ list-style : none; }
    body {
        background-color: #ffd;
    }
`

export default GlobalStyle;