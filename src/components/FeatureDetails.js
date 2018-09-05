import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from "react-redux";
import uuidv1 from 'uuid/v1';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = state => {
    return { feature: state.feature };
};

class ConnectedFeatureDetails extends Component {
    diplayProperties = (feature) => {
        const renderInvestor = (investor) => {
            return (
                <Card>
                    <CardContent>
                        <Typography component="h4">
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
        const feature = this.props.feature; //the feature is coming from redux, once it will be updated the render will trigger again 
        return (
            <div className='featureDetails'>
                {_.isEmpty(feature) ? <div></div> : this.diplayProperties(feature)}
            </div>
        );
    }
}

const FeatureDetails = connect(mapStateToProps)(ConnectedFeatureDetails);
export default FeatureDetails;