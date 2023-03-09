import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.colors.gray_800};
  color: ${({ theme }) => theme.colors.lightPurple};

  border: ${({ theme, isNew }) => isNew ? `.1rem dashed ${theme.colors.gray_200}` : "none"};
  border-radius: 1.0rem;
  padding-right: 1.6rem;

  .button-delete {
    color: ${({ theme }) => theme.colors.pink};
    
  }
  .button-add {
    color: ${({ theme }) => theme.colors.pink};

  }

  > button {
    border: none;
    background: none;
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme.colors.white};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_200};
    }

  }

`;