import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{ this.props.text }</p>
          { this.props.emoji !== null ? 
          <p className="card__content-emoji">{ emoji.getUnicode(this.props.emoji) }</p>
          :
          '' }
        </div>
        <button
          type="button"
          className="card__delete"
          aria-label="Delete"
          onClick={() => { this.props.deleteCardCallback(this.props.id) }}
        >Delete</button>
      </div>
    )
  }
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
