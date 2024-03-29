import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, Form } from "./styles";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Textarea } from "../../Components/Textarea";
import { Section } from "../../Components/Section";
import { NoteItem } from "../../Components/NoteItem";
import { Button } from "../../Components/Button";
import { api } from "../../services/api";
 
export function New() {

  const [ newTitle, setNewTitle ] = useState('');
  const [ newDescription, setNewDescription ] = useState('');
  const [ newRating, setNewRating ] = useState('');

  const [ newTags, setNewTags ] = useState([])
  const [ newTag, setNewTag ] = useState('')

  const navigate = useNavigate()


  function handleAddTag() {
    setNewTags(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setNewTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if(!newTitle) {
      return alert("Digite o título da nota!")
    }

    if(!newRating) {
      alert("Digite uma nota para o filme de 0 a 5!")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post('/notes', {
      title: newTitle,
      description: newDescription,
      rating: newRating,
      tags: newTags,
    });

    alert('Nota criada com sucesso!');
    navigate(-1)
  }



  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a 
            onClick={() => navigate(-1)}
            >
              <FiArrowLeft /> Voltar
            </a>

            <h1>
              Novo filme
            </h1>
          </header>

          <div className='inputs'>
            <Input 
              placeholder="Título"
              onChange={e => setNewTitle(e.target.value)}
           />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setNewRating(e.target.value)}
            />

            <Textarea
              placeholder="Observações"
              onChange={e => setNewDescription(e.target.value)}
            />
          </div>
          <Section title='Marcadores'>
            {
              newTags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem 
              isNew 
              placeholder='Novo marcador'
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </Section>
          <div  className='buttons'>            
            {/* <Button title='Excluir Filme' /> */}
            <Button 
              title='Salvar' 
              onClick={handleNewNote}
            />
          </div>

        </Form>
      </main>
    </Container>
  )
}