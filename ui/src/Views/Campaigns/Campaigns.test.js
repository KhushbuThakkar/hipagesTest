import React from "react";
import * as TestRenderer from "react-test-renderer";
import App from "../../App";
import Header from "../../Components/Header/Header";

it("Campaigns Component", () => {
  const renderer = TestRenderer.create(<App />);
  const instance = renderer.root;
  console.assert(instance.findByType(Header));
});
