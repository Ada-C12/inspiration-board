import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  deleteCard = (event) => {
    event.preventDefault();
    this.props.deleteCardCallback(this.props.id)
  }

  render() {
    return (
      <div className="card">
        Card
        {this.props.text}
        {this.props.emoji ? emoji.getUnicode(this.props.emoji) : null}
        <button onClick={this.deleteCard}>Delete Card</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
