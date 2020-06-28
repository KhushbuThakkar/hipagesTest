import React from "react";
import Button from "../../Components/Button";

export const ActionItems = ({ jobId, onChangeStatus }) => {
  return (
    <>
      <Button type="primary" onClick={() => onChangeStatus(jobId, "approved")}>
        Accept
      </Button>
      <Button type="" onClick={() => onChangeStatus(jobId, "rejected")}>
        Reject
      </Button>
    </>
  );
};
