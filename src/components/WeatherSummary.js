import React, { Component } from "react";
import WeatherGif from "./WeatherGif";
import WeatherDetailComponent from "./WeatherDetailComponent";

class WeatherSummary extends Component {
  constructor(props) {
    super();
  }

  convertTemp = (temp) => {
    let f = ((temp - 273.15) * 9) / 5 + 32;
    return Math.round(f) + "°F";
  };

  render() {
    return (
      <div id="weather-summmary">
        <WeatherGif query={this.props.data.weather[0].description} />
        <div className="summary-right">
          <h1>
            {this.convertTemp(this.props.data.main.temp)}{" "}
            {this.props.data.weather[0].description}
          </h1>
          <div className="summary-details">
            <WeatherDetailComponent
              header={"Feels Like"}
              value={this.convertTemp(this.props.data.main.feels_like)}
            />
            <WeatherDetailComponent
              header={"Low"}
              value={this.convertTemp(this.props.data.main.temp_min)}
            />
            <WeatherDetailComponent
              header={"High"}
              value={this.convertTemp(this.props.data.main.temp_max)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherSummary;
