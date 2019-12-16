import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <section className='card__content'>
          <p className='card__content-text'>{this.props.text}</p>
          <p className="card__content-emoji">{this.props.emoji ? emoji.getUnicode(this.props.emoji) : ""}</p>
        </section>
        
        <button
          type="button"
          className="card__delete"
          aria-label="Delete"
          onClick={() => {this.props.deleteCardCallback(this.props.id)}}
          
        >Delete</button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func
};

export default Card;
