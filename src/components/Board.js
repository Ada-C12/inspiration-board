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
      error: undefined,
    };
  }
  
  componentDidMount() {
    const url = `${this.props.url}${this.props.boardName}/cards`

    axios.get(url)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  deleteCard = (cardId) => {
    const url = `https://inspiration-board.herokuapp.com/cards/${ cardId }`
    axios.delete(url)
      .then((response) => {
        const cardList = this.state.cardList.filter((card) => card.id !== cardId);

        this.setState({
          cardList,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const cards = this.state.cards

    const cardCollection = cards.map((item, i) => {
      return (
        <Card key={i} id={item.card.id} text={item.card.text} emoji={item.card.emoji} deleteCardCallback={this.deleteCard}/>
      );
    });

    return (
      <div className="board">
        {cardCollection}
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
