import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: ''
    };
    console.log(this.state.cards);
  }

  componentDidMount () {
    axios.get('https://inspiration-board.herokuapp.com/boards/KKennedyCodes/cards')
      .then((response) => {
        this.setState({
          cards: response.data,
        });
      })
      .catch((error) => {
        console.log(`Cards Did Not Load - Message: ${error.data}`)
      });
  }

  getCards = (cards) => {
    return cards.map((card) => {
      return <Card
        key={card.card.id}
        deleteCardCallback={this.deleteCard}
        {...card.card}
        
      />
      
    });
  }


  deleteCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${ cardId }`)
      .then((response) => {
        const cards = this.state.cards.filter(({card}) => card.id !== cardId);

        this.setState({
          cards,
          fullList: cards,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  addCard = (card) => {
    console.log('card = ', card);
    axios.post('https://inspiration-board.herokuapp.com/boards/KKennedyCodes/cards/', card)
      .then((response) => {
        // We can update the state so we don't need to make another GET request
        const updatedData = this.state.cards;
        console.log(response.data);
        updatedData.push(response.data);
        this.setState({
          cards: updatedData,
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
      
      <div className='board'>
        <NewCardForm addCardCallback={this.addCard}/>
        {this.getCards(this.state.cards)}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
