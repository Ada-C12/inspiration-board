import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const emojiImage = this.props.emoji ? emoji.getUnicode(this.props.emoji) : null

    return (
      <div className="card">
        <ul className="card__content">
          <li>{this.props.id}</li>
          <li className="card__content-text">{this.props.text}</li>
          {emojiImage}
        </ul>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
