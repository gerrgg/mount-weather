import React, { Component } from "react";
import Form from "./Form";
import WeatherDetails from "./WeatherDetails";
import WeatherSummary from "./WeatherSummary";
import WeatherMap from "./WeatherMap";
import WeatherForecast from "./WeatherForecast";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      perferredUnit: "Fahrenheit",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // if user gives us coordinates, pass to get weather
  gotGeoLocation = (location) => this.getTheWeather(location.coords);

  // get weather of someplace nice - maybe have an array of "cool coordinates"
  userDeniesGeoLocation = (e) => {
    console.log("deny:" + e);
  };

  // either get user location consent or set a default location somewhere fun.
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.gotGeoLocation,
      this.didNotGetGeoLocation
    );
  }

  handleSubmit(event) {
    /**
     * Change query on form submit
     */
    event.preventDefault();
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

  async getForecast(coords) {
    /**
     * Get five day forecast weather data from OWM
     */
    if (!coords) return;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.latitude}&appid=${this.props.apiKey}`,
      { mode: "cors" }
    );

    return await response.json();
  }

  async getLocationDetails(coords) {
    /**
     * Get location information from reverse lookup on the coordinates by MapQuest API
     */
    if (!coords) return;

    const response = await fetch(
      `http://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MQ_KEY}&location=${coords.latitude},${coords.longitude}8&includeRoadMetadata=true&includeNearestIntersection=true`,
      { mode: "cors" }
    );

    return await response.json();
  }

  async getTheWeather(coords) {
    let forecast = await this.getForecast(coords);
    let location = await this.getLocationDetails(coords);

    // Dont change the state if we've got issues with the query
    if (typeof forecast !== "undefined") {
      this.setState({
        current: forecast.current,
        location: location.results[0].locations[0],
        daily: forecast.daily,
        hourly: forecast.hourly,
        minutely: forecast.minutely,
        coords: coords,
        hasData: true,
      });
    }
  }

  render() {
    console.log(this.state.location);
    return (
      <div id="weather">
        <div id="search-location">
          <Form handleSubmit={this.handleSubmit} query={this.state.location} />
        </div>
        {this.state.hasData ? (
          <div className="content">
            <WeatherDetails data={this.state.current} />
            <WeatherSummary
              data={this.state.current}
              today={this.state.daily[0]}
            />
            <WeatherMap
              lat={this.state.coords.latitude}
              lon={this.state.coords.longitude}
            />
            <WeatherForecast forecast={this.state.daily} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Weather;
