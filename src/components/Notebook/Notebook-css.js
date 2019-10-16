import styled from "styled-components";

export const Content = styled.div``;

export const Head = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  transition: border 300ms ease;
  i {
    cursor: pointer;
    margin-right: 2.5rem;
    opacity: 0.5;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

export const DraftNotebook = styled.div`
  border: 1px solid #ccc;
`;

export const NotebookContent = styled.div`
  padding: 2rem 8rem;
`;
