import React, { Component } from "react";
import PropTypes from "prop-types";
import { Content } from "./SearchBar-css.js";
// Redux
import { connect } from "react-redux";
import { setApp } from "../../store/actions";

class SearchBar extends Component {
  render() {
    const { themeColors } = this.props;
    return (
      <Content theme={themeColors}>
        <i className="fas fa-search" />
        <input type="text" placeholder="SEARCH" />
      </Content>
    );
  }
}

SearchBar.propTypes = {
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
)(SearchBar);
