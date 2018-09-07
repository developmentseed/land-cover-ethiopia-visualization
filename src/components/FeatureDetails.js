import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = state => {
  return { feature: state.feature };
};

class ConnectedFeatureDetails extends Component {
  diplayProperties = feature => {
    const renderInvestor = investor => {
      return (
        <Card>
          <CardContent>
            <Typography component="h4">
              <strong>{investor.investor_name}</strong>
            </Typography>

            <Typography variant="caption">
              <span>Intended size: </span>
              <strong>{investor.intended_size}</strong>
            </Typography>

            <Typography variant="caption">
              <span>Contract size: </span>
              <strong>{investor.contract_size}</strong>
            </Typography>

            <Typography variant="caption">
              <span>Production size: </span>
              <strong>{investor.production_size}</strong>
            </Typography>

            <Typography variant="caption">
              <span>Crops: </span>
              <strong>{investor.crop}</strong>
            </Typography>
          </CardContent>
        </Card>
      );
    };

    const numInvestors = feature.properties.investors.length;
    return (
      <div>
        <div className="headerDetails">Investors in {feature.properties.woreda}</div>
        {!numInvestors ? (
          <div>There are no investors in this region!</div>
        ) : (
          feature.properties.investors.map(investor => {
            return <div key={uuidv1()}>{renderInvestor(investor)}</div>;
          })
        )}
      </div>
    );
  };

  render() {
    const feature = this.props.feature; //the feature is coming from redux, once it will be updated the render will trigger again
    return <div className="featureDetails">{_.isEmpty(feature) ? <div /> : this.diplayProperties(feature)}</div>;
  }
}

const FeatureDetails = connect(mapStateToProps)(ConnectedFeatureDetails);
export default FeatureDetails;
