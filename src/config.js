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

export const rasterLayersToDisplay = [
    {
        id: 'sentinel2017',
        name: 'Sentinel: 2017/05/01 - 2017/09/30',
        source: 'https://earthengine.googleapis.com/map/2c5f9592b08207ea74b10b4a156c5c6c/{z}/{x}/{y}?token=a771b3eb060d77a509dee1a2cfd779fb',
        status: false
    },{
        id: 'sentinel2016',
        name: 'Sentinel: 2016/06/01 - 2016/09/30',
        source: 'https://earthengine.googleapis.com/map/0f476a6fcb1be3b2f5781ab25ce1edc0/{z}/{x}/{y}?token=c38dd0b84797bb0b2baf6f1b2e59afec',
        status: false
    },{
        id: 'sentinelMiddle',
        name: ' Sentinel: 2017/11/01 - 2018/03/31',
        source: 'https://earthengine.googleapis.com/map/613d47956d1b415f32f917f21830f2b4/{z}/{x}/{y}?token=97c92f482dfd8e4d2a4612c997aea77f',
        status: false
    },{
        id: 'date-2018-05-01-2018-08-04',
        name: 'Sentinel: 2018/05/01 - 2018/08/04',
        source: 'https://earthengine.googleapis.com/map/7a942cc0fda8957be96ef7937deb0913/{z}/{x}/{y}?token=61c52718df18baf3a20a25070ec1c060',
        status: false
    }
];
