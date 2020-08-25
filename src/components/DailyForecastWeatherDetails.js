import React from "react";
import { convertTemp, getSunRiseOrFall } from "./Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const DailyForecastHighAndLow = (props) => {
  return (
    <span className="daily-high-low">
      {props.min}
      {<FontAwesomeIcon icon={faArrowRight} />}
      {props.max}
    </span>
  );
};

const DailyForecastSunRiseSunSet = (props) => {
  return (
    <div className="sunrise-sunset">
      <span className="sunrise">
        <FontAwesomeIcon icon={faSun} /> {props.sunrise}
      </span>
      <span className="sunset">
        <FontAwesomeIcon icon={faMoon} /> {props.sunset}
      </span>
    </div>
  );
};

const DailyForecastRainFall = (props) => {
  return (
    <div className="rainfall">
      <span className="label">Rain:</span>
      <span>{props.rain}</span>
    </div>
  );
};

const DailyForecastWeatherDetails = (props) => {
  const getMinTemp = () => convertTemp(props.today.temp.min);
  const getMaxTemp = () => convertTemp(props.today.temp.max);
  const getRainFall = () =>
    typeof props.today.rain !== "undefined"
      ? props.today.rain + " in."
      : "0 in.";

  return (
    <div className={`daily-details ${props.expanded ? "expanded" : ""}`}>
      <h4 className="description">{props.today.weather[0].description}</h4>
      <div className="daily-details-header">
        <DailyForecastHighAndLow min={getMinTemp()} max={getMaxTemp()} />
        <DailyForecastSunRiseSunSet
          sunrise={getSunRiseOrFall(props.today.sunrise)}
          sunset={getSunRiseOrFall(props.today.sunset)}
        />
        <DailyForecastRainFall rain={getRainFall()} />
      </div>
    </div>
  );
};

export default DailyForecastWeatherDetails;
