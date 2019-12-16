import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      text : "Dog",
      emoji: "dog"
    }
  }
  render() {
    return (
      <div className="card">
        <p>{this.state.text}</p>
        <p>{this.state.emoji}</p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
