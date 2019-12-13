import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      text: props.text,
      emoji: props.emoji,
  
    }
  }
  render() {
    console.log(this);
    
    return (
      <div className="card card__content">
        <div className="card__content-text">
        {this.state.text}
        </div>
        <div className="card__content-emoji">
          {this.state.emoji}
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
