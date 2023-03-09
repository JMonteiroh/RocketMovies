import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.gray_900};

  height: 4.8rem;
  border: 0;
  padding: 1.3rem 2.8rem;
  border-radius: 1rem;

  line-height: 2.1rem;
  font-size: 1.6rem;
  font-weight: 400;

  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;

  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }

`;