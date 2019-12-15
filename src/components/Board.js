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
      error: '',
    };
  }

  deleteCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${ cardId }`)
      .then((response) => {
        const updatedCards = this.state.cards.filter((card) => card.card.id !== cardId);
  
        this.setState({
          cards: updatedCards,
        });
      })

      .catch((error) => {
        this.setState({ error: error.message });
      });
  };


  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/georgina/cards')
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  makeCardsCollection () {
    const cardsCollection = this.state.cards.map((card, i) => {
      return <Card
        id={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        deleteCardCallback={this.deleteCard}
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
