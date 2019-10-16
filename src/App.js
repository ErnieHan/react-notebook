import React from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { setApp, readThemeCookie, changeTheme } from "./store/actions";
// i18n
import { Translation } from "react-i18next";
import i18n from "i18next";
// Router
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
// Style-Components
import styled from "styled-components";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
// Function
import getCookie from "./function/getCookie";
import writeCookie from "./function/writeCookie";
// Components
import NavBar from "./components/NavBar";

const LanguageButton = styled.button`
  min-width: 250px;
  padding: 12px;
  background: #111111;
  color: #ffffff;
  font-size: 14px;
  border: 0;
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  padding-left: 250px;
`;

class App extends React.Component {
  state = {
    language: "zhTW"
  };

  componentDidMount() {
    const { readThemeCookie } = this.props;
    // 設置語言包
    // 1. 抓取語言的Cookie
    const language_cookie = getCookie("language");
    if (!language_cookie) {
      // 2. 沒有語言的Cookie的話先設定預設為zhTW
      writeCookie("language", "zhTW");
    } else {
      // 3. 有語言的Cookie的話便抓取
      const now_language_cookie = getCookie("language");
      this.setState({
        language: now_language_cookie
      });
      i18n.changeLanguage(now_language_cookie);
    }
    readThemeCookie();
  }

  changeLanguage = () => {
    if (this.state.language === "zhTW") {
      // 修改為繁體中文
      this.setState({
        language: "en"
      });
      i18n.changeLanguage("en");
      writeCookie("language", "en");
    } else {
      // 修改為英文
      this.setState({
        language: "zhTW"
      });
      i18n.changeLanguage("zhTW");
      writeCookie("language", "zhTW");
    }
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

  render() {
    const { getThemeSuccessfully, themeName, themeColors } = this.props;
    return (
      getThemeSuccessfully && (
        <div>
          {/* <style>{`
          body{
            background: ${themeColors.background};
            color: ${themeColors.textColor};
          }
          `}</style> */}
          {/* <Translation>{t => <h1>{t("app.hello")}</h1>}</Translation> */}
          {/* <LanguageButton onClick={this.changeLanguage}>
            點擊切換語言，目前語言為：{this.state.language}
          </LanguageButton> */}

          <NavBar />
          <Content>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="*">
                  <Page404 />
                </Route>
              </Switch>
            </Router>
          </Content>
        </div>
      )
    );
  }
}

App.propTypes = {
  setApp: PropTypes.func,
  setAppActive: PropTypes.bool,
  readThemeCookie: PropTypes.func,
  themeName: PropTypes.string,
  themeColors: PropTypes.object,
  getThemeSuccessfully: PropTypes.bool,
  changeTheme: PropTypes.func
};

const mapStateToProps = state => ({
  setAppActive: state.app.active,
  themeName: state.app.updateTheme.themeName,
  themeColors: state.app.updateTheme.themeColors,
  getThemeSuccessfully: state.app.updateTheme.getThemeSuccessfully
});

const mapDispatchToProps = dispatch => {
  return {
    setApp: () => dispatch(setApp()),
    readThemeCookie: () => dispatch(readThemeCookie()),
    changeTheme: themeName => dispatch(changeTheme(themeName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
