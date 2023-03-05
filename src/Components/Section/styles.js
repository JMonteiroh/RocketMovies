import styled from "styled-components";

export const Container = styled.section`
  margin: 5rem;


  > h2 {
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 3.2rem;
    font-weight: 400;
    min-width: 186px;
  }
`;