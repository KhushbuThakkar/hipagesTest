import React from "react";
import renderer from "react-test-renderer";
import Loader from "./Loader";

it("render correctly Loader component", () => {
  const component = renderer.create(<Loader />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
