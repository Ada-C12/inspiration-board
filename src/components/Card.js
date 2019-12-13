import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    let displayEmoji = (this.props.emoji) ? emoji.getUnicode(this.props.emoji) : '';
    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{this.props.id}</p>
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{displayEmoji}</p>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
