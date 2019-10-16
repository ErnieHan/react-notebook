import styled from "styled-components";

export const Content = styled.div`
  overflow-y: scroll;
  height: calc(100% - 56px);
  padding-bottom: 50px;
  &:hover {
    ::-webkit-scrollbar {
      width: 3px;
    }
  }
  &::-webkit-scrollbar {
    width: 0px;
    transition: width 300ms ease;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.rightSection.scrollBarBackground};
  }
  &::-webkit-scrollbar-track {
    background: #f7f7f7;
  }
`;

export const Article = styled.div`
  padding: 1rem;
  height: 125px;
  border-bottom: ${props => props.theme.rightSection.border};
  position: relative;
  cursor: pointer;
  transition: border 300ms ease;
  &[class*="active"] {
    transition: border 300ms ease, background 300ms ease;
    background: ${props => props.theme.rightSection.activeArticleBackground};
    &::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 100%;
      top: 0;
      left: 0;
      background: ${props => props.theme.rightSection.activeArticleBorderColor};
      transition: all 300ms ease;
    }
  }
  h1 {
    font-size: 1.75rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  p {
    color: #a6a6a6;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
`;
