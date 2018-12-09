import {

} from "./stateConstants.js";
import update from "immutability-helper";

const initialState = {
  meals: [],
  currentGrocery: {},
};

const reducers = function getAllCasesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducers;