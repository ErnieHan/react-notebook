import styled from "styled-components";

export const Content = styled.div`
  padding: 1rem;
  border-bottom: ${props => props.theme.rightSection.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  transition: border 300ms ease;
`;

export const Left = styled.div`
  i {
    cursor: pointer;
    margin-right: 1.5rem;
    &:not([class*="active"]) {
      opacity: 0.2;
    }
  }
`;

export const Right = styled.div`
  i {
    cursor: pointer;
    margin-right: 1.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Menu = styled.i`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
