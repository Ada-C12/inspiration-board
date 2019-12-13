import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDict from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  onDeleteClick = () => {
    const { id } = this.props.data;
    this.props.deleteCard(id);
  }

  render() {
    const {text, emoji} = this.props.data;

    return (
      <div className="card">
        <div className="card__content">
          <span className="card__content-text">
            { text ? text : '' }
          </span>
          <span className="card__content-emoji">
            { emoji ? emojiDict.getUnicode(emoji) : '' }
          </span>
          <button className="card__delete" onClick={this.onDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
