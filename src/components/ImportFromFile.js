import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImportFromFile extends Component {
    constructor() {
        super();
    }
    fileReader;
    handleFileReader = (e) => {
        const content = this.fileReader.result;
        //return the data
        this.props.handleFeatureCollection(JSON.parse(content));
    };
    handleFileChosen = (file) => {
        this.fileReader = new FileReader();
        this.fileReader.onloadend = this.handleFileReader;
        this.fileReader.readAsText(file);
    };
    render = () => {
        return (<div>
            <input type='file'
                id='file'
                className='imput-file'
                accept='.geojson'
                onChange={e => this.handleFileChosen(e.target.files[0])}
            />
        </div>)
    };
}

ImportFromFile.protoTypes = {
    handleFeatureCollection: PropTypes.func
}

export default ImportFromFile;