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

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ rating, setRating ] = useState('');

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState('')

  const navigate = useNavigate()


  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Digite o título da nota!")
    }

    if(!rating) {
      alert("Digite uma nota para o filme de 0 a 5!")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags,
    });

    alert('Nota criada com sucesso!');
    navigate('/')
  }



  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft /> Voltar</Link>
            <h1>Novo filme</h1>
          </header>

          <div className='inputs'>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
           />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />

            <Textarea
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <Section title='Marcadores'>
            {
              tags.map((tag, index) => (
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
            <Button title='Excluir Filme' />
            <Button 
              title='Salvar Alterações' 
              onClick={handleNewNote}
            />
          </div>

        </Form>
      </main>
    </Container>
  )
}