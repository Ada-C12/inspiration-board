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
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
      .then((response) => {
        const newCards = response.data.map((card) => {
          return {
            text: card.card.text,
            emoji: card.card.emoji,
            id: card.card.id,
          }
        })
        this.setState({ cards: newCards });
      })
      .catch((error => {
        this.setState({ error: error.message });
      }));
  }

  render() {
    const cards = this.state.cards.map((card, i) => {
      return (
        <Card 
          key={i}
          id={card.id}
          text={card.text}
          emoji={card.emoji}/>
      )
    })
    return (
      <div>
        { cards }
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string,
};

export default Board;
