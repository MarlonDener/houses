import React from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 0rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 700px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem 1.6rem;
  order: ${(props) => (props.reverse ? "1" : "2")};

  border-bottom: 5px solid #000d1a;

  @media (max-width: 768px) {
    border-bottom: 5px solid transparent;
  }

  h1 {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 2.3rem;
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  P {
    line-height: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const ColumnRight = styled.div`
  margin-left: ${(props) => (props.reverse ? "2rem" : "0")};
  margin-right: ${(props) => (props.reverse ? "0" : "2rem")};
  padding: 0 1rem;
  order: ${(props) => (props.reverse ? "2" : "1")};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #08091f;
  box-shadow: 0 0.5rem 1rem 0.4rem rgba(0, 0, 0, 0.3);
  overflow: hidden;
  @media screen and (max-width: 768px) {
    order: 2;
    margin-right: 0;
    margin-left: 0;
    margin-top: 2rem;
    align-items: flex-start;
    height: 400px;
    padding: 1.8rem;
  }
  img {
    width: 80%;
    box-shadow: 0 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
    height: 70%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      align-items: flex-start;
      height: 100%;
      &:hover {
        opacity: 1;
        transform: scale(1.4) rotate(7deg);
      }
    }
  }
`;

const InfoSection = ({
  heading,
  paragraph,
  paragraph2,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          <p>{paragraph2}</p>
          <Button primary="true" to="/">
            Ver imovél
          </Button>
        </ColumnLeft>

        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
