import axios from "axios";
import {
  GET_TEAMS_SUCCESS,
  GET_TEAMS_ERRORS,
  GET_TEAMS_LOADING
} from "../Actions/types";

export const setTeamsLoading = () => {
  return {
    type: GET_TEAMS_LOADING
  };
};

export const getTeams = () => dispatch => {
  dispatch(setTeamsLoading());

  axios
    .get(`/api/teams`)
    .then(res => {
      dispatch({
        type: GET_TEAMS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_TEAMS_ERRORS,
        payload: err && err.response ? err.response.data : ""
      })
    );
};
