import React, { useState } from "react";
import { Menu } from "antd";
import "../../styles.css";

const CustomTabs = ({ onSelect }) => {
  const [selected, setselected] = useState("new");

  const handleClick = (e) => {
    setselected(e.key);
    onSelect(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[selected]}
      mode="horizontal"
      className="tabs"
    >
      <Menu.Item key="new">Invited</Menu.Item>
      <Menu.Item key="accepted">Accepted</Menu.Item>
      <Menu.Item key="declined">Declined</Menu.Item>
    </Menu>
  );
};

export default CustomTabs;
