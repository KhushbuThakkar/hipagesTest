import {
  GET_JOBS_SUCCESS,
  GET_JOBS_ERRORS,
  GET_JOBS_LOADING,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_ERRORS,
  CHANGE_STATUS_LOADING,
} from "../Actions/types";

const initialState = {
  loading: false,
  jobs: [],
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

    case CHANGE_STATUS_SUCCESS:
      return {
        ...state,
        status: {
          loading: false,
          data: action.payload.data,
        },
      };

    case CHANGE_STATUS_ERRORS:
      return {
        ...state,
        status: {
          loading: false,
          errors: action.payload.errors,
        },
      };

    case CHANGE_STATUS_LOADING:
      return {
        ...state,
        status: { loading: true },
      };

    default:
      return state;
  }
}
