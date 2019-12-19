import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as cardEmoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {

render () {
  const {id, text, emoji, deleteCardCallback} = this.props; 
  return (
      <div className="card card__content">
        <p className="card__content-text">{id}</p>
        <p className="card__content-text">{text}</p>
        <p className="card__content-emoji">{cardEmoji.getUnicode(emoji)}</p>

      <button className="card__delete"
      onClick={() => {deleteCardCallback(id)}}>
        Delete Card
      </button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
}

export default Card;
