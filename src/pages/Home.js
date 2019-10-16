import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// Redux
import { connect } from "react-redux";
import { setApp } from "../store/actions";
// Components
import CollectionHead from "../components/CollectionHead";
import ArticleList from "../components/ArticleList";
import SearchBar from "../components/SearchBar";
import Notebook from "../components/Notebook";

const Content = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 30%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.rightSection.background};
  color: ${props => props.theme.rightSection.textColor};
  border-right: ${props => props.theme.rightSection.border};
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 70%;
  height: 100vh;
  overflow: hidden;
  background: ${props => props.theme.leftSection.background};
  color: ${props => props.theme.leftSection.textColor};
  @media screen and (max-width: 991px) {
    width: 100%;
    position: fixed;
    transform: translateX(100%);
    top: 0;
    left: 0;
  }
`;

export class Home extends Component {
  render() {
    const { themeColors } = this.props;
    return (
      <Content>
        <Left theme={themeColors} className="transition">
          <CollectionHead />
          <ArticleList />
          <SearchBar />
        </Left>
        <Right theme={themeColors} className="transition">
          <Notebook />
        </Right>
      </Content>
    );
  }
}

Home.propTypes = {
  themeName: PropTypes.string,
  themeColors: PropTypes.object
};

const mapStateToProps = state => ({
  themeName: state.app.updateTheme.themeName,
  themeColors: state.app.updateTheme.themeColors
});

const mapDispatchToProps = dispatch => {
  return {
    setApp: () => dispatch(setApp())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
