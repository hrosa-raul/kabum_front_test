import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
    background-color: #CECEF6;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  

`;