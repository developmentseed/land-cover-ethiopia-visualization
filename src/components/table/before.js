import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import uuidv1 from 'uuid/v1';
import './styles.css'

class GeoFeature extends Component {

    constructor() {
        super();
        // this.state = {
        //     properties: null
        // }
    }


    renderHeaders = (headers) => {
        const renderHeaderColum = (hds) => (
            hds.map(header => (
                <div className='itemHeaders' key={uuidv1()}>{header}</div>
            ))
        );
        return (
            <div className='featureHeaderRow'>
                {renderHeaderColum(headers)}
            </div>
        )
    };

    renderProperties = (headers, geoProperties) => {
        console.log(headers)
        const renderColumn = (hds, properties) => (
            hds.map(header => (
                <div className='item' key={uuidv1()}>{properties[header]}</div>
            ))
        );
        return (<div className='featureRow'>
            {renderColumn(headers, geoProperties)}
        </div>);

    }
    render() {
        const { geoProperties, headers } = this.props;
        console.log(headers)
        return (
            <div>
                <div>
                    {this.renderHeaders(headers)}
                </div>
                <div>
                    {geoProperties ? this.renderProperties(headers, geoProperties) : <h2>No file as seelcted</h2>}
                </div>
            </div>
        );
    }
}

GeoFeature.propTypes = {
    geoProperties: PropTypes.object.isRequired,
    headers: PropTypes.array.isRequired
}

export default GeoFeature;