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

    const cards = CARD_DATA.cards

    this.state = {
      cards: cards,
    };
  }

  render() {
    const mappingCards = this.state.cards.map ((card, i) => {
      return  (
        <Card text={card.text} emoji={card.emoji} key={i}/>
      )
    });
    return (
      <div>
        { mappingCards }
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
