import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}`)
    .then((response) => {
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  deleteCard = (selectedCard) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${selectedCard.id}`)
      .then((response) => {
        const newCards = this.state.cards.filter((object) => {
          return object.card.id !== selectedCard.id;
        });

        this.setState({
          cards: newCards,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  addCard = (card) => {
    axios.post('https://inspiration-board.herokuapp.com/boards/kristina/cards', card)
      .then((response) => {
        const updatedData = this.state.cards;
        updatedData.push(response.data);
        this.setState({
          cards: updatedData,
          error: '',
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  listCards(cards) {
    let cardElements
    
    if (cards.length === 0 || cards === undefined) {
      return "";
    }
    else {
      cardElements = cards.map((card, i) => {
        return (
          <Card
            key={i}
            deleteCard={this.deleteCard}
            {...card}
          />
        );
      });
    }

    return cardElements;
  }
  

  render() {
    return (
      <div>
        <ul>
          { this.listCards(this.state.cards) }
        </ul>
        <section>
          <NewCardForm 
            addCard={this.addCard}
          />
        </section>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
