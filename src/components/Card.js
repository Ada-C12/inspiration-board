import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
  <section className='card__content'>
  <section className='card__content-text' >{props.cardText} </section>
  <section className='card__content-emoji'>{emoji.getUnicode(`${props.cardEmoji}`)}</section>
  <button
    type='button'
    className='card__delete'
    aria-label='Delete'
    onClick={() => {props.deleteCardCallbackAction(props.id)}}>
      {console.log(props.id)}
  Delete
        </button>
      </section>
      </div>
    )
  }

Card.propTypes = {
  cardText: PropTypes.string.isRequired,
  cardEmoji: PropTypes.string,
  deleteCardCallbackAction: PropTypes.func.isRequired
};

export default Card;
