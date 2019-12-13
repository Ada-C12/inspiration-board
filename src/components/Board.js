import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: undefined,
      success: undefined,
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
          error: undefined,
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('error:', errorMessage);
        this.setState({
          error: errorMessage,
          success: undefined,
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

  addCard = (card) => {
    console.log('attempting to add card', card);

    const { url, boardName } = this.props;
    const allCards = `${url}${boardName}/cards`;

    axios.post(allCards, card)
      .then((response) => {
        const responseData = response.data;
        console.log('successfully added: ', responseData);

        const { cards } = this.state;
        cards.push(responseData);

        this.setState({
          cards,
          success: 'Successfully added new card',
          error: undefined,
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        this.setState({
          error: errorMessage,
          success: undefined,
        })
      })
  }

  render() {
    return (
      <section>
        <section className="flash-wrapper">
          <div className="error-message-wrapper">
            { this.state.error
              ? <div className="error-message">{this.state.error}</div>
              : ''}
          </div>
          <div className="success-message-wrapper">
            { this.state.success
              ? <div className="success-message">{this.state.success}</div>
              : ''}
          </div>
        </section>
        <div className="board">
          {this.makeCardCollection(this.state.cards)}
        </div>
        <NewCardForm addCard={this.addCard} />
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
