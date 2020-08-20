import React, { Component } from "react";
import convertTemp from "./Helpers";
import WeatherGif from "./WeatherGif";
import WeatherDetailComponent from "./WeatherDetailComponent";

class WeatherSummary extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="weather-summmary">
        <WeatherGif query={this.props.data.weather[0].main} />
        <div className="summary-right">
          <h1>
            {convertTemp(this.props.data.main.temp)}{" "}
            {this.props.data.weather[0].description}
          </h1>
          <div className="summary-details">
            <WeatherDetailComponent
              header={"Feels Like"}
              value={convertTemp(this.props.data.main.feels_like)}
            />
            <WeatherDetailComponent
              header={"Low"}
              value={convertTemp(this.props.data.main.temp_min)}
            />
            <WeatherDetailComponent
              header={"High"}
              value={convertTemp(this.props.data.main.temp_max)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherSummary;
