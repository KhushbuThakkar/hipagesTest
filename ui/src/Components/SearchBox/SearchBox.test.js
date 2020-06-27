import React from "react";
import * as TestRenderer from "react-test-renderer";
import SearchBox from "./SearchBox";

it("it should test if search text is rendering", () => {
  const renderer = TestRenderer.create(<SearchBox onSearch={() => {}} />);
  const instance = renderer.root;
  const input = instance.find((el) => el.type === "input");
  // then
  expect(input.val).toEqual(undefined);
});
