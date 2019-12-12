import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  
  render() {
    return (
      <div className="card">
        <p className="card__content card__content-text">{ this.props.text }</p>
        { this.props.emoji !== null ? 
        <p className="card__content card__content-emoji">{ emoji.getUnicode(this.props.emoji) }</p>
        :
        '' }
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
