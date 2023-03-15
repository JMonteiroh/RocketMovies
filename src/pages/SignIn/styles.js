import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 10.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.8rem;

    color: ${({ theme }) => theme.colors.pink};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.2rem;

    margin-bottom: 4.8rem;

    color: ${({ theme }) => theme.colors.ice};
  }
  
  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
  
    margin-bottom: 4.8rem;
    
    color: ${({ theme }) => theme.colors.gray_100};

  }

  > a {
    margin-top: 4.8rem;
    
    font-size: 1.6rem;
    line-height: 2.1rem;

    color: ${({ theme }) => theme.colors.pink};
  }

  > div {
    margin-bottom: .8rem;

  }

  > button {
    margin-top: 1.6rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center/cover;
  opacity: 25%;
`;