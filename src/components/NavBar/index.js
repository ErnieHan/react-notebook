import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Content,
  Title,
  Label,
  Logo,
  SubTitle,
  SubLists,
  SubContent,
  AddNewCollection
} from "./Navbar-css.js";
// Redux
import { connect } from "react-redux";
import { changeTheme } from "../../store/actions";

class NavBar extends Component {
  handleChangeTheme = () => {
    const { changeTheme, themeName } = this.props;
    if (themeName === "primary") {
      // 切換為暗色主題
      changeTheme("dark");
    } else {
      // 切換為亮色主題
      changeTheme("primary");
    }
  };

  render() {
    const { themeName, themeColors } = this.props;
    return (
      <Content theme={themeColors} className="transition">
        <Title>
          <Logo theme={themeColors}>BLANK</Logo>
          <Label>
            <input
              type="checkbox"
              onChange={this.handleChangeTheme}
              checked={themeName === "dark"}
            />
            <div />
          </Label>
        </Title>
        <SubContent>
          <SubTitle>
            <p>STARRED</p>
            <i className="fas fa-caret-up" />
          </SubTitle>
          <SubLists theme={themeColors}>
            <li>
              <i className="fas fa-star" />
              Note With Star
            </li>
            <li>
              <i className="fas fa-star" />
              Note With Star 2
            </li>
            <li>
              <i className="fas fa-star" />
              Note With Star 3
            </li>
          </SubLists>
        </SubContent>
        <SubContent>
          <SubTitle>
            <p>COLLECTIONS</p>
            <i className="fas fa-caret-up" />
          </SubTitle>
          <SubLists theme={themeColors}>
            <li>
              <i className="fas fa-copy" />
              Home
            </li>
            <li>
              <i className="fas fa-copy" />
              Work
            </li>
            <li className="active">
              <i className="fas fa-copy" />
              Projects
            </li>
          </SubLists>
        </SubContent>
        <SubContent>
          <SubTitle>
            <p>TRASH</p>
            <i className="fas fa-caret-up" />
          </SubTitle>
        </SubContent>
        <AddNewCollection>
          <i className="fas fa-folder-plus" />
          NEW COLLECTION
        </AddNewCollection>
      </Content>
    );
  }
}

NavBar.propTypes = {
  changeTheme: PropTypes.func,
  themeName: PropTypes.string,
  themeColors: PropTypes.object
};

const mapStateToProps = state => ({
  themeName: state.app.updateTheme.themeName,
  themeColors: state.app.updateTheme.themeColors
});

const mapDispatchToProps = dispatch => {
  return {
    changeTheme: themeName => dispatch(changeTheme(themeName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
