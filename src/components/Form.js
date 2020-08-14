import React, { Component } from "react";
import "../sass/form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faSearch } from "@fortawesome/free-solid-svg-icons";

class Form extends Component {
  constructor(props) {
    super();
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div id="search-location">
        <form onSubmit={this.props.handleSubmit}>
          <button type="button">
            <FontAwesomeIcon icon={faLocationArrow} />
          </button>
          <input
            id="search-bar"
            type="text"
            name="query"
            placeholder="Petoskey, Michigan"
            onChange={this.handleChange}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
