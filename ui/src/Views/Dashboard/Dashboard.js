import React, { useState } from "react";
import Tabs from "../../Components/Tabs/Tabs";
import Container from "../Container";

export default function Dashboard() {
  const [selected, setSelected] = useState("invited");
  return (
    <div>
      <Tabs onSelect={setSelected} />
      <Container selected={selected}></Container>
    </div>
  );
}
