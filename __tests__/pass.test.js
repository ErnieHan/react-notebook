import React from "react";
import { shallow } from "enzyme";
import IsPass from "../src/components/IsPass/index";
// import { Content } from "../src/components/IsPass/index";

describe("newsTop元件測試", () => {
  describe("newsTop內容測試", () => {
    let component;
    //每次測試前都執行渲染元件
    beforeEach(() => {
      component = shallow(<IsPass />);
      console.log(component.debug());
    });

    it("NewsTop元件是否有顯示", () => {
      expect(component.find("Content")).toHaveLength(1);
    });
  });
});
