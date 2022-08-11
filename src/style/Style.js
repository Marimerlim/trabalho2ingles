import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #fdedd5;
  }
`;

export const Barra = styled.div`
  width: 97%;
  height: 60px;
  background-color: #c14242;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-style: italic;
    font-family: "Skiff" "Source Sans Pro", Calibri, sans-serif;
  }
  img {
    object-fit: contain;
    width: 30px;
  }
`;
