import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
//import NewCardForm from './NewCardForm';
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
          text : elementText,
          emoji : elementEmoji
        })
      })

      this.setState({ 
        cards: cardData,
        error: undefined
      });

      console.log(this.state.cards)

    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  buildCards = () => {
    const cardElements = this.state.cards.map((card) => {
      return <Card 
        key={card.id}
        text={card.text}
        emoji={card.emoji}
      />
    });

    return cardElements;
  }

  render() {
    return (
      <div className="board">
        {this.buildCards()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
