import {
  GET_JOBS_SUCCESS,
  GET_JOBS_ERRORS,
  GET_JOBS_LOADING,
} from "../Actions/types";

const initialState = {
  loading: false,
  teams: [],
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload.jobs,
      };

    case GET_JOBS_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
