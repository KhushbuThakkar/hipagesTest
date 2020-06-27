import React from "react";
import renderer from "react-test-renderer";
import Header from "./Header";

it("render correctly Header component", () => {
  const component = renderer.create(<Header text="Test Header" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
