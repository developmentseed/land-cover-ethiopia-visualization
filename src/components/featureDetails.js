import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import _ from 'underscore';
import uuidv1 from 'uuid/v1';
import './styles.css';

class FeatureDetails extends Component {

    // renderHeaders = (headers) => {
    //     const cells = (hds) => (
    //         hds.map(header => (
    //             <TableCell key={uuidv1()}>{header}</TableCell>
    //         ))
    //     );
    //     return (
    //         <TableHead className='headerBackground'>
    //             <TableRow>
    //                 {cells(headers)}
    //             </TableRow>
    //         </TableHead>
    //     )
    // };


    diplayProperties = (feature) => {
        const props = (keys, properties) => (
            keys.map(key => (
                // <ListItem button divider>
                // <ListItemText>
                <div className='rowPropertie'>
                <span>{key}</span>: <strong>{properties[key]}</strong>
                </div>
                // </ListItemText>
            //   </ListItem>
            ))
        )
        return (
            <List component="nav">
            {props(_.keys(feature.properties), feature.properties)}
            </List>
        )
    }

    render() {
        const { feature } = this.props;
        console.log(feature)
        return (
          
            <div className='featureDetails'>
                {feature ? this.diplayProperties(feature) : <h1>select</h1>}
               

            </div>


        );
    }
}



export default FeatureDetails;
