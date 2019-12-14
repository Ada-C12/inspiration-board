import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
//import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  buildCards = () => {
    const cardElements = CARD_DATA.cards.map((card) => {
      return <Card 
        key={card.id}
        text={card.text}
        emoji={card.emoji}
      />
    });

    return cardElements;
  }

  render() {
    return (
      <div className="board">
        {this.buildCards()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
