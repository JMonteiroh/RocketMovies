import styled from "styled-components";

export const Container = styled.div`

textarea { 
    width: 100%;
    height: 27.4rem;
  
    background-color: ${({ theme }) => theme.colors.gray_800};
    color: ${({ theme }) => theme.colors.gray_200};
    border-radius: 10px;
  
    border: none;
    resize: none;
    font-size: 1.6rem;
    padding: 1.2rem;
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.gray_200};
      }
    
  }

`;
