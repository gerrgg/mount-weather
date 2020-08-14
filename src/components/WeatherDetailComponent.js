import React from "react";

const WeatherDetailComponent = (props) => {
  return (
    <div className="detail">
      <span className="header">{props.header}:</span>
      <span className="value">{props.value}</span>
    </div>
  );
};

export default WeatherDetailComponent;
