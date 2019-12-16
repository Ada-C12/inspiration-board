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
        <div className="card__content card__content-text">
          <p>{this.props.text}</p>
        </div>
        <div className="card__content card__content-emoji">
          {this.props.cardEmoji ? <p>{emoji.getUnicode(this.props.cardEmoji)}</p> : "" }
        </div>
        <button 
          onClick={() => { this.props.deleteCardCallback(this.props.id) }} className="card__content card__delete">
          Delete 
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func
};

export default Card;
