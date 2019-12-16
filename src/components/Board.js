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
      error: undefined
    };
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName + '/cards')
      .then((response) => {
        this.setState({
          cards: response.data
        })
      }).catch(() => {
        this.setState({
          error: 'Sorry! Sth went wrong.'
        })
      })
  }

  componentDidUpdate() {
    axios.get(this.props.url + this.props.boardName + '/cards')
      .then((response) => {
        this.setState({
          cards: response.data
        })
      }).catch(() => {
        this.setState({
          error: 'Sorry! Sth went wrong.'
        })
      })
  }
  
  addCard = (card) => {
    axios.post(this.props.url + this.props.boardName + '/cards', card)
      .then((response) => {
        const {cards} = this.state
        cards.push(response.data)
        this.setState({cards})
      })
      .catch(() => {
        this.setState({
          error: 'Sorry! Sth went wrong.'
        })
      }) 
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then(() => {
        const cards = this.state.cards.filter((card) => {
          return card.card.id !== id
        })
        this.setState({cards})
      })
      .catch(() => {
        this.setState({
          error: 'Sorry! Sth went wrong.'
        })
      }) 
  }

  render() {
    const cardCollections = this.state.cards.map((card, i) => {
      return (
        <Card
          key={i}
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          deleteCardCallback={this.deleteCard}
        />
      )
    })

    return (
      <div>
        <h1>Board</h1>
        <h1>{this.state.error}</h1>
        <NewCardForm addCardCallback={this.addCard}/>
        {cardCollections}
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
