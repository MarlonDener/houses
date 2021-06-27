import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: #000d1a;
  color: #fff;
  box-shadow: 5px 4px 3px 4px rgba(0, 0, 0, 0.6);
`;

export default function Footer() {
  return (
    <FooterSection>
      &copy; Todos direitos reservados: Marlon Dener
    </FooterSection>
  );
}
