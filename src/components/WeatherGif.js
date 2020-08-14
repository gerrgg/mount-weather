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
  }

  async componentDidMount() {
    await this.getGifSrc(this.props.query);
  }

  async getGifSrc(query) {
    let apiKey = "XglG7Kno2HckkrUjCimsJOv8YE0STATQ";

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
          <img alt="sunny" src={this.state.src} />
        ) : (
          <FontAwesomeIcon icon={faSpinner} />
        )}
      </span>
    );
  }
}

export default WeatherGif;
