import { combineReducers } from "redux";
import campaignsReducer from "./campaignsReducer";
import teamsReducer from "./teamsReducer";

export default combineReducers({
  campaigns: campaignsReducer,
  teams: teamsReducer
});
