import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;


  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.gray_300};

  display: flex;
  align-items: center;
  padding: 2.4rem 12.3rem;
  gap: 12rem;

`;

export const Profile = styled(Link)`
  min-width: 26rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;


  > img {
    width:5.6rem;
    height:5.6rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
    margin-left: .9rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left:1.6rem;
    line-height: 2rem;

    span {
      position: relative;
      left: 150px;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray_200};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.white};

    }
  }
`;

export const Brand = styled(Link)`
  grid-area: brand;
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.pink};
  }
`;