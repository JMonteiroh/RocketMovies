import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Textarea } from "../../Components/Textarea";
import { Section } from "../../Components/Section";
import { NoteItem } from "../../Components/NoteItem";
import { Button } from "../../Components/Button";
 
export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft /> Voltar</Link>
            <h1>Novo filme</h1>
          </header>

          <div class='inputs'>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
            <Textarea placeholder="Observações" />
          </div>
          <Section title='Marcadores'>
            <NoteItem value='Ação'/>
            <NoteItem isNew placeholder='Novo marcador' />
          </Section>
          <div  class='buttons'>            
            <Button title='Excluir Filme' />
            <Button title='Salvar Alterações' />
          </div>

        </Form>
      </main>
    </Container>
  )
}