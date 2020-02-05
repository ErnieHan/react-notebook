import styled from "styled-components";

export const Content = styled.div`
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.navbarBackground};
  padding: 20px;
  color: ${props => props.theme.navbarTextColor};
  z-index: 10;
  &::after {
    opacity: 0;
    pointer-events: none;
    transition: all 300ms ease;
  }
  @media screen and (max-width: 1200px) {
    transform: ${props =>
      props.menuActive ? "translateX(0%)" : "translateX(-100%)"};
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      width: 100vw;
      height: 1000vh;
      z-index: -1;
      opacity: ${props => (props.menuActive ? "1" : "0")};
      pointer-events: ${props => (props.menuActive ? "" : "none")};
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Logo = styled.div`
  letter-spacing: 5px;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.logoColor};
`;

export const Label = styled.label`
  position: relative;
  width: 38px;
  height: 16px;
  display: block;
  cursor: pointer;
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fefefe;
    border: 1px solid #fefefe;
    border-radius: 50px;
    transition: all 300ms;
  }
  div::after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    background: #282a2d;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    transition: all 300ms;
    left: 2px;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked ~ div {
    background: #fefefe;
  }
  input[type="checkbox"]:checked ~ div::after {
    background: #41513c;
    left: 100%;
    transform: translateY(-50%) translateX(calc(-100% - 2px));
  }
`;

export const SubTitle = styled.div`
  font-size: 0.9rem;
  letter-spacing: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const SubLists = styled.ul`
  li {
    padding: 0.5rem 0 0.5rem 1.5rem;
    font-size: 0.9rem;
    margin-left: -20px;
    margin-right: -20px;
    letter-spacing: 0.5px;
    transition: all 300ms ease;
    &:hover {
      color: #ffffff;
    }
    &[class^="active"] {
      background: ${props => props.theme.navbarListBackground};
      font-weight: bold;
      color: #ffffff;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: ${props => props.theme.navbarListBorder};
      }
    }
    cursor: pointer;
    i {
      margin: 0 5px;
    }
  }
`;

export const SubContent = styled.div`
  margin-bottom: 2.5rem;
`;

export const AddNewCollection = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  color: #ffffff;
  padding: 1rem;
  border-top: 1px solid #ffffff;
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  i {
    margin-right: 10px;
    font-size: 1rem;
  }
`;
