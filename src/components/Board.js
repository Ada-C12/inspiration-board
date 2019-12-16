import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error: '',
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then((response) => {
      this.setState({
        cards:response.data
      })
    })
    .catch((error) => {
      this.setState({
        error: 'An error occured'
      })
    });
  }

  allCards() {
    return (this.state.cards.map((card) => {
      return (
        <Card
          key={card.card.id}
          {...card.card}
          deleteCardCallback={() => {this.deleteCard(card.card.id)}}
        />
      )
    }))
  };

  deleteCard = (cardID) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardID}`)
    .then((response) => {
      const updatedCards = this.state.cards.filter((card) => card.card.id !== cardID);

      this.setState({
        cards: updatedCards,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  };

  addCard = (card) => {
    axios.post(`${this.props.url}${this.props.boardName}/cards`,card)
      .then((response) => {
        const updatedData = this.state.cards;
        updatedData.push(response.data);
        this.setState({
          cards: updatedData,
          error: '',
        });
      })
      .catch((error) => {
        this.setState({error: error.message});
      });
  }

  render() {
    return (
      <main>
        <section className="">
          <NewCardForm 
            addCardCallback={this.addCard}
          />
        </section>

        <section>
          {this.allCards()}
        </section>

      </main>
    )
  }

}

Board.propTypes = {
  key: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  addCardCallback: PropTypes.func,
  deleteCardCallback: PropTypes.func,
};

export default Board;
