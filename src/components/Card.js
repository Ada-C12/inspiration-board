import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  
  render() {
    const cardEmoji = this.props.emoji

    return (
      <div className="card">
        <div className="card__content">
        <p className="card__content-text">{this.props.text}</p>
        { cardEmoji ? (<p className="card__content-emoji">{emoji.getUnicode(cardEmoji)}</p>) : '' }

        <p><button
          type="button"
          className="card__delete"
          onClick={() => { this.props.deleteCardCallback(this.props.id) }}
        >
          Delete
        </button>
        </p>
        
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
