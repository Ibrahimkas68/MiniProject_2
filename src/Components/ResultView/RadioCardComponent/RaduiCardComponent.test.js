import React from "react";
import { shallow } from "enzyme";
import RadioCardComponent from "./RadioCardComponent";

describe("RadioCardComponent", () => {
    test("matches snapshot", () => {
        const wrapper = shallow(<RadioCardComponent />);
        expect(wrapper).toMatchSnapshot();
    });
});
