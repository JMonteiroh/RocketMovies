import { Container, Content } from "./styles";

import { format } from "date-fns";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiClock, FiStar } from "react-icons/fi";

import { Header } from "../../Components/Header";
import { Tag } from "../../Components/Tag";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Preview() {
  
  const { user } = useAuth();
  
  const [ data, setData ] =useState(null);
  const [ createdAt, setCreatedAt ] =useState(null);
  
  const params = useParams();
  const navigate = useNavigate();
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  



  function handleBack() {
    navigate(-1)
  }



  useEffect(() => {

    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

    fetchNote();
  }, [])

  function handleEditNote() {
    navigate(`/edit/${params.id}`)
  }


  return (
    <Container >
      <Header />
      { 
        data &&
        <main>
          <Content>
            <div className="buttons">
              <button onClick={handleBack}><FiArrowLeft size={16} /> Voltar</button>
            </div>
            <div className="title">
              <h1>
                {data.title}
              </h1>
        
              <span className="stars">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </span>
            </div>
        
        
            <div className="information">
              <img src={avatarUrl} alt={user.name} />
        
              <p>
                Por {user.name}
              </p>
        
              <FiClock />
        
              <span className="data">
                {format(new Date(createdAt), 'dd/MM/yyyy')}
              </span>
        
              <p>
                às
              </p>
        
              <span className="hour">
                {format(new Date(createdAt), 'HH:mm')}
              </span>
        
            </div>
            {
              data.tags.map(tag => 
                <Tag key={String(tag.id)}
                title={tag.name}
                />
              )
            }
  
            <p>
              {data.description}
            </p>

            <button onClick={handleEditNote} >
              Alterar 
            </button>

          
          </Content>
        </main>
      }
    </Container>
  )
}