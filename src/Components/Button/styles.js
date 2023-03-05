import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.gray_900};

  height: 4.8rem;
  border: 0;
  padding: 1.3rem 2.8rem;
  border-radius: 10px;
  font-weight: 400;

  display: flex;
  flex-direction: row-reverse;
  gap: 0.8rem;

  &:disabled {
    opacity: 0.5;
  }

`;