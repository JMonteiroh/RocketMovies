import styled from "styled-components";

export const Container = styled.div`  
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content"
  ;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
   }
`;

export const Form = styled.form`
  max-width: 113.7rem;
  margin: 3.8rem auto;

  > header {
    display: grid;
    justify-content: start;
    align-items: center;
    gap: 2.4rem;
    
    a {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.pink};

      svg {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.pink};
      }
    }

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }
    margin-bottom: 4rem;
  }
  > .inputs {
    display: grid;
    grid-template-areas:
      "titulo nota"
      "obs obs"
    ;
    gap: 3rem;

    > div:nth-child(1) {
      grid-area: titulo;
    }
    > div:nth-child(2) {
      grid-area: nota;
    }
    > textarea {
      grid-area: obs;
      margin-bottom: 3rem;
    }

  }

  Section {
    margin: 0;

    > main {
      display: flex;
      gap: 2.4rem;
      padding: 1.6rem;
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: .8rem;

      svg {
        font-size: 2rem;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    margin-top: 4rem;

    > button {
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      font-weight: 500;
    }

    > button:nth-child(1) {
      background-color: ${(({ theme }) => theme.colors.black)};
      color: ${({ theme }) => theme.colors.pink};
    }

  }

`;