import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_800};
  color: ${({ theme }) => theme.gray};
  border-radius: 10px;

  > input {
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;
    color: ${({ theme }) => theme.colors.gray_200};
    background: transparent;
    border: 0;

    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_200};
    }
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.colors.gray_200};
  }
`;