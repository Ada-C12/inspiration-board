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
      hardcodedCards: CARD_DATA.cards,
      error: '',
    };

    // console.log(this.state.cards)
    // console.log(this.state.hardcodedCards)
  }

  componentDidMount() {
    // componentDidMount is used to make sure the entire component is rendered. This axios call does not correspond, with an event
    // This axios call is used to get all the cards to load the board, so we need to make sure that the component fully renders
    // first. Axios calls are asynchronous so they can happen at any time. 
    const {url, boardName} = this.props;
    
    const boardCards = `${url}${boardName}/cards`;

    axios.get(boardCards)
      .then((response) => {
        this.setState({ 
          // setState replaces the initial value of cards
          cards: response.data 
        });
        // console.log(response.data)
      })
      .catch((error) => {
        this.setState({
          error: error.message 
        });
      });
  }

  deleteCard = (cardId) => {
    // we had to make this into an arrow function in order for the callback in card to be able to access the this of the Board.
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
    // the axios call is deleting the card, but I don't think the filter method is working. Cards array is only
    // getting updated with the axios call. 
      .then((response) => {
        // console.log(this.state.cards)
        // console.log(response)
        const filteredCards = this.state.cards.filter(card => card.card.id !== cardId); 

  
        this.setState({
          cards: filteredCards
        });

        // console.log(cardId)
        // console.log(this.state.cards)
        // console.log(filteredCards)
      })
      .catch((error) => {
        this.setState({ 
          error: error.message,
        });
      });
  };

  makeCollection () {
    const apiCards = this.state.cards.map((card, i) => {
      return <Card
        cardText={card.card.text}
        id={card.card.id}
        cardEmoji={card.card.emoji}
        deleteCardCallback={this.deleteCard}
        key={i}
      />;
      // what does deleteCard look like when its passed into deleteCardCallback
    }
    );
    return apiCards
  }

  addCard = (card) => {
    const {boardName} = this.props;
    axios.post(`https://inspiration-board.herokuapp.com/boards/${boardName}/cards`, card)
    .then((response) => {
      // We can update the state so we don't need to make another GET request
      const updatedCards = this.state.cards;

      updatedCards.push(response.data);

      this.setState({
        cards: updatedCards,
        error: ''
      });
    })
    .catch((error) => {
      // Use the same idea we had in our GET request
      this.setState({ error: error.message });
    });
  }

  render() {
    return (
      <section>
        <h3 className='validation-errors-display'>Board</h3>
        <div className='board'>

          {this.makeCollection()}

          <NewCardForm addCardCallback={this.addCard}/>
        </div>
      </section>
    )
  }
}

Board.propTypes = {

};

export default Board;
