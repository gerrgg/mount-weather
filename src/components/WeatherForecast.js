import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
const WeatherForecast = (props) => {
  const convertTemp = (temp) => {
    let f = ((temp - 273.15) * 9) / 5 + 32;
    return Math.round(f) + "°F";
  };

  const getForecastHighAndLow = (daily) => {
    /**
     * Gets the weeks lowest low and highest high to calculate where to place bar and how wide
     */
    let weeksMin = 1000;
    let weeksMax = 0;

    for (let i = 0; i < daily.length; i++) {
      if (weeksMin > daily[i].temp.min)
        weeksMin = convertTemp(daily[i].temp.min);
      if (weeksMax < daily[i].temp.max)
        weeksMax = convertTemp(daily[i].temp.max);
    }

    return { min: weeksMin, max: weeksMax };
  };

  console.log(getForecastHighAndLow(props.forecast.daily));

  return (
    <div id="weather-forecast">
      <DailyForecast />
    </div>
  );
};

const DailyForecast = () => {
  return (
    <div className="daily-forecast">
      <div className="brief">
        <FontAwesomeIcon icon={faCloudSunRain} />
        <span>Today</span>
      </div>
      <div className="weather-range">
        <span className="min">50</span>
        <span className="bar"></span>
        <span className="max">75</span>
      </div>

      <FontAwesomeIcon icon={faPlusCircle} />
    </div>
  );
};
export default WeatherForecast;
