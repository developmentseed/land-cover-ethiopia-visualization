import React from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { bbox, centroid, featureCollection } from '@turf/turf';
import _ from 'underscore';
import { mapConfig } from './../config';
import { polygonStyle, LineStyle, LineStyleHighlight, textStyle, farmLandsStyle } from './../constants/mapStyle';
mapboxgl.accessToken = mapConfig.accessToken



class ConnectedMap extends React.Component {
  map;
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 40.354,
      lat: 8.391,
      zoom: 5
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
      this.loadStyle(data);
    });
  }

  loadStyle = (data) => {
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
        data: featureCollection([])
      });

      //Layers
      // this.map.addLayer(sentinelStyle,'polygon');

      this.map.addLayer(polygonStyle);
      this.map.addLayer(LineStyle);
      this.map.addLayer(LineStyleHighlight);
      this.map.addLayer(textStyle);
      // this.map.addLayer(farmLandsStyle);

    }
  }


  componentDidUpdate() {
    const { activeLayers, feature, data } = this.props;
    //zoom the feature, because the feature was clicked on the table
    if (!_.isEmpty(feature)) {
      const bound = bbox(feature);
      this.map.fitBounds(bound);
      this.map.getSource('geoFeatures-highlight').setData(featureCollection([feature]));
      let point = centroid(feature, feature.properties);
      this.map.getSource('geoFeatures-labels').setData(featureCollection([point]));
    }
    // display the layer
    if (data) {
      this.loadStyle(data);
    }
    console.log('mapppppppppp')
    console.log(activeLayers);
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className='mapContent' />
    );
  }
}

const mapStateToProps = state => {
  return {
    feature: state.feature,
    activeLayers: state.activeLayers
  };
};

const Map = connect(mapStateToProps)(ConnectedMap);

Map.propTypes = {
  data: PropTypes.object.isRequired
};

export default Map;