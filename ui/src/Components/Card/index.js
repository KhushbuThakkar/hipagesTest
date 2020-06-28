import React from "react";
import { Avatar, Button, Card, Divider } from "antd";
import { ActionItems } from "../../Views/Container/actionItems";

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
export default function CustomCard({ data, changeJobStatus }) {
  return (
    <Card>
      <CardHeader initial="b" />
      {data.contact_name}
      {data.created_at}
      <Divider />
      Job Id: {data.id}
      <Divider />
      {data.description}
      <Divider />
      <ActionItems jobId={data.id} onChangeStatus={changeJobStatus} />
    </Card>
  );
}
