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
    };
  }

  // addCard = (card) => {
  //   console.log('card = ', card);
  //   axios.post({url}, card)
  //     .then((response) => {
  //       // We can update the state so we don't need to make another GET request
  //       const updatedCards = this.state.cards;
  //       updatedCards.push(response.data);
  //       this.setState({
  //         cards: updatedCards,
  //       });
  //     })
  //     .catch((error) => {
  //       // Use the same idea we had in our GET request
  //       this.setState({ error: error.message });
  //     });
  // };

  render() {
    return (
      <div>
        <Card />
      </div>
    )
  }

}

Board.propTypes = {
  // url: propTypes.string,
  // boardName: propTypes.string,
};

export default Board;
