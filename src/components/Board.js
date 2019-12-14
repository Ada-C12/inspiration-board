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
      cards: [],
      error: ''
    };
  }
  
  componentDidMount() {
    axios.get(this.url + this.boardName + '/cards')
      .then(response => {
        this.setState({
          cards: response.data
        })
      })
      .catch(error => {
        this.setState({
        error: error
        })        
    })
  }
  addCard = (newCard) => {
    console.log(newCard);
    const cards = this.state.cards;
    cards.push({ text: newCard.text, emoji: newCard.emoji });
    this.setState({
      cards: cards
    })
    console.log(cards);
    
  }
  render() {
    
    const cards = this.state.cards.map((card, i) => {
      card = card.card;
        return (
          <Card key={i} {...card} ></Card>
        )
      })

    if (this.state.error) {
      return (
        <div className="header__text">
          {this.state.error.message}
        </div>
      )
    } else {
      return (
        <div className="board">
          <div>
            <NewCardForm addCard={this.addCard}></NewCardForm>
          </div>
          {cards}
        </div>
      )
    }
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired

};

export default Board;
