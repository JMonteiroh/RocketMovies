import { Container } from "./styles";
import star from '../../assets/Star.svg';
import starFull from '../../assets/StarFull.svg';


export function StarRating({ rating, ...rest }) {

  return (
    <Container { ...rest }>
      {[...Array(5).fill().map((_, index) => (
        <img 
          key={index}
          src={index < rating ? starFull : star}
          alt={index < rating ? "Estrela preenchida" : "Estrela vazia"}
        />
      ))]}
    
    </Container>
  )
}