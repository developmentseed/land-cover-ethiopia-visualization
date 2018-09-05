import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from "react-redux";
import { rasterLayersToDisplay } from './../config';
import { selectLayer } from "../actions/index";


const mapDispatchToProps = dispatch => {
    return {
        selectLayer: activeLayer => dispatch(selectLayer(activeLayer))
    };
};

class ConnectedMenuLayers extends Component {

    constructor(props: Props) {
        super(props);
        this.state = rasterLayersToDisplay;
    }

    // componentDidUpdate() {
    //     console.log('update')
    // }
    layerSelectedActive = (rasterLayer) => {
        rasterLayer.status = true;
        const updateLayer = {};
        updateLayer[rasterLayer.id] = rasterLayer;
        this.setState(Object.assign(this.state, updateLayer));
        this.props.selectLayer(updateLayer);
    }

    layerSelectedDeactivate = (rasterLayer) => {
        rasterLayer.status = false;
        const updateLayer = {};
        updateLayer[rasterLayer.id] = rasterLayer;
        this.setState(Object.assign(this.state, updateLayer));
        this.props.selectLayer(updateLayer);
    }

    renderLayerMenu = () => {
        const menuList = (rasterLayers) => (
            rasterLayers.map(rasterLayer => (
                rasterLayer.status ?
                    <a href="#" className="active" onClick={() => this.layerSelectedDeactivate(rasterLayer)}> {rasterLayer.name}</a>
                    : <a href="#" onClick={() => this.layerSelectedActive(rasterLayer)}> {rasterLayer.name}</a>
            ))
        );
        return (
            <div>
                {menuList(_.values(rasterLayersToDisplay))}
            </div>
        )
    }

    render() {
        return (
            <nav id="menu">{this.renderLayerMenu()}</nav>
        );
    }
}

const MenuLayers = connect(null, mapDispatchToProps)(ConnectedMenuLayers);
export default MenuLayers;