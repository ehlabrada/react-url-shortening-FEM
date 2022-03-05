import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  /* width: 100%; */
  /* min-height: auto; */
  font-family: 'Poppins', sans-serif;
}

body {
  min-height: 100vh;
  width: 100%;
}

#root {
  width: 100%;

}



`;

export default GlobalStyle;
