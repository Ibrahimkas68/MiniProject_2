import React from "react";
import { shallow } from "enzyme";
import ProfileView from "./ProfileView";

describe("ProfileView", () => {
    test("matches snapshot", () => {
        const wrapper = shallow(<ProfileView />);
        expect(wrapper).toMatchSnapshot();
    });
});
