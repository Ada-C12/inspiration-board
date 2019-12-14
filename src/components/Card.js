import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  // constructor(props) {
  //   super(props);
  // }

  emojiPresent () {
    const emoji = require('emoji-dictionary');
    return emoji.getUnicode(this.props.cardEmoji)
  }

  render() {
    return (
      <div className="card">
        
        {this.props.cardText}

        {this.props.cardEmoji ? this.emojiPresent(): ''}
      </div>
    )
  }
}


Card.propTypes = {

};

export default Card;
