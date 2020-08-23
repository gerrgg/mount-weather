import React from "react";
import convertTemp from "./Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DailyForecastWeatherDetails = (props) => {
  const getDescription = () => props.today.weather[0].description;
  const getMinTemp = () => convertTemp(props.today.temp.morn) + " 6am";
  const getMaxTemp = () => convertTemp(props.today.temp.day) + " 3pm";

  console.log(props);
  return (
    <div className={`daily-details ${props.expanded ? "expanded" : ""}`}>
      <h4 className="description">{getDescription()}</h4>
      <div>
        <span className="sunrise-sunset">
          {getMinTemp()}
          {<FontAwesomeIcon icon={faArrowRight} />}
          {getMaxTemp()}
        </span>
      </div>
    </div>
  );
};

export default DailyForecastWeatherDetails;
