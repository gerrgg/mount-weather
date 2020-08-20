import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class WeatherGif extends Component {
  constructor(props) {
    super();
    this.state = {
      hasData: false,
      src: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    await this.getGifSrc();
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.getGifSrc();
    }
  }

  async handleClick() {
    await this.getGifSrc();
  }

  async getGifSrc() {
    let query = this.props.query;
    let apiKey = process.env.REACT_APP_GIPHY_KEY;

    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${query}`,
        { mode: "cors" }
      );

      const gif = await response.json();

      this.setState({ hasData: true, src: gif.data.images.original.url });
    } catch (e) {
      console.log("error", e);
    }
  }

  render() {
    return (
      <span className="weather-gif">
        {this.state.hasData ? (
          <img alt="sunny" src={this.state.src} onClick={this.handleClick} />
        ) : (
          <FontAwesomeIcon icon={faSpinner} />
        )}
      </span>
    );
  }
}

export default WeatherGif;
