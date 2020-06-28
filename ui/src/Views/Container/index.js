import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Layout, Empty } from "antd";
import { PropTypes } from "prop-types";
import { getJobs, changeJobStatus } from "../../Actions/jobActions";

import Card from "../../Components/Card";

const { Header, Content, Sider } = Layout;

const Container = ({ selected, ...rest }) => {
  const { getJobs, changeJobStatus, statusData, jobsData } = rest;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs(selected);
  }, [selected]);

  useEffect(() => {
    getJobs(selected);
  }, [statusData.data]);

  useEffect(() => {
    setJobs(jobsData || []);
  }, [jobsData]);

  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      {jobs && jobs.length === 0 ? (
        <div className="full-height">
          <Empty
            description={false}
            description={<span>No Records Found</span>}
          />
        </div>
      ) : (
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
      )}
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
    jobsData: state.jobs.jobs || {},
    statusData: state.jobs.status || {},
  };
};

export default connect(mapStateToProps, { getJobs, changeJobStatus })(
  Container
);
