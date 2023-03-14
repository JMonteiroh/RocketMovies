import { FiSearch } from 'react-icons/fi'

import { Input } from "../Input";
import { Container, Profile, Brand } from "./styles";

export function Header() {
  return (
    <Container>
      <Brand to='/'>
        <h1>RocketMovies</h1>
      </Brand>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />

      <Profile to='/profile'>
        <img 
          src="http://github.com/jmonteiroh.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>João Paulo Monteiro</strong>
        </div>
      </Profile>

    </Container>
  )
}