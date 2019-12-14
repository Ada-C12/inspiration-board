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
    axios.get(`${this.props.url}/boards/${this.props.boardName}/cards`)
    .then((response) => {
      let cardData = []

      Object.keys(response.data).forEach((element) => {
        const { emoji, text, id } = response.data[element].card
        
        cardData.push({
          id: id,
          text: (text === null ? '' : text),
          emoji: (emoji === null ? '' : emoji),
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

  buildCards = () => {
    const cardElements = this.state.cards.map((card) => {
      return <Card 
        key={card.id}
        identifier={card.id}
        text={card.text}
        emoji={card.emoji}
        onButtonClick={this.deleteCard}
      />
    });

    return cardElements;
  }


  addCard = (card) => {
    axios.post(`${this.props.url}/boards/${this.props.boardName}/cards`, card)
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
  }

  deleteCard = (identifier) => {
    axios.delete(`${this.props.url}/cards/${identifier}`)
      .then((response) => {
        const cards = this.state.cards.filter((card) => card.id !== identifier );
    
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
