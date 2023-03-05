import { Container, Content } from "./styles";
import { FiPlus } from "react-icons/fi";

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Section } from "../../Components/Section";

export  function Home() {
  return (
    <Container>
      <Header />
      
      <Content>
        <Section title="Meus filmes">
          <Button 
            icon={FiPlus} 
            title='Adicionar Filme'
          />
        </Section>
      </Content>
    </Container>
  );
}