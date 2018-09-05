export const mapConfig = {
    accessToken: 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q',
    style: 'mapbox://styles/devseed/cjlp9k7nr7ij02rlgerg2e8r2',
};

export const propertiesToDisplay = {
    "region": "Region",
    "woreda": "Woreda",
    "totalProductionInvestor": "Investors area",
    "number_farms_OSM": "Num mapped farms",
    "total_farms_area_OSM": "Area Mapped in OSM"
};
export const appTitle = 'Ethiopia woredas - Investors'

export const rasterLayersToDisplay = {
    sentinel2018: {
        id: 'sentinel2018',
        name: 'Sentinel 2018',
        source: 'https://earthengine.googleapis.com/map/e53ebb9f25ad927569bc68bad05c4787/{z}/{x}/{y}?token=1801c48dd6accf17b8834e75d473a300',
        status: false
    },
    sentinel2017: {
        id: 'sentinel2017',
        name: 'Sentinel 2017',
        source: 'https://earthengine.googleapis.com/map/e53ebb9f25ad927569bc68bad05c4787/{z}/{x}/{y}?token=1801c48dd6accf17b8834e75d473a300',
        status: false
    }
};
