import { SELECT_FEATURE } from "../constants/action-types";

const initialState = {
  feature: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FEATURE:
      return { ...state, feature: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
