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
        source: 'https://earthengine.googleapis.com/map/3cdac91cbde6a862fff4ac821fa8b938/{zoom}/{x}/{y}?token=cb6a76367f4b74762121694092301df5',
        status: false
    },
    {
        id: 'sentinelMiddle',
        name: ' Sentinel: 2017/11/01 - 2018/03/31',
        source: 'https://earthengine.googleapis.com/map/64afac248dfaf39b0f68266907599989/{zoom}/{x}/{y}?token=65a4f6ee0e031b17a8e08845ee2a2b6c',
        status: false
    },
    {
        id: 'sentinel2017',
        name: 'Sentinel: 2017/05/01 - 2017/09/30',
        source: 'https://earthengine.googleapis.com/map/ce649abdce2dd9fd5c43d417e2a1d460/{zoom}/{x}/{y}?token=aa94b4d8a85ae14a276f852c1dcfd819',
        status: false
    },{
        id: 'sentinel2016',
        name: 'Sentinel: 2016/06/01 - 2016/09/30',
        source: 'https://earthengine.googleapis.com/map/ce649abdce2dd9fd5c43d417e2a1d460/{zoom}/{x}/{y}?token=aa94b4d8a85ae14a276f852c1dcfd819',
        status: false
    }
];
