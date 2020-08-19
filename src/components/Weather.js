import React, { Component } from "react";
import Form from "./Form";
import WeatherDetails from "./WeatherDetails";
import WeatherSummary from "./WeatherSummary";
import WeatherMap from "./WeatherMap";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      perferredUnit: "Fahrenheit",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.getTheWeather();
  }

  handleSubmit(event) {
    /**
     * Change query on form submit
     */
    event.preventDefault();
    let query = event.target[1].value;
    if (query.length) this.getTheWeather(query);
  }

  async getCurrentWeather(query) {
    /**
     * Get current weather data from OWM
     */
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${this.props.apiKey}`,
      { mode: "cors" }
    );

    return await response.json();
  }

  async getFiveDayForecast(query) {
    /**
     * Get five day forcast weather data from OWM
     */
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${this.props.apiKey}`,
      { mode: "cors" }
    );

    return await response.json();
  }

  async getTheWeather(query = this.props.query) {
    let weatherData = await this.getCurrentWeather(query);
    let forecast = await this.getFiveDayForecast(query);

    this.setState({
      weather: weatherData,
      forecast: forecast,
      hasData: true,
    });
  }

  render() {
    console.log(this.state);

    return (
      <div id="weather">
        <div id="search-location">
          <Form handleSubmit={this.handleSubmit} query={this.props.query} />
        </div>
        {this.state.hasData ? (
          <div>
            <WeatherDetails data={this.state.weather} />
            <WeatherSummary data={this.state.weather} />
            <WeatherMap
              lat={this.state.weather.coord.lat}
              lon={this.state.weather.coord.lon}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Weather;
