import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: ''
    };
  }

  componentDidMount = () => {
    axios.get('https://inspiration-board.herokuapp.com/boards/takenote/cards')
      .then((response) => {
        console.log('cards received')
        this.setState({
          cards: response.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({error: error.message});
      });
  }
  
  makeCards () {  
    const cardCollection = this.state.cards.map((card, i) => {
      return <Card 
        key={i}
        text={card.card.text}
        cardEmoji={card.card.emoji}
        deleteCardCallback={this.deleteCard}
      />;
    });
    return cardCollection
  }

  deleteCard = (cardId) => {
     axios.delete('https://inspiration-board.herokuapp.com/cards', cardId)
    .then((response) => {
      console.log(response.data);
      const { cards } = this.state;
      cards.filter(card => card.id !== cardId)
      this.setState({
        cards,
        error: undefined,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message,
      })
    })
  }

  addCard = (card) => {
    axios.post('https://inspiration-board.herokuapp.com/boards/takenote/cards', card)
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
        error: error.message,
      })
    })
  }
  
  render() {
    return (
      <div class="board">
          {this.makeCards()}
          <NewCardForm addCardCallback={this.addCard}/>
      </div>
    );
  }
}

Board.propTypes = {

};

export default Board;
