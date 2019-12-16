import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    }
  }

  getEmoji = (code) => {
    if (code !== null) {
    return (
    emoji.getUnicode(code)
    )
    }
  };
  render() {
    console.log(this.props.id);
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div className="card__content-emoji">
            {this.getEmoji(this.props.emoji)}
          </div>
          <button
          type="button"
          className="btn card__delete"
          label="Delete"
          onClick={() => { this.props.deleteCardCallback(this.props.id) }}
        >Delete</button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
