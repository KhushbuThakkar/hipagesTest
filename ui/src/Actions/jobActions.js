import axios from "axios";
import {
  GET_JOBS_SUCCESS,
  GET_JOBS_ERRORS,
  GET_JOBS_LOADING,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_ERRORS,
  CHANGE_STATUS_LOADING,
} from "./types";

export const setJobsLoading = () => {
  return {
    type: GET_JOBS_LOADING,
  };
};

export const getJobs = (status) => (dispatch) => {
  dispatch(setJobsLoading());

  axios
    .get(`jobs/${status ? status : ""}`)
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

export const setJobStatusLoading = () => {
  return {
    type: CHANGE_STATUS_LOADING,
  };
};

export const changeJobStatus = (jobId, status) => (dispatch) => {
  dispatch(setJobStatusLoading());

  axios
    .put(`job/${jobId}`, { status }, { "Content-Type": "multipart/form-data" })
    .then((res) => {
      dispatch({ type: CHANGE_STATUS_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({
        type: CHANGE_STATUS_ERRORS,
        payload: err && err.response ? err.response.data : "",
      })
    );
};
