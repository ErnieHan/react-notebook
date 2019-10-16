import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 1rem;
  border-top: ${props => props.theme.rightSection.searchBarBorder};
  background: ${props => props.theme.rightSection.searchBarBackground};
  z-index: 5;
  font-weight: bold;
  font-size: 0.8rem;
  box-shadow: ${props => props.theme.rightSection.searchBarBoxShadow};
  transition: border 300ms ease, background 300ms ease;
  i {
    margin-right: 10px;
    font-size: 1rem;
  }
  input[type="text"] {
    background: transparent;
    border: 0;
    outline: 0;
    font-size: 0.8rem;
    font-family: inherit;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${props => props.theme.rightSection.searchBarPalceColor};
    &::placeholder {
      color: ${props => props.theme.rightSection.searchBarPalceColor};
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
`;
