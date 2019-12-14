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
      cards: []

       
    };
  }
  // wave#2
  componentDidMount() {
    // API get request here
    axios.get('https://inspiration-board.herokuapp.com/boards/Yasmin/cards')
      .then((response) => {
        this.setState({
         cards: response.data,
        });
        console.log(this.state.cards)
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }


  render() {
    const cards = this.state.cards.map((card, i) =>{
      // console.log(card)
      return (
        <Card
        key={i}
        text={card.card.text}
        emoji={card.card.emoji}

        />
      );
    });

    return (
      <div>
        { cards }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
