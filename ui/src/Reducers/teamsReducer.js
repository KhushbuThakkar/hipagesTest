import {
  GET_TEAMS_SUCCESS,
  GET_TEAMS_ERRORS,
  GET_TEAMS_LOADING,
} from "../Actions/types";

const initialState = {
  loading: false,
  teams: [],
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: action.payload,
      };

    case GET_TEAMS_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload.data,
      };

    case GET_TEAMS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
