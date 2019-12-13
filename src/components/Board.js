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
        const newCards = response.data.map((c) => {
          return {
            text: c.card.text,
            emoji: c.card.emoji,
            id: c.card.id,
          }
        })
        this.setState({ cards: newCards });
      })
      .catch((error => {
        this.setState({ error: error.message });
      }));
  }

  addCard = (card) => {
    axios.post(`${this.props.url}/${this.props.boardName}/cards`, card)
      .then((response) => {
        const newCardList = this.state.cards
        newCardList.push(card)

        this.setState({
          cards: newCardList
        })
      })
      .catch((error) => {
        this.setState({ error: error.message })
      })
  }

  deleteCard = (cardId) => {
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards.filter((card) => card.id !== cardId),
    });
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
      .then((response) => {
        if (response.status === 'error') {
          this.setState({
            cards: currentCards,
          });
        }
      })

    // axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
    //   .then((response) => {
    //     // console.log(`${cardId} THIS IS THE ID!!!!!!`)
    //     const cardList = this.state.cards.filter((cardInfo) => cardInfo.card.id !== cardId);

    //     this.setState({
    //       cardList,
    //     });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: error.message });
    //   });
  };

  render() {
    // <NewCardForm addCardCallback={this.addCard} />
    const cards = this.state.cards.map((card, i) => {
      return (
        <Card 
          key={i}
          id={card.id}
          text={card.text}
          emoji={card.emoji}
          deleteCard={this.deleteCard} />
      );
    });
    return (
      <section>
        <div className=".validation-errors-display__list">
          {this.state.errors}
        </div>

        <div className="board">
          { cards }
          <NewCardForm addCardCallback={this.addCard} />
        </div>
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string,
};

export default Board;
