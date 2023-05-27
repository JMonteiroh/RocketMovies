import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;


  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.gray_300};

  background-color: ${({ theme }) => theme.colors.lightPurple};

  display: flex;
  align-items: center;
  padding: 2.4rem 12.3rem;
`;

export const Profile = styled(Link)`
  display: flex;
  padding: 0 2rem 0 0;

  > img {
    width:5.6rem;
    height:5.6rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
    margin-left: .9rem;
  }

  
`;

export const Brand = styled(Link)`
  grid-area: brand;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 8rem;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Logout = styled.div`
  display: flex;
  line-height: 2rem;
  padding-left: 8rem;
  
  min-width: 26rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-end;

    button {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray_200};
      border: none;
      background: none;

    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.white};
      
    }

`;