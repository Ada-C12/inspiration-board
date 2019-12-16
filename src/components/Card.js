import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super();
    this.cardId = props.id;
    this.deleteCardCallback = props.deleteCardCallback;
    this.state = {
      text: props.text,
      emoji: props.emoji,
    }
  }
  render() {
    const cardEmoji = this.state.emoji; 
    
    return (
      <div className="card card__content">
        <div className="card__content-text">
        {this.state.text}
        </div>
        <div className="card__content-emoji">
          {cardEmoji ? emoji.getUnicode(cardEmoji) : ''}
        </div>
        <button onClick={() => {this.deleteCardCallback(this.cardId)}} className="card__delete">
          Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
