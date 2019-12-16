import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <section className="card__content-text">{this.props.text} </section >
          <section className="card__content-emoji">{this.props.emoji && this.props.emoji.length > 0 ? emoji.getUnicode(this.props.emoji): ""}</section>

      </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,

};

export default Card;
