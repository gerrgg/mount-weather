import React from "react";
import moment from "moment";

const WeatherBrief = (props) => {
  const getWeatherIcon = (icon) =>
    `http://openweathermap.org/img/wn/${icon}.png`;

  const getDayOfWeek = (timestamp) => moment(timestamp * 1000).format("ddd");

  return (
    <div className="brief">
      <img
        alt={props.weather.description}
        src={getWeatherIcon(props.weather.icon)}
      />
      <span>{props.index !== 0 ? getDayOfWeek(props.timestamp) : "Today"}</span>
    </div>
  );
};

export default WeatherBrief;
