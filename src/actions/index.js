import { SELECT_FEATURE, SELECT_LAYERS } from "../constants/action-types";
export const selectFeature = feature => (
    {
        type: SELECT_FEATURE,
        payload: feature
    }
);

export const selectLayer = layerToDisplay => (
    {
        type: SELECT_LAYERS,
        payload: layerToDisplay
    }
);