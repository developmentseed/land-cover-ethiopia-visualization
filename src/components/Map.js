import React from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { bbox, centroid, featureCollection } from '@turf/turf';
import _ from 'underscore';

import { mapConfig } from './../config.js';
mapboxgl.accessToken = mapConfig.accessToken

class ConnectedMap extends React.Component {
  map;
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 0,
      lat: 0,
      zoom: 1.5
    };
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


  loadFConMap = (data) => {
    if (this.map.getSource('geoFeatures')) {
      this.map.getSource('geoFeatures').setData(data);
    } else {
      //Data sources
      this.map.addSource('geoFeatures', {
        type: 'geojson',
        data: data
      });

      this.map.addSource('geoFeatures-highlight', {
        type: 'geojson',
        data: featureCollection([])
      });

      this.map.addSource('geoFeatures-labels', {
        type: 'geojson',
        data: {
          "type": "FeatureCollection",
          "features": []
        }
      });

      //Layers
      this.map.addLayer({
        id: 'polygons',
        type: 'fill',
        source: 'geoFeatures',
        'paint': {
          'fill-color': '#68ff95',
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
          'line-color': '#68ff95',
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
          "text-field": "{woreda}",
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


  componentDidUpdate() {
    const { feature, data } = this.props;
    //zoom the feature, because the feature was clicked on the table
    if (!_.isEmpty(feature)) {
      const bound = bbox(feature);
      this.map.fitBounds(bound);
      this.map.getSource('geoFeatures-highlight').setData(featureCollection([feature]));
      let point = centroid(feature, feature.properties);
      console.log(featureCollection([point]))
      this.map.getSource('geoFeatures-labels').setData(featureCollection([point]));
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

const mapStateToProps = state => {
  return { feature: state.feature };
};

const Map = connect(mapStateToProps)(ConnectedMap);

Map.propTypes = {
  data: PropTypes.object.isRequired
};

export default Map;