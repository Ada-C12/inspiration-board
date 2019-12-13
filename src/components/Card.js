import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  
  render() {
    const showEmoji = emoji.getUnicode({this.props.emoji});

    return (
      <div className="card">
        <p>Do more of what makes you happy.</p>
        <p>{emoji.getUnicode("heart_eyes")}</p>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Card;
