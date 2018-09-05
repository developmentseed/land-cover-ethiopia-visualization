//Layers
export const polygonStyle = {
    id: 'polygons',
    type: 'fill',
    source: 'geoFeatures',
    'paint': {
        'fill-color': '#ffffff',
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
        'line-color': '#ffffff',
        'line-width': 1,
        'line-opacity': .7
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
    "id": "text",
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

export const farmLandsStylePolygon = {
    'id': 'farmLandsPolygon',
    'type': 'fill',
    "source-layer": "finalConsiderFarms-1x895y",
    'source': {
        type: 'vector',
        url: 'mapbox://devseed.avjzyvlo'
    },
    'paint': {
        'fill-color': '#00ff2e',
        'fill-opacity': .2
    }
};

export const farmLandsStyleLine = {
    'id': 'farmLandsLine',
    'type': 'line',
    "source-layer": "finalConsiderFarms-1x895y",
    'source': {
        type: 'vector',
        url: 'mapbox://devseed.avjzyvlo'
    },
    layout: {
        'line-cap': 'round',
        'line-join': 'round'
    },
    paint: {
        'line-color': '#00ff2e',
        'line-width': 2,
        'line-opacity': .8
    }
};