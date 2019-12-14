import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const cardCollection = (cards) => {
  return cards.map((card) => {
    return <Card
      text={card.card.text}
      emoji={card.card.emoji}
      // delete={this.deleteCard}
      key={card.card.id}
    />;
  });
}

class Board extends Component {
  constructor(props) {
    super(props);

    console.log(props.cardsList);
  }

  render() {
    return (
      <div>
    <h3>Board</h3>
      {cardCollection(this.props.cardsList)}
      </div>
    );
  }
}

Board.propTypes = {
};

export default Board;
