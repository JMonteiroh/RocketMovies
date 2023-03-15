import { Container, Background, Form } from './styles';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

import { Link } from 'react-router-dom';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';


export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>
          RocketMovies
        </h1>
        <p>
          Aplicação para acompanhar tudo que assistir.
        </p>

        <h2>
          Crie sua conta
        </h2>

        <Input
          placeholder='Nome'
          typy='text'
          icon={FiUser}
        />

        <Input
          placeholder='E-mail'
          typy='text'
          icon={FiMail}
        />
        <Input
          placeholder='Senha'
          typy='password'
          icon={FiLock}
        />

        <Button 
          title='Cadastrar'
        />

        <Link to='/'>
          <FiArrowLeft /> 
          Voltar para o login
        </Link>

      </Form>

      <Background />

    </Container>
  )
}