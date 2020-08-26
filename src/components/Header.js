import React from "react";
import "../sass/header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCode,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gerrgg/mount-weather"
            >
              <FontAwesomeIcon
                icon={faCode}
                style={{ paddingRight: ".5rem" }}
              />
              Code
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL} className="logo">
              <FontAwesomeIcon icon={faMountain} />
              <br></br>
              Mount Weather
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gerrgg.github.io/resume/"
            >
              <FontAwesomeIcon
                icon={faCoffee}
                style={{ paddingRight: ".5rem" }}
              />
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
