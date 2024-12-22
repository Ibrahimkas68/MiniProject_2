import React from "react";
import { shallow } from "enzyme";
import SearchView from "./SearchView";

describe("SearchView", () => {
    test("matches snapshot", () => {
        const wrapper = shallow(<SearchView />);
        expect(wrapper).toMatchSnapshot();
    });
});
