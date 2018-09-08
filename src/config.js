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
        source: 'https://earthengine.googleapis.com/map/8182e7779e7732b96e22d5abd48161e1/{z}/{x}/{y}?token=cb8479766d72ad4e06b94f37a096e010',
        status: false
    },
    {
        id: 'sentinelMiddle',
        name: ' Sentinel: 2017/11/01 - 2018/03/31',
        source: 'https://earthengine.googleapis.com/map/f226dc285f652abff18f09c052019af0/{z}/{x}/{y}?token=746176ec73671e8155a932997f2fb235',
        status: false
    },
    {
        id: 'sentinel2017',
        name: 'Sentinel: 2017/05/01 - 2017/09/30',
        source: 'https://earthengine.googleapis.com/map/4fc2ee69fe82cf41ea0362504fac7c80/{z}/{x}/{y}?token=ff1d5563a4bf1e2e8cd41a98e9c187fb',

        status: false
    },{
        id: 'sentinel2016',
        name: 'Sentinel: 2016/06/01 - 2016/09/30',
        source: 'https://earthengine.googleapis.com/map/94bb2ea1a7b582e311fae7485ca30384/{z}/{x}/{y}?token=19b7cfd3cd793cba649aeacfee80985b',
        status: false
    }
];
