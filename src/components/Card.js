import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      emoji: emoji.getUnicode(`${props.emoji}`),
      removed: false,
    }
  }

  render() {
    return (
      <div className="card">
        <h4>Card</h4>
        <p>{this.state.text}</p>
        <p>{this.state.emoji}</p>
          {/* delete me button */}
      </div>
    )
  }
}


Card.propTypes = {

  // message text, required

  
};

export default Card;
