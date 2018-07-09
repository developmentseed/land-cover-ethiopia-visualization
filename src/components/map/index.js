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
    // Display the coordinates
    // this.map.on('move', () => {
    //   const { lng, lat } = this.map.getCenter();
    //   this.setState({
    //     lng: lng.toFixed(4),
    //     lat: lat.toFixed(4),
    //     zoom: this.smap.getZoom().toFixed(2)
    //   });
    // });

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
    const { lng, lat, zoom } = this.state;
    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}

export default Application;
