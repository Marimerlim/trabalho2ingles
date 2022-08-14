import styled from "styled-components";

export const Footer = styled.div`
  margin: 10px;

  label {
    margin-left: 10px;
    cursor: pointer;
    margin-right: 20%;
  }
  input[type="radio"] {
    -webkit-appearance: none;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 50px;
    width: 13px;
    height: 13px;
  }
  input[type="radio"]:checked {
    background-color: black;
  }
`;

export const Contador = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border: 1px solid black;
  border-radius: 20px;

  button {
    width: 10%;
    border: none;
    margin: 10px;
    background-color: transparent;
    font-weight: bold;
    font-size: 1rem;
  }
`;
export const Cart = styled.div`
  width: 300px;
  margin: 0 auto;

  button {
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: black;
    color: white;
    width: 300px;
    border-radius: 20px;
    padding: 13px;
    text-align: center;
  }
`;
