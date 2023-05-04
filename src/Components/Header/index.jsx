import { FiSearch } from 'react-icons/fi'

import { Input } from "../Input";
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Brand, Logout } from "./styles";

export function Header() {

  const { signOut, user } = useAuth();


  return (
    <Container>
      <Brand to='/'>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />


      <Logout>
        <strong>{user.name}</strong>
        <button onClick={signOut}>sair</button>
      </Logout>

      <Profile to='/profile'>
        <img 
          src={user.avatar}
          alt={user.name}
        />
      </Profile>

    </Container>
  )
}