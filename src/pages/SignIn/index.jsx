import { useAuth } from '../../hooks/auth';

import { Container, Background, Form } from './styles';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

import { Link } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {

  const data = useAuth();

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
          type='text'
          icon={FiMail}
        />
        <Input
          placeholder='Senha'
          type='password'
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