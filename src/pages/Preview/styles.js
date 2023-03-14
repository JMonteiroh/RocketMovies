import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  > main {
    display: grid;
    place-content: center;
    height: 100vh;
    padding: 0 6.4rem;
  }
`;

export const Content = styled.div`
  height: 100vh;
  width: 100%;
  margin: 5rem;

  font-size: 3rem;
  > a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.pink};
    margin-bottom: 2.4rem;
  }

  > .title {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin-bottom: 2.4rem;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
      line-height: 4.7rem;
      color: ${({ theme }) => theme.colors.ice};
    }

    .stars {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.pink};  
    }
  }

  .information {
    display: flex;
    align-items: center;
    gap: .8rem;
    margin-bottom: 4rem;

    img {
      width:1.6rem;
      height:1.6rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.gray_200};
    }

    p {
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: ${({ theme }) => theme.colors.ice};
    }

    svg {
      color: ${({ theme }) => theme.colors.pink};
      font-size: 1.6rem;
    }

    span {
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: ${({ theme }) => theme.colors.ice};
    }
  }


border: 1px solid red;
`;