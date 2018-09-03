import React, { Component } from 'react';
import _ from 'underscore';
import './styles.css';

class FeatureDetails extends Component {
    diplayProperties = (feature) => {
        const props = (keys, properties) => (
            keys.map(key => (
                <div className='rowPropertie'>
                <div className='columnKeys'>{key}:</div><div className='columnValues'>{properties[key]}</div>
                </div>
            ))
        )
        return (
            <div>
                <h3>Properties</h3>
            {props(_.keys(feature.properties), feature.properties)}
            </div>
        );
    }

    render() {
        const { feature } = this.props;
        return (
            <div className='featureDetails'>
                {feature ? this.diplayProperties(feature) : <h1>select</h1>}
            </div>
        );
    }
}

export default FeatureDetails;