import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import { all } from 'q';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  allCards = CARD_DATA

  makeCardsCollection () {
    let updatedCards = this.state.cards
    this.allCards.cards.forEach(card => {
      updatedCards.push(card);
    });
    
    const cardsCollection = this.state.cards.map((card, i) => {
      return <Card
        text={card.text}
        emoji={card.Emoji}
        key={i}
      />;
    }
    );
    return cardsCollection
  }

  render() {
    return (
      <div>
        <ul>
          {this.makeCardsCollection()}
        </ul>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
