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
      </div>
    );
  }
}

Card.propTypes = {};

export default Card;
