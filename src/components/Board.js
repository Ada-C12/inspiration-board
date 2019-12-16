import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardName: props.boardName,
      url: props.url,
      // cards: CARD_DATA.cards, // built for hard-coded json, needs different parsin for API
      cardList: [],
      error: '',
      
    };
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/c-gutierrez/cards')
    .then((response) => {
      this.setState({
        cardList: response.data})
    })
    .catch((error) => { 
    this.setState ({error: error.message})
    });
  }

  deleteCard = (id) => {
    // this portion of the method updates the local list of active cards
    const allCards = this.state.cardList
    let filtered = []
    console.log(this.state.cardList)
    allCards.forEach ((card) => {
      if (card.card.id != id) {
      filtered.push(card)
      }
    })
    this.setState({cardList: filtered}) 

    //this portion of the method updates the database through an API call
    axios.delete(`https://inspiration-board.herokuapp.com/cards/:card_id/${id}`)
    .then((response) => {
      this.setState({
        cardList: response.data})
    })
    .catch(() => { 
    this.setState ({error: "Something went wrong. "})
    });
    
  }

  parseCards = (cards) => {
    if (cards == undefined) {return ''}
    else {
      return cards.map((card) => {
        // return <Card text={card.text} emoji={card.emoji}/>
        // } // built for card-coded json. Needs different parsing for API
        return (
          <Card
            key={card.card.id}
            id={card.card.id}
            text={card.card.text}
            emoji={card.card.emoji}
            onDeleteCardCallback={this.deleteCard}/>)
      })
    }
  }

  render() {
    if (this.state.cardList === []) {
      return ""
    }
    else {
      return (
        <div>
          <h3>Board</h3>
          <div>
          {this.parseCards(this.state.cardList)}
          </div>
        </div>
      )
    }
  }

}

Board.propTypes = {

};

export default Board;
