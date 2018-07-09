import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import uuidv1 from 'uuid/v1';
import './styles.css';

class SimpleTable extends Component {
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

    renderData = (headers, data) => {
        console.log(headers)
        const renderColumn = (hds, properties) => (
            hds.map(header => (
                <TableCell key={uuidv1()}>{properties[header]}</TableCell>
            ))
        );
        return (
            <TableBody>
                {data.map(properties => {
                    return (
                        <TableRow key={uuidv1()}>
                            {renderColumn(headers, properties)}
                        </TableRow>
                    );
                })}
            </TableBody>);
    }

    render() {
        const { data, headers } = this.props;
        console.log(data);
        console.log(headers);
        return (
            <Paper className='root'>
                <Table className='table'>
                    {this.renderHeaders(headers)}
                    {this.renderData(headers, data)}
                </Table>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    headers: PropTypes.array.isRequired,
};

export default SimpleTable;
