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
        source: 'https://earthengine.googleapis.com/map/83dd4a42153df09e334a0167c20c2156/{z}/{x}/{y}?token=d2609764848283a8bea81d0ebc2c42aa',
        status: false
    },
    {
        id: 'sentinelMiddle',
        name: ' Sentinel: 2017/11/01 - 2018/03/31',
        source: 'https://earthengine.googleapis.com/map/1d89ae073d73769b842bd6707b72c58c/{z}/{x}/{y}?token=46bd0b303d4ad3dfe0a755c37544b696',
        status: false
    },
    {
        id: 'sentinel2017',
        name: 'Sentinel: 2017/05/01 - 2017/09/30',
        source: 'https://earthengine.googleapis.com/map/e361243e643783c6bc70f1a88cc62f50/{z}/{x}/{y}?token=62b75f44a68e6b0ff17c51d4e2429a76',

        status: false
    },{
        id: 'sentinel2016',
        name: 'Sentinel: 2016/06/01 - 2016/09/30',
        source: 'https://earthengine.googleapis.com/map/f240f6651d1e34fad75b17f39aa523dd/{z}/{x}/{y}?token=a4fef9143881c357ad5c73c578ed5472',
        status: false
    }
];
