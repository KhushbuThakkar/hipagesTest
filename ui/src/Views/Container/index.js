import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Layout } from "antd";
import { PropTypes } from "prop-types";
import { getJobs, changeJobStatus } from "../../Actions/jobActions";

import Card from "../../Components/Card";

const { Header, Content, Sider } = Layout;

const Container = ({ selected, ...rest }) => {
  const { getJobs, changeJobStatus } = rest;
  const [jobs, setJobs] = useState([]);
  const renderInvited = () => {};

  useEffect(() => {
    getJobs(selected);
  }, [getJobs, selected]);

  useEffect(() => {
    setJobs(rest.jobs.jobs || []);
    // setloading(props.campaigns.loading);
  }, [rest.jobs]);

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
        {jobs &&
          jobs.map((singleCard, key) => (
            <Card
              data={singleCard}
              key={key}
              changeJobStatus={changeJobStatus}
            />
          ))}
      </Content>
    </Layout>
  );
};

Container.propTypes = {
  getJobs: PropTypes.func.isRequired,
  changeJobStatus: PropTypes.func.isRequired,

  jobs: PropTypes.shape({
    jobs: PropTypes.array,
    loading: PropTypes.bool,
    errors: PropTypes.objectOf(PropTypes.any),
  }),
};

Container.defaultProps = {
  jobs: {},
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs || {},
  };
};

export default connect(mapStateToProps, { getJobs, changeJobStatus })(
  Container
);
