import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Local Components
import FCTable from './components/FCTable'
import Map from './components/Map.js';
import FeatureDetails from './components/FeatureDetails';
// import ImportFromFile from './components/ImportFromFile';
import MenuLayers from './components/MenuLayers';
import { propertiesToDisplay, appTitle } from './config.js';
import './App.css';
import woredas from './data/woredas';
class App extends Component {
  constructor() {
    super();
    this.state = {
      feature: null,
      data: woredas
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


