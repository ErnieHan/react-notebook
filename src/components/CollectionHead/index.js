import React, { Component } from "react";
import PropTypes from "prop-types";
import { Content, Left, Right, Menu } from "./CollectionHead-css.js";
// Redux
import { connect } from "react-redux";
import { toggleMenu } from "../../store/actions";

export class CollectionHead extends Component {
  handleToggle = () => {
    // 開啟 MENU 選單
    this.props.toggleMenu(true);
  };
  render() {
    const { themeColors } = this.props;
    return (
      <Content theme={themeColors}>
        <Left>
          <Menu className="fas fa-bars active" onClick={this.handleToggle} />
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
  themeColors: PropTypes.object,
  toggleMenu: PropTypes.func
};

const mapStateToProps = state => ({
  themeName: state.app.updateTheme.themeName,
  themeColors: state.app.updateTheme.themeColors
});

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: bool => dispatch(toggleMenu(bool))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionHead);
