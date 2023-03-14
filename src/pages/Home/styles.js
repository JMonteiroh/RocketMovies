import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content"
  ;
  
`;

export const Content = styled.div`
  padding: 0 6.4rem;

  grid-area: content;

  overflow-y: auto;

  > header {
    button {
      font-size: 1.4rem;
    }
  }

`;  