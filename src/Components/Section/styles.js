import styled from "styled-components";

export const Container = styled.section`
  margin: 5rem;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;

    h2 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 3.2rem;
      font-weight: 400;
      /* min-width: 18.6rem; */
    }

    button {
      width: 21.8rem;
      height: 4.8rem;
    }
  }

`;