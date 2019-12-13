import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  makeCardCollection = (cardData) => {
    return cardData.map((card, i) => {
      return <Card 
        data={ card } 
        key={ i }
      />
    });
  }

  render() {
    return (
      <div className="board">
        {this.makeCardCollection(CARD_DATA.cards)}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
