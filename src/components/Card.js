import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Card.css';
const Emoji = require("emoji-dictionary");

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { text, emoji } = this.props.card;

    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{ text }</p>
          <p className="card__content-emoji">{ Emoji.getUnicode(`${emoji}`) }</p>
        </section>
        <button onClick={this.props.deleteCard.bind(this, this.props.card)} type="button">Delete</button>
      </div>
    )
  }
}

Card.propTypes = {
  cards: PropTypes.array,
  deleteCard: PropTypes.func,
};

export default Card;
