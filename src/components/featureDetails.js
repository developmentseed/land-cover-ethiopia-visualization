import React, { Component } from 'react';
import _ from 'underscore';
import './styles.css';

class FeatureDetails extends Component {
    // diplayProperties = (feature) => {
    //     const props = (keys, properties) => (
    //         keys.map(key => (
    //             <div className='rowPropertie'>
    //             <div className='columnKeys'>{key}:</div><div className='columnValues'>{properties[key]}</div>
    //             </div>
    //         ))
    //     )
    //     return (
    //         <div>
    //             <h3>Properties</h3>
    //         {props(_.keys(feature.properties), feature.properties)}
    //         </div>
    //     );
    // }



    diplayProperties = (feature) => {

        const displayProps = (properties) => {
            console.log(properties)
            // _.keys(feature.properties),

            return (
                <div>
                    <strong>
                        {properties.WOREDANAME}
                    </strong>
                    
                    <div>
                        <span>Total area Inversores: </span>{properties.area_ha}
                    </div>
                    <div>
                        <span>Total area OSM : </span>{properties.area_total_farms}
                    </div>

                </div>
                );
        }

        return (
            <div>
                {/* <h3>Properties</h3> */}
                {displayProps(feature.properties)}
            </div>
        );
    }

    render() {
        const { feature } = this.props;
        return (
            <div className='featureDetails'>
                {feature ? this.diplayProperties(feature) : <h3>:</h3>}
            </div>
        );
    }
}

export default FeatureDetails;