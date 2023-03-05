import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.lightPurple};

  border: none;
  border-radius: 16px;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.colors.ice};
  }

  > p {
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }


`;