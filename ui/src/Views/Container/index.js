import React from "react";
import { Layout } from "antd";
import Card from "../../Components/Card";

const { Header, Content, Sider } = Layout;

export default function Container({ selected }) {
  console.log(selected, " ** selected is");
  const renderInvited = () => {};

  const cards = [
    {
      id: 1,
      name: "Bill GAtes",
      suburb: "paramatta",
      category: "Painters",
      description: "",
      price: "$120",
      status: "accepted",
    },
    {
      id: 2,
      name: "Will GAtes",
      suburb: "paramatta",
      category: "Painters",
      description: "",
      price: "$100",
      status: "invited",
    },
  ];

  const selectedCards = cards.filter((item) => item.status === selected);
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
        {selectedCards.map((singleCard, key) => (
          <Card data={singleCard} key={key} />
        ))}
      </Content>
    </Layout>
  );
}
