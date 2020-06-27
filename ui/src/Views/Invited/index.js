import React from "react";
import { Layout } from "antd";
import Card from "../../Components/Card";

const { Header, Content, Sider } = Layout;

export default function Accepted() {
  const renderInvited = () => {};

  const cards = [
    {
      id: 1,
      name: "Bill GAtes",
      suburb: "paramatta",
      category: "Painters",
      description: "",
      price: "$120",
    },
    {
      id: 2,
      name: "Will GAtes",
      suburb: "paramatta",
      category: "Painters",
      description: "",
      price: "$100",
    },
  ];
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        {cards.map((singleCard, key) => (
          <Card data={singleCard}>hey there</Card>
        ))}
      </Content>
    </Layout>
  );
}
