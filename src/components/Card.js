import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card card__content">
        <p className="card__content-emoji">
          {this.props.emoji ? emoji.getUnicode(this.props.emoji) : ""}
        </p>

        <p className="card__content-text">{this.props.text}</p>

        <button
          type="button"
          className="card__delete"
          aria-label="delete"
          onClick={() => {
            this.props.deleteCardCallback(this.props.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
