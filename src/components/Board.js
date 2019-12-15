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
    this.getCards()
  }
  getCards = () => {
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
  addCard = (text, emoji)=> {
    axios.post(`https://inspiration-board.herokuapp.com/boards/Yasmin/cards?text=${text}&emoji=${emoji}`)
      .then((response) => {
        // console.log(response)
        this.getCards()
      });
  };


  onDeleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`, id)
      .then((response) => {
        // console.log(response)
        this.getCards()
      });
  };
      
  render() {
    const cards = this.state.cards.map((card) =>{
      // console.log(card)
      return (
        <Card
        key={card.card.id}
        id={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        onDeleteCard={this.onDeleteCard}
       
        />
      );
    });

    return (
      <div>
        { cards }
        <NewCardForm addCard= {this.addCard}/>
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
