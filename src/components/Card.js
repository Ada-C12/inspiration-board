import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  deleteCard = (cardId) => {
    this.props.deleteCardCallback(cardId);
  };


  render() {
    return (
      <div className="card" >
        <span className="card__content">
          <span className="card__content-text">{this.props.text}</span>
          <span className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</span> 
        </span>
        <button 
          className="card__delete" 
          onClick={() => {this.deleteCard(this.props.id) }}
      >delete</button>
      </div>
    )
  }
}

// Card.propTypes = {

// };

export default Card;
