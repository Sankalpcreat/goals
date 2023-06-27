import { cretaGlobalStyle } from "styled-components";

export const GlobalStyle = cretaGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body {
    background: #eee;
  }

  #root {
    width: 80%;
    margin: 0 auto;
    font-family: "Do Hyeon", sans-serif;
    color: #272727;
  }
`;