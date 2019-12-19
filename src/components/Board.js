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
      errorMessage: '',
    };
  }

  componentDidMount () {
    axios.get(`${this.props.url+this.props.boardName}/cards`)
    .then((response) => {
      this.setState({
        cards: response.data
      });
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    })
  }

  addCard = (card) => {    
    axios.post(`${this.props.url}/${this.props.boardName}/cards`, card)
      .then((response) => {
        const updatedData = this.state.cards;
        updatedData.push(response.data);

        this.setState({
          cards: updatedData,
          error: ''
        });
      })

      .catch((error) => {
        this.setState({
          errorMessage: error.message
        });
      });
  }

  deleteCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
      .then((response) => {
        const updatedCards = this.state.cards.filter((card) => card.id!== cardId);

        this.setState({
          cards: updatedCards
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  makeCollection () {
    const cardList = this.state.cards.map((card, i) => {
      return <Card
      id={card.card.id}
      text={card.card.text}
      emoji={card.card.emoji}
      deleteCardCallback={this.deleteCard}
      key={i}
      />;
    }
    );
    return cardList
  }

  render() { 
    const errorDisplay =  this.state.errorMessage ? (
      <section className="validation-errors-display">
        Error: {this.state.errorMessage}}
      </section>
    ) : '';
  
    return (
      <section>
        <div>
          {errorDisplay}
        </div>
        <div>
          <NewCardForm addCardCallback={this.addCard}/>
        </div>
        <div className="board">
          {this.makeCollection()}
        </div>
      </section>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string
};

export default Board;
