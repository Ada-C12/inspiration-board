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

  componentDidMount() {
    this.defaultCards();
  }

  defaultCards() {
    const defaultCards = CARD_DATA.cards;
    this.setState({cards: defaultCards});
  }

  render() {
    console.log(this.state.cards)
    const makeCards = (cards) => {
      return cards.map ((card, i) => {
        return <Card
          key={i}
          text={card.text}
          emoji={card.emoji}
        />
      });
    }

    return (
      <div className="board">
        {makeCards(this.state.cards)}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
