import React from "react";
import { Avatar, Button, Card, Divider } from "antd";

const CardHeader = ({ initial }) => {
  return (
    <>
      <Avatar
        style={{ backgroundColor: "orange", verticalAlign: "middle" }}
        size="large"
      >
        {initial}
      </Avatar>
    </>
  );
};
export default function CustomCard({ data }) {
  return (
    <Card>
      <CardHeader initial="b" />
      {data.name}
      <Divider />

      <Divider />
    </Card>
  );
}
