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
      error: undefined,
    };
  }
  
  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/dianna/cards')
      .then((response) => {

        console.log(response.data)


        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const cards = this.state.cards

    const cardCollection = cards.map((item, i) => {
      return (
        <Card key={i} text={item.card.text} emoji={item.card.emoji} />
      );
    });

    return (
      <div className="board">
        {cardCollection}
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
