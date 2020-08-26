import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faLightbulb,
  faBookOpen,
  faRss,
  faCoffee,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "../sass/footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="wrapper">
        <div className="overview">
          <a href="/" className="logo">
            <FontAwesomeIcon icon={faMountain} size="4x" />
            <br></br>
            Mount Weather
          </a>
        </div>
        <div className="links">
          <li>
            <FontAwesomeIcon icon={faLightbulb} />
            <a
              href="https://darksky.net/forecast/55.7415,37.6156/us12/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inspiration
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faBookOpen} />
            <a
              href="https://www.theodinproject.com/courses/javascript/lessons/weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Odin Project
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faRss} />
            <a
              href="http://gerrg.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GERRG.com
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCoffee} />
            <a
              href="https://gerrgg.github.io/resume/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} />
            <a
              href="https://github.com/gerrgg/mount-weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </li>
          <li>
            <img
              alt="open weather map logo"
              src={process.env.PUBLIC_URL + "/open-weather-map-logo-icon.png"}
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://openweathermap.org/api"
            >
              OpenWeatherMap API
            </a>
          </li>
          <li style={{ alignItems: "flex-end" }}>
            <img
              alt="open weather map logo"
              src={process.env.PUBLIC_URL + "/giphy-icon.png"}
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developers.giphy.com/explorer"
            >
              GIPHY API
            </a>
          </li>
        </div>
      </div>
      <p className="credits">
        Built with Love and Coffee - Gregory Bastianelli
      </p>
    </div>
  );
};

export default Footer;
