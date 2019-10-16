import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// Redux
import { connect } from "react-redux";
import { setApp } from "../store/actions";
// Components
import CollectionHead from "../components/CollectionHead";
import ArticleList from "../components/ArticleList";

const Content = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 30%;
  height: 100vh;
  overflow: hidden;
  background: ${props => props.theme.rightSection.background};
  color: ${props => props.theme.rightSection.textColor};
  border-right: 1px solid #e9e9e9;
`;

const Right = styled.div`
  width: 70%;
  height: 100vh;
  overflow: hidden;
  background: ${props => props.theme.leftSection.background};
  color: ${props => props.theme.leftSection.textColor};
`;

export class Home extends Component {
  render() {
    const { themeColors } = this.props;
    return (
      <Content>
        <Left theme={themeColors} className="transition">
          <CollectionHead />
          <ArticleList />
        </Left>
        <Right theme={themeColors} className="transition"></Right>
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
