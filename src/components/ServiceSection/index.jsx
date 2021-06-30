import React, {useEffect} from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard/index";
import { AiOutlineGlobal } from "react-icons/ai";
import Price from '../../images/prince.png';
import Appartament from '../../images/appartment.png';
import Work from '../../images/work.png';
import Aos from "aos";
import "aos/dist/aos.css"

const ServiceSection = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <Container>
      <ServicesSectionStyled>
        <h1><AiOutlineGlobal />Serviços</h1>
        <div className="services" data-aos="zoom-in-down" id="servicos">
          <ServiceCard
            image={Work}
            title={"Família"}
            paragrafo={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            }
          />
          <div className="margin">
            <ServiceCard
            image={Appartament}
              title={"Apartamentos"}
              paragrafo={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              }
            />
          </div>
          <ServiceCard
            image={Price}
            title={"Descontos"}
            paragrafo={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            }
          />
        </div>
      </ServicesSectionStyled>
    </Container>
  );
};

export default ServiceSection;

const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 768px){
    margin: 0 2%;
  }

`;

const ServicesSectionStyled = styled.section`
 h1 {
    justify-content: center;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 2.3rem;
    display: flex;
    padding: 20px 5px;
    align-items: center;
    gap: 8px;
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  .services {
    display: flex;
    justify-content: space-between;
    margin: 2.8rem 0;
    @media (max-width: 768px) {
      flex-direction: column;
      .margin {
        margin: 20px 0;
      }
    }
  }
  .margin {
    margin: 0px 1rem;
  }
`;
