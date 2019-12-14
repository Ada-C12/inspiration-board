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
      error: '',
      newCardForm: {text: '', emoji: ''}
    };
  }
  
  componentDidMount() {
    console.log('componentDidMount ran');
    
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

  addCard = (data) => {
    console.log('addCard in Board ran');
    console.log('state in Board is ' + this.state.newCardForm.text + ' the end');
    
    const newCard = {card: data};
    const cards = this.state.cards;
    cards.push(newCard);
    this.setState({
      cards: cards,
      newCardForm: {text: '', emoji: ''}
    })
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
          {cards}
          <div>
            <NewCardForm addCard={this.addCard} newCardForm={this.state.newCardForm}></NewCardForm>
          </div>
        </div>
      )
    }
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
