import React, { Component } from 'react';
import SimpleTable from './components/table.js'
import Map from './components/map.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { displayHeaders } from './config.js';
import './App.css';
import data from './polygons.json'

class App extends Component {

  constructor() {
    super();
    this.state = {
      feature: null
    };
  }

  handleRowClick = (feature) => {
    this.setState({
      feature
    });
  }
  render() {
    const { feature } = this.state;
    console.log(feature)
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
              <SimpleTable
                data={data}
                headers={displayHeaders}
                onRowClick={this.handleRowClick}
              ></SimpleTable>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className='mapContent'>
              <Map data={data} feature={feature}></Map>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;
