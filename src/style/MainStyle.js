import styled from "styled-components";

export const Img = styled.img`
  padding: 0 auto;
`;

export const Produto = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  margin: 10px;
  color: #950303;
  .fino {
    font-weight: lighter;
  }
`;

export const Texto = styled.div`
  color: #950303;

  margin: 10px;
  h3 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 30px;
  }
`;
