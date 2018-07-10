import React from 'react';
import mapboxgl from 'mapbox-gl';
import {bbox,center, featureCollection} from '@turf/turf';
import { mapConfig } from './../config.js';
mapboxgl.accessToken = mapConfig.accessToken
class Application extends React.Component {
  map;
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
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

    //Load the comming source
    this.map.on('load', () => {
      this.map.addSource('geoFeatures', {
        type: 'geojson',
        data
      });

      this.map.addLayer({
        id: 'countries',
        type: 'fill',
        source: 'geoFeatures',
        'layout': {},
        'paint': {
          'fill-color': '#088',
          'fill-opacity': 0.8
        }
      });

    });
  }

  componentDidUpdate() {
    const { feature } = this.props;
    const bound = bbox(feature);
    this.map.fitBounds(bound,{padding:20});
    //create a popup
    const centerCoords = center(featureCollection([feature]));
    // console.log(centerCoords.geometry.coo);

    // new mapboxgl.Popup()
    //     .setLngLat(centerCoords)
    //     .setHTML(feature.properties)
    //     .addTo(this.map);
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className='mapContent' />
    );
  }
}
export default Application;
