import React from "react";
import { shallow } from "enzyme";
import ReservationView from "./ReservationView";

describe("ReservationView", () => {
    test("matches snapshot", () => {
        const wrapper = shallow(<ReservationView />);
        expect(wrapper).toMatchSnapshot();
    });
});
