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
      error: '',
    };
  }

  componentDidMount() {
    axios.get(`https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`)
    .then((response) => {
      const allCards = response.data.map((object) => {
        return object.card
      })
      this.setState({ cards: allCards });
    })
  .catch((error) => {
    this.setState({ error: error.message });
  });
  }

  deleteCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
    .then(() => {
      const cardList = this.state.cards.filter((card) => card.id !== cardID);
      this.setState({ cards: cardList });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  };

  render() {
    return (
      <div>
        Board
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
