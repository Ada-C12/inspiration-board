import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      boardName: "",
      cards: [],
    };
  }

  removeCard = (cardId) => {
    axios.delete(`${this.props.url}/cards/${cardId}`)
      .then((response) => {
        const cards = this.state.cards.filter((cardItem) => cardItem.card.id !== cardId);
        this.setState({ cards, });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  addCard = (card) => {
    const url = `${this.props.url}/boards/${this.props.boardName}/cards`
    axios.post(url, card)
      .then((response) => {
        const updatedCards = this.state.cards;
        updatedCards.push(response.data);
        this.setState({
          cards: updatedCards,
          error: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }
  
  getUpdatedData = () => {
    const cardUrl = `${this.props.url}/boards/${this.props.boardName}/cards`;
    axios.get(cardUrl).then((response) => {
      this.setState({
        cards: response.data,
        boardName: this.props.boardName,
      })
    }).catch((error) => {
      this.setState({ error: 'Sorry, something went wrong' })
    })
  }

  componentDidMount() {
    this.getUpdatedData();
  }

  componentDidUpdate() {
    if (this.state.boardName !== this.props.boardName) {
      console.log("UPDATING...")
      this.getUpdatedData();
    }
  }

  render() {
    const cards = this.state.cards.map((cardItem, i) => {
      return (
        <section key={i}>
          <Card
            cardData={cardItem.card}
            removeCardCallBack={this.removeCard}>
          </Card>
        </section>)
    });

    return (
      <section>
        <h3>Board: {this.props.boardName}</h3>
        <NewCardForm addCardCallBack={this.addCard}></NewCardForm>

        <section className="board">{cards}</section>
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};
export default Board;
