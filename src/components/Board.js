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
      cards: CARD_DATA.cards,
    };
  }

  makeCollection () {
    const cardCollection = this.state.cards.map((card, i) => {
      console.log(card)
      return <Card 
      cardText={card.text}
      cardEmoji={card.emoji}
      key={i}
      />
    });
     
    return cardCollection
    
  }


  render() {
    return (
      <div>
         {this.makeCollection()}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
