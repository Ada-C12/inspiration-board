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
      const curEmoji = this.state.emoji;
      return emoji.getUnicode(curEmoji)
    }
  }

  render() {
    return (
      <div className="card">
        {this.state.text}
        {this.renderEmoji()}
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
