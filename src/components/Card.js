import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: props.id,
      id: props.id,
      text: props.text,
      emoji: emoji.getUnicode(`${props.emoji}`),
      removed: false,
      deletion: props.onDeleteCardCallback,

    }
  }

  render() {
    return (
      <div className="card">
        <h4>Card</h4>

        <p>{this.state.text}</p>
        <p>{this.state.emoji}</p>

        <button
          type="button"
          className="card__delete"
          aria-label="Delete"
          onClick={ () => {this.state.deletion(this.state.id)}}>
          Delete
          </button>
          {/* delete me button */}
      </div>
    )
  }
}


Card.propTypes = {

  // message text, required

  
};

export default Card;
