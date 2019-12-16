import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

// class Card extends Component {
  // render() {
const Card = (props) => {
    return (
      <div className="card">
        {props.cardText}
        {emoji.getUnicode(`${props.cardEmoji}`)}
        <button
          type='button'
          className='card__delete'
          aria-label='Delete'
          onClick={() => {props.deleteCardCallback(props.id)}}>
            {console.log(props.id)}
         Delete
        </button>
      </div>
     
    )
}
  // }
// }

Card.propTypes = {

};

export default Card;
