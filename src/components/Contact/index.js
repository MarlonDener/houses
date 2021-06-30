import { Button } from "../Styles/Button";
import * as Styled from "./styles";
export default function Contact() {
  return (
    <Styled.Container>
      <h1 id="contato">Contato</h1>
      <Styled.LineContainer>
        <Styled.Input type="text" placeholder="Nome:" />
        <Styled.Input type="email" placeholder="Email:" />
      </Styled.LineContainer>
      <Styled.Textarea placeholder="Mensagem:"></Styled.Textarea>
      <Button primary>Enviar</Button>
    </Styled.Container>
  );
}
