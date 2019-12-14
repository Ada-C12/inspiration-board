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
      error: '',
    };
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/hallie/cards')
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.cause });
      });
  }

  addCard = (card) => {
    axios.post("https://inspiration-board.herokuapp.com/boards/hallie/cards", card)
      .then((response) => {
        console.log(response.data);
        const { cards } = this.state;
        cards.push(response.data);
        this.setState({
          cards,
          error: undefined,
        });
      })
      .catch((error) => {
        this.setState({ 
          error: error.cause,
         });
      });
  }

  deleteCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${ cardId }`)
      .then((response) => {
        const cards = this.state.cards.filter((card) => card.card.id !== cardId);
  
        this.setState({
          cards,
        });
      })
      .catch((error) => {
        this.setState({ error: error.cause });
      });
  };

  render() {

    const getCards = this.state.cards.map((card) => {
        return (
          <div key={card.card.id} >
        <Card 
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          deleteCardCallback={this.deleteCard}
        /></div>
        )
      });
  
    return (
      <section >
      <div className="board">
        {getCards}
      </div>
      <div>
        <NewCardForm addCardCallback={this.addCard} />
      </div>
      </section> 
    )
  }

}

// Board.propTypes = {
//   url: propTypes.string,
//   boardName: propTypes.string,
// };

export default Board;
