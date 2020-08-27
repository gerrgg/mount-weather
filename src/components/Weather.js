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
  userAcceptedHTMLGeoLocation = (location) =>
    this.getTheWeather(location.coords);

  // get weather of someplace nice - maybe have an array of "cool coordinates"
  setDefaultGeoLocation = (e) => {
    let defaultCoords = { longitude: -84.902156, latitude: 45.40955 };
    this.getTheWeather(defaultCoords);
  };

  // either get user location consent or set a default location somewhere fun.
  componentDidMount() {
    this.setDefaultGeoLocation();
    this.askForGeolocation();
  }

  askForGeolocation() {
    navigator.geolocation.getCurrentPosition(this.userAcceptedHTMLGeoLocation);
  }

  async handleSubmit(event) {
    /**
     * Change query on form submit
     */
    event.preventDefault();

    try {
      let query = event.target[1].value;
      let address = await this.getCoordinatesFromAddress(query);
      let coords = {
        latitude: address.results[0].locations[0].latLng.lat,
        longitude: address.results[0].locations[0].latLng.lng,
      };
      this.getTheWeather(coords);
    } catch (e) {
      console.log(e);
    }
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

  async getAddressFromCoordinates(coords) {
    /**
     * Get location information from reverse lookup on the coordinates by MapQuest API
     */
    if (!coords) return;

    const response = await fetch(
      `https://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MQ_KEY}&location=${coords.latitude},${coords.longitude}8&includeRoadMetadata=true&includeNearestIntersection=true`,
      { mode: "cors" }
    );

    return await response.json();
  }

  async getCoordinatesFromAddress(address) {
    /**
     * Get location information from reverse lookup on the coordinates by MapQuest API
     */
    if (!address) return;

    const response = await fetch(
      `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MQ_KEY}&location=${address}`,
      { mode: "cors" }
    );

    return await response.json();
  }

  async getTheWeather(coords) {
    /**
     * Get the weather and set the state of things
     */
    let forecast = await this.getForecast(coords);
    let location = await this.getAddressFromCoordinates(coords);

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
    return (
      <div id="weather">
        <div id="search-location">
          <Form
            handleSubmit={this.handleSubmit}
            location={this.state.location}
          />
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
