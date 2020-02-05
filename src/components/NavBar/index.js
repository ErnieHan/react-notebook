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
  state = {
    active: "Projects"
  };

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

  handleChangeCollection = item => {
    this.setState({
      active: item.subtitle
    });
  };

  render() {
    const { themeName, themeColors, menuActive } = this.props;
    const { active } = this.state;
    const navbarLists = [
      {
        title: "STARRED",
        subitems: [
          { subtitle: "Note With Star" },
          { subtitle: "Note With Star 2" },
          { subtitle: "Note With Star 3" }
        ]
      },
      {
        title: "COLLECTIONS",
        subitems: [
          { subtitle: "Home" },
          { subtitle: "Work" },
          { subtitle: "Projects" }
        ]
      },
      { title: "TRASH" }
    ];
    return (
      <Content
        theme={themeColors}
        menuActive={menuActive}
        className="transition"
      >
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
        {navbarLists.map((data, index) => (
          <SubContent key={index}>
            <SubTitle>
              <p>{data.title}</p>
              <i className="fas fa-caret-up" />
            </SubTitle>
            <SubLists theme={themeColors}>
              {data.subitems
                ? data.subitems.map((item, jndex) => (
                    <li
                      key={jndex}
                      className={item.subtitle === active ? "active" : null}
                      onClick={() => this.handleChangeCollection(item)}
                    >
                      {data.title === "STARRED" ? (
                        <i className="fas fa-star" />
                      ) : (
                        <i className="fas fa-copy" />
                      )}
                      {item.subtitle}
                    </li>
                  ))
                : null}
            </SubLists>
          </SubContent>
        ))}
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
  themeColors: PropTypes.object,
  menuActive: PropTypes.bool
};

const mapStateToProps = state => ({
  themeName: state.app.updateTheme.themeName,
  themeColors: state.app.updateTheme.themeColors,
  menuActive: state.app.toggleMenu.active
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
