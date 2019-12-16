import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  deleteCard = (event) => {
    event.preventDefault();
    this.props.deleteCardCallback(this.props.id)
  }

  render() {
    return (
      <div className="card">
        <h2>Card</h2>
        <div className='card__content'>
          <p className='card__content-text'>
            {this.props.text}
          </p>
          <p className='card__content-emoji'>
            {this.props.emoji ? emoji.getUnicode(this.props.emoji) : null}
          </p>
        </div>
        <button className='card__delete' onClick={this.deleteCard}>Delete Card</button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
