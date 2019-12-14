import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDictionary from 'emoji-dictionary';
import './Card.css';

const Card = ({ emoji, text, identifier, onButtonClick }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-text">
          {text}
        </div>
        <div className="card__content-emoji">
          {emoji ? emojiDictionary.getUnicode(emoji) : '' }
        </div>
      </div>
      <button className="card__delete" onClick={() => onButtonClick(identifier)} >
          Delete
          {console.log(identifier)}
      </button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
