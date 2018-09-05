import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import uuidv1 from 'uuid/v1';
import _ from 'underscore';
import { selectFeature } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        selectFeature: feature => dispatch(selectFeature(feature))
    };
};

class ConnectedFCTable extends Component {

    featureSelected = (feature) => {
        this.props.selectFeature(feature);
    }

    renderHeaders = (propertiesToDisplay) => {
        const cells = (hds) => (
            hds.map(header => (
                <TableCell key={uuidv1()}>{header}</TableCell>
            ))
        );
        return (
            <TableHead className='headerBackground'>
                <TableRow>
                    {cells(_.values(propertiesToDisplay))}
                </TableRow>
            </TableHead>
        )
    };

    renderBodyRows = () => {
        const { propertiesToDisplay, data } = this.props;
        const headers = _.keys(propertiesToDisplay);
        const renderColumn = (hds, feature) => (
            hds.map(header => (
                <TableCell key={uuidv1()}>
                    <div > {feature.properties[header]} </div>
                </TableCell>
            ))
        );

        return (
            <TableBody>
                {data.features.map(feature => {
                    return (
                        <TableRow key={uuidv1()} onClick={() => this.featureSelected(feature)} >
                            {renderColumn(headers, feature)}
                        </TableRow>
                    );
                })}
            </TableBody>);
    }

    render() {
        const { propertiesToDisplay } = this.props;
        return (
            <Table className='table'>
                {this.renderHeaders(propertiesToDisplay)}
                {this.renderBodyRows()}
            </Table>
        );
    }
}

const FCTable = connect(null, mapDispatchToProps)(ConnectedFCTable);

FCTable.propTypes = {
    data: PropTypes.object.isRequired,
    propertiesToDisplay: PropTypes.object.isRequired
};

export default FCTable;
