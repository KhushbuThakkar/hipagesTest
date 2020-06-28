import React from "react";
import { Avatar, Card, Divider, Descriptions, Typography } from "antd";
import { ActionItems } from "../../Views/Container/actionItems";
import JobIcon from "../Svgs/JobIcon";
import styles from "../../styles.css";
import LocationIcon from "../Svgs/locationIcon";
import PhoneIcon from "../Svgs/PhoneIcon";
import { formatDate, formatPrice } from "../../Utils/format";
import MailIcon from "../Svgs/MailIcon";
const { Text, Title } = Typography;

const CardHeader = ({ initial, data }) => {
  const fname = data.contact_name.split(" ")[0] || "";
  return (
    <div className="card header">
      <Avatar className="card avatar" size="large">
        {data.contact_name.charAt(0)}
      </Avatar>
      <div>
        <Text strong className="card header text">
          {data.status === "new" ? fname : data.contact_name}
        </Text>
        <Text strong className="card header subtext">
          {formatDate(data.created_at)}
        </Text>
      </div>
    </div>
  );
};

const CustomCard = ({ data, changeJobStatus }) => {
  const renderPrice = () => (
    <Text className="price">{formatPrice(data.price)} Lead Invitation</Text>
  );

  const isNew = data.status === "new";

  return (
    <Card>
      <CardHeader initial="b" data={data} />

      <Divider />

      <div className="cardRow second">
        <div className="category">
          <LocationIcon size={20} />
          {data.location}
        </div>
        <div className="category">
          <JobIcon size={20} />
          {data.category}
        </div>
        <div className="">Job Id: {data.id}</div>
        {!isNew && <div>{renderPrice()}</div>}
      </div>

      <Divider />

      <div className="cardRow third">
        <div className="category">
          <PhoneIcon size={20} />
          {data.contact_phone}
        </div>
        <div className="category">
          <MailIcon size={20} />
          {data.contact_email}
        </div>
      </div>
      <div>{data.description}</div>

      {isNew && (
        <>
          <Divider />
          <div className="action">
            <ActionItems jobId={data.id} onChangeStatus={changeJobStatus} />
            <Text className="price">{renderPrice()}</Text>
          </div>
        </>
      )}
    </Card>
  );
};

export default CustomCard;
