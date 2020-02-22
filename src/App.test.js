import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

configure({ adapter: new Adapter() });

it("renders without an error", () => {
  const wrapper = shallow(<App />);

  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

it("renders increment button", () => {});

it("renders counter display", () => {});

it("counter starts at 0", () => {});

it("clicking the button increments the counter in the display", () => {});
