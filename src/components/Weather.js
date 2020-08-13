import React, { Component } from 'react'
import Form from './Form'

class Weather extends Component{
    constructor( props ){
        super()
        this.state = {}
    }

    async componentDidMount(){

        const response = await fetch( 
            'https://api.openweathermap.org/data/2.5/weather?q=Petoskey,US&appid=' + this.props.apiKey,
            { mode: 'cors' }
        )

        const weatherData = await response.json()

        console.log( weatherData )
        this.setState({ weather: weatherData })
    }

    getWeatherEndpoint(){
        return 'https://api.openweathermap.org/data/2.5/weather'
    }

    render(){
        return(
            <div className="weather">
                <Form />
            </div>
        )
    }
}

export default Weather