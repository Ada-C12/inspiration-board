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
      cards: CARD_DATA["cards"],
    };
  }

  makeCards () {
    
    const cardCollection = this.state.cards.map((card, i) => {
      return <Card 
        key={i}
        text={card.text}
        cardEmoji={card.emoji}
      />;
    });
    return cardCollection
  }
  
  render() {
    return (
      <div class="board">
          {this.makeCards()}
      </div>
    );
  }
}

Board.propTypes = {

};

export default Board;
