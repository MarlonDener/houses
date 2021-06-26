import React from "react";
import styled, { keyframes } from "styled-components";
import { InfoMiddle } from "../../data/InfoData";
import { Button } from "../Styles/Button";
const FadeInAnimation = keyframes`  
0%{
  transform: translateX(30px);
}50%{
  transform: translateX(0px);
  z-index: 10;
}
100%{
     transform: translateX(15px);
      z-index: 10;
}

`;

const Container = styled.section`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #08091f;
  overflow: hidden;
  width: 100%;
  margin: 0.2rem 0;
  min-height: 500px;
`;

const ContainerLeft = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0.5rem 1rem 0.4rem rgba(0, 0, 0, 0.3);
  overflow: hidden;
  color: #fff;
  transform: translateX(15px);
  z-index: 2;
  &:hover,
  &:active {
    animation: ${FadeInAnimation} 1s ease-in forwards;
  }

  h1 {
    color: #08091f;
    font-weight: 700;
    padding: 1rem 0;
  }

  p {
    color: #1a1918;
    margin-bottom: 1rem;
    line-height: 27px;
  }
`;
const ContainerRight = styled.div`
  z-index: 4;
`;

const Apartaments = () => {
  return (
    <Container>
      <ContainerLeft>
        <h1>{InfoMiddle.heading}</h1>
        <p>{InfoMiddle.paragraph}</p>
        <Button primary={false}>Ver detalhes</Button>
      </ContainerLeft>

      <ContainerRight>
        <img src={InfoMiddle.image} alt="Apartamento" />
      </ContainerRight>
    </Container>
  );
};

export default Apartaments;
