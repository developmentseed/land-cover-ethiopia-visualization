import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import uuidv1 from 'uuid/v1';
import './styles.css';

class FCTable extends Component {

    renderHeaders = (headers) => {
        const cells = (hds) => (
            hds.map(header => (
                <TableCell key={uuidv1()}>{header}</TableCell>
            ))
        );
        return (
            <TableHead className='headerBackground'>
                <TableRow>
                    {cells(headers)}
                </TableRow>
            </TableHead>
        )
    };


    renderData = () => {
        const { headers, data, onRowClick } = this.props;
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
                        <TableRow key={uuidv1()} onClick={() => onRowClick(feature)} >
                            {renderColumn(headers, feature)}
                        </TableRow>
                    );
                })}
            </TableBody>);
    }

    render() {
        const { onRowClick, data, headers } = this.props;
        return (
            <Table className='table'>
                {this.renderHeaders(headers)}
                {this.renderData()}
            </Table>
        );
    }
}

FCTable.propTypes = {
    data: PropTypes.object.isRequired,
    headers: PropTypes.array.isRequired,
    onRowClick: PropTypes.func
};

export default FCTable;
