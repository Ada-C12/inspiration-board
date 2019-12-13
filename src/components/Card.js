import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.Emoji && (
          <>
            <p>{emoji.getUnicode(this.props.Emoji)}</p>
            <p>{this.props.text}</p>
          </>
        )}
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Card.propTypes = {};

export default Card;
