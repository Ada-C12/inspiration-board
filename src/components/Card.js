import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{this.props.emoji ? emoji.getUnicode(this.props.emoji) : ""}</p>
          <button type="button" className="card__delete">Delete</button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
