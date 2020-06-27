import {
  GET_CAMPAIGNS_SUCCESS,
  GET_CAMPAIGNS_ERRORS,
  GET_CAMPAIGNS_LOADING,
} from "../Actions/types";

const initialState = {
  loading: false,
  campaigns: [],
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        loading: false,
        campaigns: action.payload,
      };

    case GET_CAMPAIGNS_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload.data,
      };

    case GET_CAMPAIGNS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
