import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
//import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: undefined,
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
    .then((response) => {
      let cardData = []

      Object.keys(response.data).forEach((element) => {

        const { emoji, text } = response.data[element].card
        const elementText = (text === null ? '' : text)
        const elementEmoji = (emoji === null ? '' : emoji)

        cardData.push({
          text: elementText,
          emoji: elementEmoji
        })
      })

      this.setState({ 
        cards: cardData,
        error: undefined
      });

    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  addCard = (card) => {
    axios.post(`${this.props.url}/${this.props.boardName}/cards`, card)
    .then((response) => {

      const { cards } = this.state;
      cards.push({
        text: response.data.text,
        emoji: response.data.emoji});

      this.setState({ 
        cards,
        error: undefined
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message,
      })
    });

    console.log(this.state.cards)
  }

  deleteCard = () => {
    
  }


  buildCards = () => {
    const cardElements = this.state.cards.map((card, i) => {
      return <Card 
        key={card.id}
        identifier={i}
        text={card.text}
        emoji={card.emoji}
        onButtonClick={this.deleteCard}
      />
    });

    return cardElements;
  }

  render() {
    return (
      <div>
        <div className="board">
          {this.buildCards()}
        </div>

        <NewCardForm addCardCallback={this.addCard} />
      </div>
    )
  }
 
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
