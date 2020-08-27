import React from "react";
import { convertTemp } from "./Helpers";
import WeatherGif from "./WeatherGif";
import WeatherDetailComponent from "./WeatherDetailComponent";

const WeatherSummary = (props) => {
  return (
    <div id="weather-summmary">
      <WeatherGif query={props.data.weather[0].main} />
      <div className="summary-right">
        <h1>
          {convertTemp(props.data.temp)} {props.data.weather[0].description}
        </h1>
        <div className="summary-details">
          <WeatherDetailComponent
            header={"Feels Like"}
            value={convertTemp(props.data.feels_like)}
          />
          <WeatherDetailComponent
            header={"Low"}
            value={convertTemp(props.today.temp.min)}
          />
          <WeatherDetailComponent
            header={"High"}
            value={convertTemp(props.today.temp.max)}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherSummary;
