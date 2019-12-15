import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardName: props.boardName,
      cards: CARD_DATA.cards,
      // cards: [props.cards],
    };
  }

    parseCards = (cards) => {
      return cards.map((card) => {
        return <Card text={card.text} emoji={card.emoji}/>
        }
      )
    }

  render() {
    return (
      <div>
        <h3>Board</h3>
        <div>
        {this.parseCards(this.state.cards)}
        </div>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
