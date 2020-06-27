import React from "react";
import renderer from "react-test-renderer";
import Container from "./Container";

const testComponent = () => {
  return <p>Hello from test component</p>;
};
it("render correctly container component", () => {
  const component = renderer.create(
    <Container>
      <testComponent />
    </Container>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
