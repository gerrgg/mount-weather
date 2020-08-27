import React from "react";
import moment from "moment";
import "../sass/weather.scss";
import WeatherDetailComponent from "./WeatherDetailComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const WeatherDetails = (props) => {
  const getWind = () => `${props.data.wind_speed} mph`;
  const getHumidity = () => `${props.data.humidity}%`;
  const getPressure = () => `${props.data.pressure} mb`;
  const getVisibility = () => `${props.data.visibility / 1000}km`;

  const getSunRiseOrFall = (timestamp) => moment(timestamp * 1000).format("LT");

  return (
    <div className="wrapper">
      <div id="weather-details">
        <WeatherDetailComponent header={"Wind"} value={getWind()} />
        <WeatherDetailComponent header={"Humidity"} value={getHumidity()} />

        <WeatherDetailComponent
          header={<FontAwesomeIcon icon={faSun} />}
          value={getSunRiseOrFall(props.data.sunrise)}
        />

        <WeatherDetailComponent
          header={<FontAwesomeIcon icon={faMoon} />}
          value={getSunRiseOrFall(props.data.sunset)}
        />

        <WeatherDetailComponent header={"Visibility"} value={getVisibility()} />
        <WeatherDetailComponent header={"Pressure"} value={getPressure()} />
      </div>
    </div>
  );
};

export default WeatherDetails;
