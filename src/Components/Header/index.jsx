import { FiSearch } from 'react-icons/fi'

import { Input } from "../Input";
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Brand, Logout } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Header(props) {
  const [search,  setSearch] = useState("")
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const navigate = useNavigate()



  function handleChange(e) {
    setSearch(e.target.value);
    props.updateValue(e.target.value)
    
  }


  function handleSignOut() {
    navigate('/')
    signOut()
  }
  


  return (
    <Container>
      <Brand to='/'>
        <h1>RocketMovies</h1>
      </Brand>

      <Input
       placeholder="Pesquisar pelo título" 
       icon={FiSearch}
       value={search}
       onChange={handleChange}
      />


      <Logout>
        <strong>{user.name}</strong>
        <button onClick={handleSignOut}>sair</button>
      </Logout>

      <Profile to='/profile'>
        <img 
          src={avatarUrl}
          alt={user.name}
        />
      </Profile>

    </Container>
  )
}