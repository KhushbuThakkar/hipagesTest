import React from "react";
import { Button } from "antd";
import styles from "../../styles.css";

const CustomButton = ({ children, ...rest }) => {
  return (
    <Button {...rest} className="button">
      {children}
    </Button>
  );
};

export default CustomButton;
