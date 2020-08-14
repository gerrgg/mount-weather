import React from "react";
import moment from "moment";
import "../sass/weather.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const WeatherDetails = (props) => {
  const getWind = () => `${props.data.wind.speed} mph`;
  const getHumidity = () => `${props.data.main.humidity}%`;
  const getPressure = () => `${props.data.main.pressure} mb`;
  const getVisibility = () => `${props.data.visibility / 1000}km`;
  const getSunRise = () => moment(props.data.sys.sunrise).format("LT");
  const getSunSet = () => moment(props.data.sys.sunset).format("LT");

  return (
    <div id="weather-details">
      <WeatherDetailComponent header={"Wind"} value={getWind()} />
      <WeatherDetailComponent header={"Humidity"} value={getHumidity()} />
      <WeatherDetailComponent
        header={<FontAwesomeIcon icon={faSun} />}
        value={getSunRise()}
      />
      <WeatherDetailComponent
        header={<FontAwesomeIcon icon={faMoon} />}
        value={getSunSet()}
      />
      <WeatherDetailComponent header={"Visibility"} value={getVisibility()} />
      <WeatherDetailComponent header={"Pressure"} value={getPressure()} />
    </div>
  );
};

const WeatherDetailComponent = (props) => {
  return (
    <div className="detail">
      <span className="header">{props.header}:</span>
      <span className="value">{props.value}</span>
    </div>
  );
};

export default WeatherDetails;
