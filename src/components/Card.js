import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{props.text}</p>
        <p className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</p>
        <button
          type="button"
          className="card__delete"
          onClick={props.deleteCardCallback}
        >
          Delete Card
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func,
};

export default Card;