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
      hardcodedCards: CARD_DATA.cards
    };
  }

  componentDidMount() {
    const {url, boardName} = this.props;
    
    const boardCards = `${url}${boardName}/cards`;
    axios.get(boardCards)
      .then((response) => {
        console.log(response.data)
        this.setState({ 
          // setState replaces the initial value of cards
          cards: response.data 
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message 
        });
      });
  }

  makeCollection () {
    const apiCards = this.state.cards.map((card, i) => {

      return <Card
        cardText={card.card.text}
        cardEmoji={card.card.emoji}
        key={i}
      />;
    }
    );
    return apiCards
  }

  render() {
    return (
      <div>
        Board
        {this.makeCollection()}
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
