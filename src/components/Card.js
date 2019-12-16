import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

// class Card extends Component {
  // render() {
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
            onClick={() => {props.deleteCardCallback(props.id)}}>
              {console.log(props.id)}
          Delete
          </button>
        </section>
      </div>
     
    )
}
  // }
// }

Card.propTypes = {
  cardText: PropTypes.string.isRequired,
  cardEmoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
