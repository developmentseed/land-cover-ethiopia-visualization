//Layers
export const polygonStyle = {
    id: 'polygons',
    type: 'fill',
    source: 'geoFeatures',
    'paint': {
        'fill-color': '#68ff95',
        'fill-opacity': .1
    }
};

export const LineStyle = {
    id: 'lines',
    type: 'line',
    source: 'geoFeatures',
    layout: {
        'line-cap': 'round',
        'line-join': 'round'
    },
    paint: {
        'line-color': '#68ff95',
        'line-width': 2,
        'line-opacity': .8
    }
};

export const LineStyleHighlight = {
    id: 'lines-highlight',
    type: 'line',
    source: 'geoFeatures-highlight',
    layout: {
        'line-cap': 'round',
        'line-join': 'round'
    },
    paint: {
        'line-color': '#eeff00',
        'line-width': 10,
        'line-opacity': .4
    }
};

export const textStyle = {
    "id": "points",
    "type": "symbol",
    "source": 'geoFeatures-labels',
    "layout": {
        "text-field": "{woreda}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top",
        "text-size": 15
    },
    "paint": {
        "text-color": "#eeff00"
    }
};



export const farmLandsStyle ={
    'id': 'farmLands',
    'type': 'fill',
    'source': {
        type: 'vector',
        url: 'mapbox://styles/devseed/cjlpcpcq97yxz2rk4evjc8wri'
    },
    layout: {
        'line-cap': 'round',
        'line-join': 'round'
    },
    paint: {
        'line-color': '#693bbb',
        'line-width': 2,
        'line-opacity': .8
    }
};

// export const sentinelStyle={
//     'id': 'sentinel',
//     'type': 'raster',
//     'source': {
//         'type': 'raster',
//         'tiles': [
//             'https://earthengine.googleapis.com/map/e53ebb9f25ad927569bc68bad05c4787/{z}/{x}/{y}?token=1801c48dd6accf17b8834e75d473a300'
//         ],
//         'tileSize': 256
//     },
//     'paint': {}
// }