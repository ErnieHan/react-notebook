import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Content,
  Left,
  Right,
  Menu,
  ListButton
} from "./CollectionHead-css.js";
// Redux
import { connect } from "react-redux";
import { toggleMenu } from "../../store/actions";

export class CollectionHead extends Component {
  state = {
    active: "large"
  };
  handleToggle = () => {
    // 開啟 MENU 選單
    this.props.toggleMenu(true);
  };

  handleChange = e => {
    this.setState({
      active: e.name
    });
  };
  render() {
    const { themeColors } = this.props;
    const { active } = this.state;
    const lists = [
      { name: "large", className: "fas fa-th-list" },
      { name: "small", className: "fas fa-th-large" }
    ];
    return (
      <Content theme={themeColors}>
        <Left>
          <Menu
            className="fas fa-sliders-h active"
            onClick={this.handleToggle}
          />
          {lists.map((data, index) => (
            <ListButton
              key={index}
              className={data.className}
              active={data.name === active}
              onClick={() => this.handleChange(data)}
            />
          ))}
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
