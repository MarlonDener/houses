import React from "react";
import styled from "styled-components";
import { Button } from "../../Styles/Button";

const ServiceCard = ({ image, title, paragrafo }) => {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt="title" />
        <h4>{title}</h4>
        <p>{paragrafo}</p>
        <Button>Ver sobre</Button>
      </div>
    </ServiceCardStyled>
  );
};

const ServiceCardStyled = styled.div`
  background: #000d1a;
  border-left: 1px solid #CD853F;
  border-top: 13px solid #CD853F;
  border-right: 1px solid #CD853F;
  border-bottom: 1px solid#CD853F;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0.4rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 10px 15px;

  &:hover {
    border-top: 8px solid #1a1527;;
    transform: translate(-3px, -4px);
    box-shadow: none;
  }
  .container {
    padding: 1.2rem;
    margin: 0 auto;
    text-align: center;
    img{
    }
    h4 {
      color: #fff;
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 4rem;
        background-color:#CD853F;
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
    p {
      text-align: left;
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      color: rgba(244,255,244,1);
    }
  }
`;

export default ServiceCard;
