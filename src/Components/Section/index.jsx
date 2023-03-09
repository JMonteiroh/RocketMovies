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
        
        {buttonOn ? <Button 
              icon={FiPlus} 
              title='Adicionar Filme'
            /> : null }
      </header>
      <main>        
        {children}
      </main>
    </Container>
  )
}