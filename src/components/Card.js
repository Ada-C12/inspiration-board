import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  deleteCard = () => {
    this.props.removeCardCallBack(this.props.cardData.id);
  }

  render() {
    const symbol = this.props.cardData.emoji;
    const text = this.props.cardData.text;
    return (
      <section className="card card__content">
        <p className="card__content-text">{text}</p>
        <p className="card__content-emoji">{(symbol) ? emoji.getUnicode(symbol) : ""}</p>
        <section>
          <button
            className="card__delete"
            type="button"
            aria-label="Close"
            onClick={this.deleteCard}
          >
            Delete
        </button>
        </section>
      </section>
    )
  }
}

Card.propTypes = {
  removeCardCallBack: PropTypes.func,
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    emoji: PropTypes.string,
  })
};

export default Card;