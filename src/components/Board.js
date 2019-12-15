import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super();
    this.url = props.url;
    this.boardName = props.boardName;
    this.state = {
      cards: [],
      error: '',
      newCardForm: {text: '', emoji: ''}
    };
  }
  
  componentDidMount() {
    console.log('component mounted');
    
    axios.get(this.url + this.boardName + '/cards')
      .then(response => {
        this.setState({
          cards: response.data
        })
      })
      .catch(error => {
        this.setState({
        error: error
        })        
    })
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  addCard = (data) => {    
    axios.post(this.url + this.boardName + '/cards', data)
      .then(response => {
        const { cards } = this.state;
        cards.push(response.data);
        this.setState({
          cards,
          newCardForm: {text: '', emoji: ''}
        })
        console.log('successful post');
      })
      .catch(error => {
        this.setState({
        error: error
      })
    })
  }

  deleteCard = (data) => {
    axios.delete('https://inspiration-board.herokuapp.com/cards/' + data)
      .then((response) => {
        let { cards } = this.state;
        let updatedCards = cards.filter(card => card.card.id !== response.data.card.id);
        this.setState({
          cards: updatedCards,
        })
        console.log('successful delete');
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  render() {
    const cards = this.state.cards.map((card, i) => {
      card = card.card;
        return (
          <Card key={i} cardId={i} deleteCardCallback={this.deleteCard} {...card} ></Card>
        )
      })

    if (this.state.error) {
      return (
        <div className="header__text">
          {this.state.error.message}
        </div>
      )
    } else {
      return (
        <div className="board">
          {cards}
          <div>
            <NewCardForm addCard={this.addCard} newCardForm={this.state.newCardForm}></NewCardForm>
          </div>
        </div>
      )
    }
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
