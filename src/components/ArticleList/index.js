import React, { Component } from "react";
import PropTypes from "prop-types";
import { Content, Article } from "./ArticleList-css.js";
// Redux
import { connect } from "react-redux";
import { setApp } from "../../store/actions";

class ArticleList extends Component {
  state = {
    active: 1
  };

  handleClick = index => {
    this.setState({
      active: index
    });
  };

  render() {
    const { themeColors } = this.props;
    const { active } = this.state;
    const lists = [
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      },
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      },
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      },
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      },
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      },
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      },
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      },
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      },
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      },
      {
        title: "Note With Star",
        contentText:
          "Testing WordTesting WordTesting WordTesting WordTesting WordTesting"
      }
    ];
    return (
      <Content>
        {lists.map((data, index) => (
          <Article
            key={index}
            theme={themeColors}
            onClick={() => this.handleClick(index)}
            className={active === index ? "active" : null}
          >
            <h1>{data.title}</h1>
            <p>{data.contentText}</p>
          </Article>
        ))}
      </Content>
    );
  }
}

ArticleList.propTypes = {
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
)(ArticleList);
