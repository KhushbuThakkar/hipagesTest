import axios from "axios";
import { GET_JOBS_SUCCESS, GET_JOBS_ERRORS, GET_JOBS_LOADING } from "./types";

export const setJobsLoading = () => {
  return {
    type: GET_JOBS_LOADING,
  };
};

export const getJobs = (searchText) => (dispatch) => {
  dispatch(setJobsLoading());

  axios
    .get(`jobs/${searchText ? searchText : ""}`)
    .then((res) => {
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_JOBS_ERRORS,
        payload: err && err.response ? err.response.data : "",
      })
    );
};
