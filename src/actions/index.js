import { SELECT_FEATURE } from "../constants/action-types";
export const selectFeature = feature => (
    {
        type: SELECT_FEATURE,
        payload: feature
    }
);