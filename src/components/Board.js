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

  deleteCard = (cardId) => {
    axios.delete(`${this.props.url}/${this.props.boardName}/${cardId}`)
      .then((response) => {
        const cardList = this.state.cards.filter((card) => card.id !== cardId);

        this.setState({
          cardList,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const cards = this.state.cards.map((card, i) => {
      return (
        <Card 
          key={i}
          id={card.id}
          text={card.text}
          emoji={card.emoji}
          deleteCallback={this.deleteCard} />
      )
    })
    return (
      <section>
        <div className=".validation-errors-display__list">
          {this.state.errors}
        </div>

        <div className="board">
          { cards }
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
