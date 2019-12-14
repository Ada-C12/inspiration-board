import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {
  // console.log(props);
    return (
      <div className="card">
        text: <br/>
        {props.text} <br/>
        emoji: <br/>
        {props.emoji} <br/>
      </div>
    )
  }

Card.propTypes = {
// text: PropTypes.string.isRequired,
};

export default Card;
