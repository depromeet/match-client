import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans&display=swap");
  * {
	  box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100%;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,'Montserrat',"Noto Sans",sans-serif;
  }
  a {
	  color: inherit;
	  text-decoration: none;
  }
  input,
  button{
	  &:focus,
	  &:active{outline:none}
    border: none;
    outline:none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export default GlobalStyle;
