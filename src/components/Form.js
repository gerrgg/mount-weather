import React, { Component } from "react";
import "../sass/form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faSearch } from "@fortawesome/free-solid-svg-icons";

const Form = (props) => {
  const getFormattedLocation = () => {
    if (props.location) {
      return `${props.location.adminArea5}, ${props.location.adminArea3}, ${props.location.adminArea1}`;
    }
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <button type="button">
        <FontAwesomeIcon
          icon={faLocationArrow}
          onClick={props.askForGeolocation}
        />
      </button>
      <input
        id="search-bar"
        type="text"
        name="query"
        placeholder={getFormattedLocation()}
      />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Form;
