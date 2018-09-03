import React, { Component } from 'react';
import FCTable from './components/FCTable'
import Map from './components/Map.js';
import FeatureDetails from './components/FeatureDetails';
import ImportFromFile from './components/ImportFromFile'
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { displayHeaders } from './config.js';
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
      data: data, //Feture collection
      feature: null
    })
  }


  render() {
    const { feature, data } = this.state;
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={4}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Geojson Checking
              </Typography>
                <ImportFromFile handleFeatureCollection={this.handleFeatureCollection}></ImportFromFile>
              </Toolbar>
            </AppBar>
            <div className='tableContent'>
              <FCTable
                data={data} //this is passing ther Feture collection
                headers={displayHeaders}
                onRowClick={this.handleRowClick}
              ></FCTable>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className='mapContent'>
              <Map data={data} feature={feature}></Map>
            </div>
            <FeatureDetails feature={feature}></FeatureDetails>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;
