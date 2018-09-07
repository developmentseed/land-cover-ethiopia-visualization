import { SELECT_FEATURE, SELECT_LAYERS } from '../constants/action-types';
import _ from 'underscore';

const initialState = {
  feature: {},
  layerSelected: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FEATURE:
      return { ...state, feature: action.payload };
    case SELECT_LAYERS:
      return { ...state, layerSelected: Object.assign({}, action.payload) };
    default:
      return state;
  }
};
export default rootReducer;
