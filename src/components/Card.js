import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            <p>{this.props.text}</p>
          </div>
          <div className="card__content-emoji">
            {this.props.cardEmoji ? <p>{emoji.getUnicode(this.props.cardEmoji)}</p> : "" }
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;

//props = text, emoji