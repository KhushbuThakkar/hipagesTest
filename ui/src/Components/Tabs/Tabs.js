import React, { useState } from "react";
import { Menu } from "antd";

const CustomTabs = ({ onSelect }) => {
  const [selected, setselected] = useState("new");

  const handleClick = (e) => {
    setselected(e.key);
    onSelect(e.key);
  };

  console.log(selected, "selected is");

  return (
    <Menu onClick={handleClick} selectedKeys={[selected]} mode="horizontal">
      <Menu.Item key="new">Invited</Menu.Item>
      <Menu.Item key="accepted">Accepted</Menu.Item>
      <Menu.Item key="declined">Declined</Menu.Item>
    </Menu>
  );
};

export default CustomTabs;
