import React, { Component } from 'react';
import _ from 'underscore';
import './styles.css';
import uuidv1 from 'uuid/v1';
//styless
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

        const renderInvestor = (investor) => {
            console.log(investor)
            return (
                <Card>
                    <CardContent>
              
                        <Typography  component="h4">
                            <strong>{investor.investor_name}</strong>
                        </Typography>

                        <Typography>
                            <span>Intended size: </span>{investor.intended_size}
                        </Typography>

                        <Typography>
                            <span>Contract size: </span>{investor.contract_size}
                         </Typography>

                        <Typography>
                            <span>Production size: </span>{investor.production_size}
                        </Typography>

                        <Typography>
                        <span>Crops: </span>{investor.crop}
                        </Typography>
                    </CardContent>
                </Card>
            );
        }
        return (
            <div>
                <h3>Investors</h3>
                {feature.properties.investors.map(investor => {
                    return (
                        <div key={uuidv1()} >
                            {renderInvestor(investor)}
                        </div>
                    );
                })}
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