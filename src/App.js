import React, { Component } from 'react';
import SimpleTable from './components/table'
import Map from './components/map';
import logo from './logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import _ from 'underscore';
import './App.css';
import data from './polygons.json'

console.log(data)
const geoProperties = [{
  "@id": "597903438",
  "boundary": "special_economic_zone",
  "name": "Maloy Batuta Trans Kalimantan Special Economic Zone",
  "landuse": null,
  "source": null,
  "website": null,
  "sez_Region": "EAP",
  "sez_Country": "Indonesia",
  "sez_Zone ID": "IDN42",
  "sez_Zone": "Maloy Batuta Trans Kalimantan Special Economic Zone",
  "sez_Operating start year": "2014",
  "sez_Size (ha)": 557,
  "sez_Size OSM (ha)": 428,
  "sez_Status": "New "
}, {
  "@id": "597903438",
  "boundary": "special_economic_zone",
  "name": "Maloy Batuta Trans Kalimantan Special Economic Zone",
  "landuse": null,
  "source": null,
  "website": null,
  "sez_Region": "EAP",
  "sez_Country": "Indonesia",
  "sez_Zone ID": "IDN42",
  "sez_Zone": "Maloy Batuta Trans Kalimantan Special Economic Zone",
  "sez_Operating start year": "2014",
  "sez_Size (ha)": 557,
  "sez_Size OSM (ha)": 428,
  "sez_Status": "New "
}]

const displayHeaders = ['@id', 'name', 'sez_Region', 'sez_Country', 'sez_Zone ID', 'sez_Size', 'boundary']
class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Geojson Checking
              </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className='tableContent'>
              <SimpleTable data={geoProperties} headers={_.intersection(_.keys(geoProperties[0]), displayHeaders)}></SimpleTable>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={5}>
            <div id='app'></div>
              <Map data={data}></Map>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
