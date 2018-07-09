import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherLocation extends Component {

    constructor({ city }) { //Primero se ejecuta aqui., // el city de aqui se utliza destrcturin, y se esta pasando  en el proptypes
        super();
        this.state = {
            city,
            data: null //valor inicial de data
        };
        console.log('constructor')
    }

    componentWillMount() { //este componente se ejecuta una sola ves cuando se inicia al app.
        // console.log('componentWillMount')
        const { city } = this.state;// el valor city se tomara del state
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather)
            .then(data => {
                return data.json();
            }).then(weather_data => {
                const data = transformWeather(weather_data);
                this.setState({ data });
                console.log(weather_data)
            });
        // this.handleUpdateClick();
    }

    componentDidMount() { //depues de que se hace el render. este se ejecuta una ves nada ma en la vida del componente
        console.log('componentDidMount')
    }

    componentWillUpdate() { //se ejecuta cada ves que se ejecuta un update del state
        console.log('componentWillUpdate')
    }
    componentDidUpdate() { //depues del render cada vez que se ejecuta el update
        console.log('componentDidUpdate')

    }

    render = () => {
        // console.log('render')
        const {onWeatherLocationClick} = this.props;

        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city} />
                {data ? <WeatherData data={data} /> : <CircularProgress />}
                {/* <button onClick={this.handleUpdateClick} >Actualizar</button> */}
            </div>)

    };
}

WeatherLocation.protoTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func
}
export default WeatherLocation;