import React from "react";
import { shallow } from "enzyme";
import CardComponent from "./CardComponent";

describe("CardComponent", () => {
    test("matches snapshot", () => {
        const wrapper = shallow(<CardComponent />);
        expect(wrapper).toMatchSnapshot();
    });
});
