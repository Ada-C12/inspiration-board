import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {

    let displayEmoji = (this.props.emoji) ? emoji.getUnicode(this.props.emoji) : '';
    const { deleteCard, id, text } = this.props;
    console.log(this.props);
    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{id}</p>
          <p className="card__content-text">{text}</p>
          <p className="card__content-emoji">{displayEmoji}</p>
          <button
            type="button"
            className="card__delete"
            aria-label="Delete"
            onClick={() => { deleteCard(id)}}
            >
              Delete Card
            </button>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  deleteCard: PropTypes.func,
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
