import React, { Component } from "react";
import PropTypes from "prop-types";
import { Content, Left, Right } from "./CollectionHead-css.js";
// Redux
import { connect } from "react-redux";
import { setApp } from "../../store/actions";

export class CollectionHead extends Component {
  render() {
    const { themeColors } = this.props;
    return (
      <Content theme={themeColors}>
        <Left>
          <i className="fas fa-th-list active" />
          <i className="fas fa-th-large" />
        </Left>
        <Right>
          <i className="fas fa-trash" />
          <i className="fas fa-star" />
          <i className="fas fa-plus" />
        </Right>
      </Content>
    );
  }
}

CollectionHead.propTypes = {
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
)(CollectionHead);
