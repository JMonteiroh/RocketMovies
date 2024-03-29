import { Link } from "react-router-dom";

import styled from "styled-components";


export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.lightPurple};

  border: none;
  border-radius: 16px;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.colors.ice};
    margin-bottom: 0.8rem;
  }

  > .stars {
      margin-bottom: 1.5rem;
  }

  > p {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.colors.gray_2};
    justify-content: end;

    margin-bottom: 2.5rem;
  }

  &:hover{
    filter: brightness(0.6);
  }


`;