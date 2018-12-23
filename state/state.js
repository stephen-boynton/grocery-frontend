import {
  GET_ALL_MEALS
} from "./stateConstants.js";
import update from "immutability-helper";

const initialState = {
  meals: [],
  currentGrocery: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;