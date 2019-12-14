import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    
    this.state = {
      cards: [],
      hardcodedCards: CARD_DATA.cards
    };
  }

  makeCollection () {
    const hardcodedCardsCollection = this.state.hardcodedCards.map((card, i) => {
      return <Card
        cardText={card.text}
        cardEmoji={card.emoji}
        key={i}
      />;
    }
    );
    return hardcodedCardsCollection
  }

  render() {
    return (
      <div>
        Board
        {this.makeCollection()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
