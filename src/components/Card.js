import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import Board from './Board';

import './Card.css';

class Card extends Component {
  
  render() {
  
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div card__content-emoji>
            {this.props.emoji}
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
