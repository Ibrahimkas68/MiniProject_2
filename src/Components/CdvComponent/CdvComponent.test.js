import React from "react";
import { shallow } from "enzyme";
import CdvComponent from "./CdvComponent";

describe("CdvComponent", () => {
    test("matches snapshot", () => {
        const wrapper = shallow(<CdvComponent />);
        expect(wrapper).toMatchSnapshot();
    });
});
