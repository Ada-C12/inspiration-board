import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: undefined,
    };
  }

  componentDidMount() {
    const { url, boardName } = this.props;
    const allCards = `${url}${boardName}/cards`;

    axios.get(allCards)
      .then((response) => {
        const responseData = response.data;
        console.log('successfully retrieved:', responseData);
        this.setState({
          cards: responseData,
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('error:', errorMessage);
        this.setState({
          error: errorMessage,
        })
      });
  }

  makeCardCollection = (cardData) => {
    return cardData.map((card, i) => {
      return <Card 
        data={ card.card } 
        key={ i }
      />
    });
  }

  render() {
    return (
      <div className="board">
        {this.makeCardCollection(this.state.cards)}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
