import React from 'react';
import mapboxgl from 'mapbox-gl';
import { bbox, center, featureCollection } from '@turf/turf';
import { mapConfig } from './../config.js';
mapboxgl.accessToken = mapConfig.accessToken
class ApplicationMap extends React.Component {
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
      this.map.addSource('geoFeatures', {
        type: 'geojson',
        data
      });
    }
    this.map.addLayer({
      id: 'polygons',
      type: 'fill',
      source: 'geoFeatures',
      'paint': {
        'fill-color': '#3fff00',
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
        'line-color': '#3fff00',
        'line-width': 2,
        'line-opacity': .8
      }
    });
  }
  //is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here.
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
  // Una vez cargado el mapas
  componentDidUpdate() {
    const { feature, data } = this.props;
    //zoom the feature
    if (feature) {
      const bound = bbox(feature);
      this.map.fitBounds(bound);
    }
    // display the layer
    if(data){
      this.loadFConMap(data);
    }
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className='mapContent' />
    );
  }
}
export default ApplicationMap;
