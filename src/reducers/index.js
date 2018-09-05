import { SELECT_FEATURE, SELECT_LAYERS } from "../constants/action-types";
import _ from 'underscore';

const initialState = {
  feature: {},
  activeLayers: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FEATURE:
      return { ...state, feature: action.payload };
    case SELECT_LAYERS:
      const key = _.keys(action.payload)[0];
      const value = _.values(action.payload)[0];
      const newObjState = {};
      newObjState[key] = value
      return Object.assign({}, state, { activeLayers: newObjState });
    default:
      return state;
  }
};
export default rootReducer;
