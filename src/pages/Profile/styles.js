import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  >header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.colors.lightPurple};

    display: flex;
    align-items: center;

    padding: 0 14.4rem;


    a {
      display: flex;
      align-items: center;
      font-size: 2rem;
      gap: .8rem;
      color: ${({ theme }) => theme.colors.pink};

      svg {
        font-size: 2rem;
      }
    }
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  max-width: 34rem;
  margin:-9rem auto 3.2rem;


  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    bottom: .7rem;
    right: .7rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.colors.gray_700};
    }
  }

`;