import { Container, Background, Form } from './styles';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

import { Link } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi';


export function SignIn() {
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
          Faça seu login
        </h2>

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
          title='Entrar'
        />

        <Link to='/register'>
          Criar conta
        </Link>

      </Form>

      <Background />

    </Container>
  )
}