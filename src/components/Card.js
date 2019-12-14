import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      text: props.text,
      emoji: props.emoji || props.Emoji ,
    }
  }
  render() {
    console.log(this);
    const cardEmoji = this.state.emoji;    
    return (
      <div className="card card__content">
        <div className="card__content-text">
        {this.state.text}
        </div>
        <div className="card__content-emoji">
          {cardEmoji ? emoji.getUnicode(cardEmoji) : ''}
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
