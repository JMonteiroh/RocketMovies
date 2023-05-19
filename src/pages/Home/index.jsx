import { Container, Content } from "./styles";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { Note } from "../../Components/Note";
import { api } from "../../services/api";

export  function Home() {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

    
  function updateValue(value) {
    setSearch(value);
  }

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }


  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data)
    }
    
    fetchNotes()
  }, [search]); 



  return (
    <Container>
      <Header updateValue={updateValue} />
      
      <Content>
        <Section title="Meus filmes" buttonOn>

          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handlePreview(note.id)}
              />
            ))
          }
        </Section>
      </Content>
    </Container>
  );
}