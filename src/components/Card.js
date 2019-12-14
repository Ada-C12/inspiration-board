import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {/* Card */}
        <p>{this.props.text}</p>
        <p>{emoji.getUnicode(`${this.props.emoji}`)}</p>
        <input type="button" value="Delete" className="card__delete" onClick={() => {this.props.onDeleteCard(this.props.id)}} />
       
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string

};

export default Card;
