import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const emojiImage = this.props.emoji ? emoji.getUnicode(this.props.emoji) : null

    return (
      <div className="card">
          <p className="card__content card__content-text">{this.props.text}</p>
          <p className="card__content card__content-emoji">{emojiImage}</p>
        <button onClick={() => {this.props.deleteCardCallback(this.props.id)}} className="card__delete" type="button"
        >Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
