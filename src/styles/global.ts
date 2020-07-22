import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;    
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.colors.body.text};
    text-align: left;
    background-color: ${props => props.theme.colors.body.background};
    -webkit-font-smoothing: antialiased;    
  }
  
  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {   
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-weight: 700;
  }

  body html #root {
    height: 100%;
  }
`;
