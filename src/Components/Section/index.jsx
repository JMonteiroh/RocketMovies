import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Button } from '../Button';
import { FiPlus } from 'react-icons/fi';

export function Section({ title, children, buttonOn }) {
  return (
    <Container
      disabled={buttonOn}
    >
      <header>
        <h2>{title}</h2>
        <Link to='/new'>
          {buttonOn ? <Button to="/new"
                icon={FiPlus} 
                title='Adicionar Filme'
              /> : null }
        </Link>
      </header>
      <main>        
        {children}
      </main>
    </Container>
  )
}