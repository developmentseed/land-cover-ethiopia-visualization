export const mapConfig = {
    accessToken: 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q',
    style: 'mapbox://styles/devseed/cjlp9k7nr7ij02rlgerg2e8r2',
};

export const propertiesToDisplay = {
    "region": "Region",
    "woreda": "Woreda",
    "totalProductionInvestor": "Investor production (ha)",
    "number_farms_OSM": "Num mapped farms",
    "total_farms_area_OSM": "Area mapped in OSM (ha)"
};
export const appTitle = 'Ethiopia woredas - Investors'

export const rasterLayersToDisplay = [
    {
        id: 'esri-world-imagery',
        name: 'Esri World Imagery',
        source: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        status: true
    },
    {
        id: 'date-2018-05-01-2018-08-04',
        name: 'Sentinel: 2018/05/01 - 2018/08/04',
        source: 'https://earthengine.googleapis.com/map/8c4bed5c9ba4f9e76fb51cc237829947/{z}/{x}/{y}?token=a4ad8f478187192a746826911c027c2e',
        status: false
    },
    {
        id: 'sentinelMiddle',
        name: ' Sentinel: 2017/11/01 - 2018/03/31',
        source: 'https://earthengine.googleapis.com/map/e950e9ad1a1f27ea2a42f3140555aa33/{z}/{x}/{y}?token=e2b549d6345b9c11090710af3a4e48b0',
        status: false
    },
    {
        id: 'sentinel2017',
        name: 'Sentinel: 2017/05/01 - 2017/09/30',
        source: 'https://earthengine.googleapis.com/map/dc1ff7810d4f81e7ea0dba92a7bbf2b5/{z}/{x}/{y}?token=54e20ccfd952ce863fe7a9963633dc3e',

        status: false
    },{
        id: 'sentinel2016',
        name: 'Sentinel: 2016/06/01 - 2016/09/30',
        source: 'https://earthengine.googleapis.com/map/7273432b9010f209a6d0fa312c287019/{z}/{x}/{y}?token=08c830f1bccb77c327daf2e146cee8f1',
        status: false
    }
];
