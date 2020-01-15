import React from "react";
import Login from "./Login.component";
import { shallow } from "enzyme";


describe("Login component", ()=> {
    test("it should render Login component", ()=> {
        const wrapper = shallow(<Login />);
        expect (wrapper.exists()).toBe(true);
    })
})