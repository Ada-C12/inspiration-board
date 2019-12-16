import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount(){
    this.listCards()
  }


  listCards() {
    axios.get('https://inspiration-board.herokuapp.com/boards/v-board/cards')
    .then((response) => {
      const cards = response.data.map((obj) => {
        return obj.card
      });
  
      this.setState({
        cards: cards
      });
    })
    .catch((error) => {
      this.setState({
        error: 'Sorry, something went wrong'
      });
    });
  }

  deleteCard= (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)

    .then((response) => {
      this.listCards()
    })

    .catch((error) => {
      this.setState({
        error: 'Something went awry!'
      });
    });
  }

  render() {
    const cards = this.state.cards.map((card, i) => {
      return <Card
              key={i}
              id={card.id}
              text={card.text}
              emoji={card.emoji}
              deleteCallback = {() => {this.deleteCard(card.id)}}
            />;
      });
    return (
      <div>
        Board
        <div className='board'>
          {cards}
        </div>
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
