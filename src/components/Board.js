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
      error: '',
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards` )
      .then((response) => {
        this.setState({cards: response.data});
      }) 
      .catch((error) => {
        this.setState({
          error: error.message
        })
      });
  }

  deleteCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
      .then(() => {
        const cardList = this.state.cards.filter((card) => 
          card.card.id !== cardId
        )
        
        this.setState({
          cards: cardList,
          error: '',
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      });
  };

  addCard = (card) => {
    axios.post(`${this.props.url}${this.props.boardName}/cards`, card)
      .then((response) => {
        let updatedData = this.state.cards;
        updatedData.unshift(response.data);
        this.setState({
          cards: updatedData,
          error: '',
        });
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
  }

  allCards = () => {
    return this.state.cards.map((card) => {
      return <Card
        key={card.card.id}
        id={card.card.id}
        {...card.card}
        deleteCardCallback={this.deleteCard}
      />
    });
  }

  render() {
    return (
      <section>
        <div className='validation-errors-display'>
          {this.state.error ? <p className='validation-errors-display__list'>{`An error occurred: ${this.state.error}`}</p> : null}
        </div>
        <NewCardForm addCardCallback={this.addCard}/>
        <div className='board'>
          {this.allCards()}
        </div>
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
