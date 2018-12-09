import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

import reducers from "./state";

export default function configureStore(initialState) {
  return createStore(
    reducers,
    initialState
  );
}