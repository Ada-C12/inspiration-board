import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDict from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const {text, emoji} = this.props.data;

    return (
      <div className="card">
        <div className="card__content">
          <span className="card__content-text">
            { text ? text : '' }
          </span>
          <span className="card__content-emoji">
            { emoji ? emojiDict.getUnicode(emoji) : '' }
          </span>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
