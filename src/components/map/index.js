import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

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
    // console.log(data)
    //Display map
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
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

  render() {
    // const { lng, lat, zoom } = this.state;
    return (
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom mapContent"/>
    );
  }
}
export default Application;
