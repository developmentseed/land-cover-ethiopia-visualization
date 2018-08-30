import React from 'react';
import mapboxgl from 'mapbox-gl';
import { bbox, featureCollection, centroid } from '@turf/turf';
import { mapConfig } from './../config.js';
mapboxgl.accessToken = mapConfig.accessToken
class Application extends React.Component {
  map;
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 0,
      lat: 0,
      zoom: 1.5
    };
  }

  loadFConMap = (data) => {
    if (this.map.getSource('geoFeatures')) {
      this.map.getSource('geoFeatures').setData(data);
    } else {
      // Sources
      this.map.addSource('geoFeatures', {
        type: 'geojson',
        data
      });

      this.map.addSource('geoFeatures-highlight', {
        type: 'geojson',
        data: featureCollection([])
      });

      this.map.addSource('geoFeatures-labels', {
        type: 'geojson',
        data: featureCollection([])
      });

      // Layers
      this.map.addLayer({
        id: 'polygons',
        type: 'fill',
        source: 'geoFeatures',
        'paint': {
          'fill-color': '#d7fcc4',
          'fill-opacity': .1
        }
      });
      this.map.addLayer({
        id: 'lines',
        type: 'line',
        source: 'geoFeatures',
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#d7fcc4',
          'line-width': 2,
          'line-opacity': .8
        }
      });

      this.map.addLayer({
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
      });

      this.map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": 'geoFeatures-labels',
        "layout": {
          "text-field": "{WOREDANAME}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top",
          "text-size": 15
        },
        "paint": {
          "text-color": "#eeff00"
        }
      });
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const { data } = this.props;
    //Display map
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: mapConfig.style,
      center: [lng, lat],
      zoom
    });

    //Load the data
    this.map.on('load', () => {
      this.loadFConMap(data);
    });
  }

  componentDidUpdate() {
    const { feature, data } = this.props;
    //zoom the feature
    if (feature) {
      const bound = bbox(feature);
      this.map.fitBounds(bound);
      this.map.getSource('geoFeatures-highlight').setData(featureCollection([feature]));
      this.map.getSource('geoFeatures-labels').setData(featureCollection([centroid(feature, feature.properties)]));

    }
    // display the layer
    if (data) {
      this.loadFConMap(data);
    }
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className='mapContent' />
    );
  }
}
export default Application;
