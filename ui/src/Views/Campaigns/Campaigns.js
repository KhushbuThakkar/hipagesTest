import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Flex, Text, Button } from "rebass";
import { PropTypes } from "prop-types";

import Box from "../../Components/Box/Box";
import { getCampaigns } from "../../Actions/campaignsActions";
import { getTeams } from "../../Actions/teamActions";

import Header from "../../Components/Header/Header";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Container from "../../Components/Container/Container";
import Loader from "../../Components/Loader/Loader";

const Campaigns = (props) => {
  const [campaigns, setcampaigns] = useState([]);
  const [teams, setteams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const { getCampaigns, getTeams } = props;
  // const InitialPropA = useRef(campaigns);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    getCampaigns();
    getTeams();
  }, [getCampaigns, getTeams]);

  useEffect(() => {
    setcampaigns(props.campaigns.campaigns);
    setloading(props.campaigns.loading);
  }, [props.campaigns]);

  useEffect(() => {
    setteams(props.teams.teams);
    // setloading(props.campaigns.loading);
  }, [props.teams]);

  const filterByText = (SearchText) => {
    setSelectedTeam("");
    props.getCampaigns(SearchText);
  };

  const filterByName = (name, selected) => {
    props.getCampaigns(name);
    setSelectedTeam(selected);
  };

  const renderTeams = () => {
    return (
      teams &&
      teams.map((team, key) => {
        return (
          <Button
            variant={selectedTeam === key ? "primary" : "outline"}
            mr={2}
            onClick={() => filterByName(team.name, key)}
          >
            {team.name}
          </Button>
        );
      })
    );
  };
  const renderCampaigns = () => {
    if (campaigns.length === 0) {
      return (
        <Text p={1} color="secondary">
          No Records Found
        </Text>
      );
    }
    return campaigns.map((campaign) => {
      return (
        <Box px={2} py={2} width={1 / 2}>
          <Box px={2} py={2} bg="muted">
            <Text p={1} color="secondary" fontSize={3}>
              {campaign.name}
            </Text>
            <Text p={1} color="primary">
              {campaign.team.name}
            </Text>
          </Box>
        </Box>
      );
    });
  };
  return (
    <>
      <Header text="Campaigns"></Header>
      <Container>
        <SearchBox onSearch={filterByText} />
        <Flex>{renderTeams()}</Flex>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Flex flexWrap="wrap" mx={-2}>
              {renderCampaigns()}
            </Flex>
          </>
        )}
      </Container>
    </>
  );
};

Campaigns.propTypes = {
  getCampaigns: PropTypes.func.isRequired,
  getTeams: PropTypes.func.isRequired,
  teams: PropTypes.shape({
    teams: PropTypes.array,
    loading: PropTypes.bool,
    errors: PropTypes.objectOf(PropTypes.any),
  }),
  campaigns: PropTypes.shape({
    campaigns: PropTypes.array,
    loading: PropTypes.bool,
    errors: PropTypes.objectOf(PropTypes.any),
  }),
};

Campaigns.defaultProps = {
  teams: {},
  campaigns: {},
};

const mapStateToProps = (state) => {
  return {
    campaigns: state.campaigns || {},
    teams: state.teams || {},
  };
};

export default connect(mapStateToProps, { getCampaigns, getTeams })(Campaigns);
