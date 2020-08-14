import React, { Component } from "react";
import Form from "./Form";
import WeatherDetails from "./WeatherDetails";

class Weather extends Component {
  constructor(props) {
    super();
    this.state = {
      hasData: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let query = event.target[1].value;
    if (query) this.getTheWeather(query);
  }

  async getTheWeather(query = "Petoskey, US") {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${this.props.apiKey}`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    if (weatherData.cod !== "404") {
      this.setState({ weather: weatherData, hasData: true });
    }
  }

  async componentDidMount() {
    await this.getTheWeather();
  }

  render() {
    console.log(this.state.weather);
    return (
      <div id="weather">
        <Form handleSubmit={this.handleSubmit} />
        {this.state.hasData ? (
          <WeatherDetails data={this.state.weather} />
        ) : null}
      </div>
    );
  }
}

export default Weather;
