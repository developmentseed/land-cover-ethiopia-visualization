import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

// Local Components
import FCTable from './components/FCTable'
import Map from './components/Map.js';
import FeatureDetails from './components/FeatureDetails';
// import ImportFromFile from './components/ImportFromFile';
import MenuLayers from './components/MenuLayers';

import { propertiesToDisplay, appTitle } from './config.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      feature: null,
      data: {
        type: 'FeatureCollection',
        features: []
      }
    };
  }

  handleRowClick = (feature) => {
    this.setState({
      feature
    });
  }

  handleFeatureCollection = (data) => {
    this.setState({
      data: data, 
      feature: null
    })
  }

  componentDidMount() {
    axios.get(`https://gist.githubusercontent.com/karitotp/298a3193dc27b67518a0f1b84600f523/raw/ec9b4ea58504387c0f33ecf6876f95f6248f8139/woredas_investors.geojson`)
      .then(res => {
        this.setState({
          data: res.data,
          feature: null
        })
      })
  }


  render() {
    const { data } = this.state;
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={4}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography color="inherit">
                 {appTitle}
              </Typography>
              </Toolbar>
            </AppBar>
            <div className='tableContent'>
              <FCTable
                data={data}
                propertiesToDisplay={propertiesToDisplay}
              ></FCTable>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className='mapContent'>
              <Map data={data}></Map>
            </div>
            <MenuLayers />
            <FeatureDetails ></FeatureDetails>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;


