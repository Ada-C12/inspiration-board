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
//      cards: CARD_DATA.cards,
      url: props.url,
      boardName: props.boardName,
      board: [],
      error: ''
    };
  }


  componentDidMount () {
    axios.get(this.state.url+this.state.boardName+'/cards')
    .then((response) => {
      this.setState({ board: response.data });
      console.log(this.state.board)
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(this.state.error)
    });
  }

  makeCollection () {
    const cardCollection = this.state.board.map((card, i) => {
      return <Card
      key={i}
      text={card.card.text}
      emoji={card.card.emoji/* || card.Emoji*/}/>;
    });
    return cardCollection
  }

  render() {
    return (
      <ul className="board">
        {this.makeCollection()}
      </ul>
    )
  }
}

Board.propTypes = {

};

export default Board;
