import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super();
    this.url = props.url;
    this.boardName = props.boardName;
    this.state = {
      cards: CARD_DATA.cards,
    };
  }
  
  render() {
    const cards =
      this.state.cards.map((card, i) => {
        return (
          <Card key={i} {...card} ></Card>
        )
      })
  
    return (
      <div className="board">
        Board for {this.boardName}
        {cards}
        <Card className="card"></Card>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired

};

export default Board;
