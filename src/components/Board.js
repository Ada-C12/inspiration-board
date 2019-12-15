import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
/* import CARD_DATA from '../data/card-data.json'; */



class Board extends Component {
  constructor(props) {
    super(props);
    
    /*const cards = CARD_DATA.cards;

    this.state = {
      cards: cards
    } */ 

    this.state = {
      cards: [],
      errors: ''
    }

  }

  componentDidMount() {
    axios.get(' https://inspiration-board.herokuapp.com/boards/Mariya/cards')
      .then((response) => {
        this.setState({
          cards: response.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      });
  }

  deleteCardCallack = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
      .then(() => {
        const updatedCards = this.state.cards.filter((card) => card.card.id !== cardId);

        this.setState({
          cards: updatedCards,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({error: error.message});
      });

  };


  render() {
    const cardEntries = this.state.cards.map((cardObject, i) => {
      return (
        <Card text={cardObject.card.text} emoji={cardObject.card.emoji} key={i} deleteCardCallack={this.deleteCardCallack} id={cardObject.card.id}/>
      )
    });

    return (
      <div>
        { cardEntries }
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
  


};

export default Board;
