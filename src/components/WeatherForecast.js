import React from "react";
import DailyForecast from "./DailyForecast";

const WeatherForecast = (props) => {
  const getForecastHighAndLow = (daily) => {
    /**
     * Gets the weeks lowest low and highest high to calculate where to place bar and how wide
     */

    let weeksMin = 1000;
    let weeksMax = 0;

    // loop each day of the forecast
    for (let i = 0; i < daily.length; i++) {
      if (weeksMin > daily[i].temp.min) weeksMin = daily[i].temp.min;
      if (weeksMax < daily[i].temp.max) weeksMax = daily[i].temp.max;
    }

    // convert and return
    return { min: weeksMin, max: weeksMax };
  };

  let range = getForecastHighAndLow(props.forecast);

  const weeklyForecast = props.forecast.map((currElement, index) => {
    return (
      <DailyForecast
        key={index}
        index={index}
        today={currElement}
        range={range}
      />
    );
  });

  return <div id="weather-forecast">{weeklyForecast}</div>;
};

export default WeatherForecast;
