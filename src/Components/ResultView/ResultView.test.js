import React from "react";
import { shallow } from "enzyme";
import ResultView from "./ResultView";

describe("ResultView", () => {
    test("matches snapshot", () => {
        const wrapper = shallow(<ResultView />);
        expect(wrapper).toMatchSnapshot();
    });
});
