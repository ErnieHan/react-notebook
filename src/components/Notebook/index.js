import React, { Component } from "react";
import {
  Content,
  Head,
  DraftNotebook,
  NotebookContent
} from "./Notebook-css.js";
// Draft.js
import { Editor, EditorState, RichUtils } from "draft-js";

export class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = editorState => {
      this.setState({ editorState });
    };
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
  }
  toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }
  toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }
  render() {
    const styleMap = {
      RED: {
        color: "red"
      }
    };
    return (
      <Content>
        <Head>
          <div>
            <i
              className="fas fa-bold"
              onClick={() => {
                this.toggleInlineStyle("BOLD");
              }}
            />
            <i className="fas fa-italic" />
            <i className="fas fa-underline" />
            <i className="fas fa-strikethrough" />
            <i className="fas fa-font" />
            <i className="fas fa-cut" />
            <i className="fas fa-copy" />
            <i className="fas fa-list" />
            <i className="fas fa-list-ol" />
            <i className="fas fa-link" />
            <i className="fas fa-code" />
          </div>
        </Head>
        <NotebookContent className="basic">
          <button
            onClick={() => {
              this.toggleInlineStyle("RED");
            }}
          >
            Red
          </button>
          <button
            onClick={() => {
              this.toggleBlockType("header-one");
            }}
          >
            H1
          </button>
          <DraftNotebook className="editor">
            <Editor
              customStyleMap={styleMap}
              editorState={this.state.editorState}
              onChange={this.onChange}
            />
          </DraftNotebook>
        </NotebookContent>
      </Content>
    );
  }
}

export default Notebook;
