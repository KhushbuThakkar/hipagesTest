import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import { logger } from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};
const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  compose(composeWithDevTools(applyMiddleware(...middleware)))
);

export default store;
