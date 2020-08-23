import React from "react";
import { convertTemp } from "./Helpers";

const WeatherRange = (props) => {
  return (
    <div className="weather-range">
      <div className="details" style={{ width: props.width + "%" }}>
        <span className="min" style={{ paddingLeft: props.padding + "%" }}>
          {convertTemp(props.min)}
        </span>
        <span className="bar"></span>
        <span className="max">{convertTemp(props.max)}</span>
      </div>
    </div>
  );
};

export default WeatherRange;
