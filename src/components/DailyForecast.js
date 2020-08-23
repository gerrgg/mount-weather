import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { convertTemp } from "./Helpers";
import WeatherRange from "./WeatherRange";
import WeatherBrief from "./WeatherBrief";
import DailyForecastWeatherDetails from "./DailyForecastWeatherDetails";

class DailyForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  calculateWidth = (today, range) => {
    /**
     * Calculate the width of the bar by determining how much todays high compares to the high of the week
     */

    let width = convertTemp(today.max, false) / convertTemp(range.max, false);

    return width.toFixed(2) * 100 - 2;
  };

  calculateLeftPadding = (today, range) => {
    /**
     * Calculate the width of the bar by determining how much todays high/low compares to the entire week
     */
    let min = convertTemp(today.min, false) - convertTemp(range.min, false);
    let max = convertTemp(range.max, false) - convertTemp(range.min, false);

    let padding = (min / max).toFixed(2) * 100;
    return padding;
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { expanded: !prevState.expanded };
    });
  };

  render() {
    let width = this.calculateWidth(this.props.today.temp, this.props.range);

    let padding = this.calculateLeftPadding(
      this.props.today.temp,
      this.props.range
    );

    return (
      <div className="daily-forecast" onClick={this.handleClick}>
        <div className="inner">
          <WeatherBrief
            index={this.props.index}
            weather={this.props.today.weather[0]}
            timestamp={this.props.today.dt}
          />

          <WeatherRange
            min={this.props.today.temp.min}
            max={this.props.today.temp.max}
            width={width}
            padding={padding}
          />

          {!this.state.expanded ? (
            <FontAwesomeIcon icon={faPlusCircle} />
          ) : (
            <FontAwesomeIcon icon={faMinusCircle} />
          )}
        </div>

        <DailyForecastWeatherDetails
          today={this.props.today}
          expanded={this.state.expanded}
        />
      </div>
    );
  }
}

export default DailyForecast;
