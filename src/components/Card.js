import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const { id, text, curEmoji, deleteCardCallback } = props;

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-text">{text ? text : ''}</div>
        <div className="card__content-emoji">{ curEmoji ? emoji.getUnicode(curEmoji) : ''}</div>
        <button className="card__delete" onClick={() => {deleteCardCallback(id) }}>Delete</button>
      </div>
    </div>
  )
}


Card.propTypes = {
  id: PropTypes.number,
  text:PropTypes.string,
  curEmoji: PropTypes.string,
  deleteCardCallback:PropTypes.func
};

export default Card;
