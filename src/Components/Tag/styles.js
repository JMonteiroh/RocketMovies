import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: .5rem 1.6rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  color: ${({ theme }) => theme.colors.gray};
  margin-right: .8rem;
`;