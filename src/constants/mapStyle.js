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
