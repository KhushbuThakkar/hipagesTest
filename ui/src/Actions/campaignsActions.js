import axios from "axios";
import {
  GET_CAMPAIGNS_SUCCESS,
  GET_CAMPAIGNS_ERRORS,
  GET_CAMPAIGNS_LOADING,
} from "../Actions/types";

export const setCampaignsLoading = () => {
  return {
    type: GET_CAMPAIGNS_LOADING,
  };
};

export const getCampaigns = (searchText) => (dispatch) => {
  dispatch(setCampaignsLoading());

  axios
    .get(`/api/campaigns/${searchText ? searchText : ""}`)
    .then((res) => {
      dispatch({
        type: GET_CAMPAIGNS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_CAMPAIGNS_ERRORS,
        payload: err && err.response ? err.response.data : "",
      })
    );
};
