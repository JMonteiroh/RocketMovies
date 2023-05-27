import { Container } from "./styles";
import { Tag } from '../Tag';
import { StarRating } from "../StarRating";

export function Note({data, ...rest}) {


  


  return (
    <Container {...rest} >
      <h1>{data.title}</h1>
      
      <StarRating
        className='stars'
        rating={data.rating}
      />

      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  );
}