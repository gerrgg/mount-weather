import React, { Component } from "react";
import Form from "./Form";
import WeatherDetails from "./WeatherDetails";
import WeatherSummary from "./WeatherSummary";
import WeatherMap from "./WeatherMap";

class Weather extends Component {
  constructor(props) {
    super();
    this.state = {
      hasData: false,
      perferredUnit: "Fahrenheit",
      query: "typing", // we need to pass query to the form as a prop
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.getTheWeather();
  }

  handleSubmit(event) {
    event.preventDefault();
    let query = event.target[1].value;
    if (query) this.getTheWeather(query);
  }

  async getTheWeather(query = "Petoskey, MI, US") {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${this.props.apiKey}`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    if (weatherData.cod !== "404") {
      this.setState({ weather: weatherData, hasData: true });
    }
  }

  render() {
    console.log(this.state.weather);

    return (
      <div id="weather">
        <div id="search-location">
          <Form handleSubmit={this.handleSubmit} />
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
