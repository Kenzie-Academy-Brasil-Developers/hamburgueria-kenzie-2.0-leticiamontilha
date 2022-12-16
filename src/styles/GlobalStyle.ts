import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
    --color-primary:#27AE60;
    --color-secondary: #EB5757;
    --color-grey-600:  #333333;
    --color-grey-300: #828282;
    --color-grey-100: #E0E0E0;
    --color-grey-0: #F5F5F5;
    --color-black: #000;
    --color-white:  #FFFFFF;
    --feedback-sucess: #3FE864;
    --feedback-negative:#E60000;
    --feedback-warning: #FFCD07;
    --feedback-information: #155BCB;
    
    --text-1: 1rem; /* 16px */
    --text-2: 1.25rem; /* 20px */
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--color-grey-4);
  }

  li,a {
    list-style-type: none;
  }
  button, input, select {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
`

export default GlobalStyle