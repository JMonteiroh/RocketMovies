import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container, Form } from "./styles";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Textarea } from "../../Components/Textarea";
import { Section } from "../../Components/Section";
import { NoteItem } from "../../Components/NoteItem";
import { Button } from "../../Components/Button";
import { api } from "../../services/api";
 
export function Edit() {

  const [ editTitle, setEditTitle ] = useState('');
  const [ editDescription, setEditDescription ] = useState('');
  const [ editRating, setEditRating ] = useState('');
  const [ editTags, setEditTags ] = useState([])
  const [ editTag, setEditTag ] = useState('')
  
  const [ data, setData ] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

  


  function handleAddTag() {
    setEditTags(prevState => [...prevState, editTag]);
    setEditTag("")
  }

  function handleRemoveTag(deleted) {
    setEditTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleRemoveNote() {
    await api.delete(`/notes/${params.id}`)
    navigate('/')
  }

  async function handleEditNote() {
    if(!editTitle) {
      return alert("Digite o título da nota!")
    }

    if(!editRating) {
      alert("Digite uma nota para o filme de 0 a 5!")
    }

    if(editTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.put(`/notes/${params.id}`, {
      title: editTitle,
      description: editDescription,
      rating: editRating,
      tags: editTags,
    });
    
    alert('Nota atualizada com sucesso!');
    navigate(-1)
  }

  useEffect(() => {

    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      const { title, description, rating, tags } = response.data;

      setEditTitle(title)
      setEditDescription(description)
      setEditRating(rating)
      setEditTags(tags)

      
    }
    
    fetchNote();
  }, [])
  



  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft /> Voltar</Link>
            <h1>Editar Filme</h1>
          </header>

          <div className='inputs'>
            <Input 
              placeholder="Título"
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
           />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              value={editRating}
              onChange={e => setEditRating(e.target.value)}
            />

            <Textarea
              placeholder="Observações"
              value={editDescription}
              onChange={e => setEditDescription(e.target.value)}
            />
          </div>
          <Section title='Marcadores'>
            {
              editTags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag.name}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem 
              isNew 
              placeholder='Novo marcador'
              onChange={e => setEditTag(e.target.value)}
              value={editTag}
              onClick={handleAddTag}
            />
          </Section>
          <div  className='buttons'>            
            <Button
             title='Excluir Filme'
             onClick={handleRemoveNote}
            />
            <Button 
              title='Salvar' 
              onClick={handleEditNote}
            />
          </div>

        </Form>
      </main>
    </Container>
  )
}