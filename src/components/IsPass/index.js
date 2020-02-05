import React, { Component } from "react";
import styled from "styled-components";

export const Content = styled.div`
  padding: 15px;
`;

export class IsPass extends Component {
  render() {
    return (
      <div>
        <Content className="testing">123</Content>
      </div>
    );
  }
}

export default IsPass;
