import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const CustomTabs = ({ onSelect }) => {
  const [selected, setselected] = useState("new");

  const handleClick = (e) => {
    setselected(e.key);
    onSelect(e.key);
  };

  console.log(selected, "selected is");

  return (
    <Menu onClick={handleClick} selectedKeys={[selected]} mode="horizontal">
      <Menu.Item key="new" icon={<MailOutlined />}>
        Invited
      </Menu.Item>
      <Menu.Item key="accepted" icon={<MailOutlined />}>
        Accepted
      </Menu.Item>
      <Menu.Item key="rejected" icon={<MailOutlined />}>
        Rejected
      </Menu.Item>
    </Menu>
  );
};

export default CustomTabs;
