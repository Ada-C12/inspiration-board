import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {

    return (
      <div className="card">
        <span className="card__content">
          <span className="card__content-text">{this.props.text}</span>
          <span className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</span>
        </span>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
