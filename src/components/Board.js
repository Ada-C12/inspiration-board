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
      error: ''
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

  parseCards = (cards) => {
    if (cards == undefined) {return ''}
    else {
      return cards.map((card) => {
        // return <Card text={card.text} emoji={card.emoji}/>
        // } // built for card-coded json. Needs different parsing for API
        return <Card text={card.card.text} emoji={card.emoji}/>
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
