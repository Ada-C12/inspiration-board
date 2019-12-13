import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const { id, text, deleteCardCallback } = props;
  
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{ text }</p>
        { props.emoji !== null ? 
        <p className="card__content-emoji">{ emoji.getUnicode(props.emoji) }</p>
        :
        '' }
      </div>
      <button
        type="button"
        className="card__delete"
        aria-label="Delete"
        onClick={() => { deleteCardCallback(id) }}
      >Take</button>
    </div>
  )
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
