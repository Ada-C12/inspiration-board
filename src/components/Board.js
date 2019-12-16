import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';
import Axios from 'axios';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error: '',
    };
  }

  componentDidMount() {
    const myCards = `${this.props.url+this.props.boardName}/cards`
    Axios.get(myCards).then((response) => {
      this.setState({
        cards: response.data.map(r => r.card),
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });    
    });
  }

  deleteCard = (id) => {
    const cardURL = `https://inspiration-board.herokuapp.com/cards/${ id }`
    
    axios.delete(cardURL)
    .then(res => {
      const updatedCards = this.state.cards.filter((card) => {
        return card.id !== id;
      });

      this.setState({ 
        cards: updatedCards
      });
    })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  addCard = (card) => {
    const myCards = `${this.props.url+this.props.boardName}/cards`

    axios.post(myCards, card)
      .then((response) => {
        const updatedData = this.state.cards;
        updatedData.push(response.data.card);
        this.setState({
          cards: updatedData,
          error: ''
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
    
  makeCollection() {
    const emoji = require("emoji-dictionary");
    const cardsCollection = this.state.cards.map((card, i) => {

      if (card.emoji) {
        const name = card.emoji
        return < Card
          key={i} 
          text={card.text} 
          emoji={emoji.getUnicode(name)} 
          id={card.id}
          deleteCard={this.deleteCard}
          />
      } else if ( card.Emoji ) {
        const name = card.Emoji
        return < Card
          key={i} 
          text={card.text} 
          emoji={emoji.getUnicode(name)} 
          id={card.id}
          deleteCard={this.deleteCard}/>
      } else {
        return < Card
          key={i} 
          text={card.text}  
          id={card.id}
          deleteCard={this.deleteCard}/>
      }
    });

    return cardsCollection
  } 

  render() {
    return (
      <div className="board">
        {this.makeCollection()}
        <NewCardForm addCard={this.addCard}/>
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
