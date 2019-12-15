import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      emoji: props.emoji,
    }
  }

  renderEmoji () {
    if (this.state.emoji) {
      console.log('rendering emoji')
      const curEmoji = this.state.emoji;
      return emoji.getUnicode(curEmoji)
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">{this.state.text}</div>
          <div className="card__content-emoji">{this.renderEmoji()}</div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
