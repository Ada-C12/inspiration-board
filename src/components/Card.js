import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      {props.text}
      {emoji.getUnicode(`${props.emoji}`)}
      <button
        type="button"
        className=""
        onClick={props.deleteCardCallback}
      >
        Delete Card
      </button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func,
};

export default Card;