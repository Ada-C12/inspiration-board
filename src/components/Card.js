import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
    const { id, text, emoji, deleteCardCallback } = this.props;
    return (
      <div className="card">
      <p className="card__content-text">{text} </p>
      <p className="card__content-emoji">{emoji}</p>
      <button
          className="card__delete"
          onClick={() => { deleteCardCallback(id) }}
        >Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
