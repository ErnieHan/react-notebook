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
              class="fas fa-bold"
              onClick={() => {
                this.toggleInlineStyle("BOLD");
              }}
            />
            <i class="fas fa-italic" />
            <i class="fas fa-underline" />
            <i class="fas fa-strikethrough" />
            <i class="fas fa-font" />
            <i class="fas fa-cut" />
            <i class="fas fa-copy" />
            <i class="fas fa-list" />
            <i class="fas fa-list-ol" />
            <i class="fas fa-link" />
            <i class="fas fa-code" />
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
